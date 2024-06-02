const express = require('express'); //importing the express package
const app = express(); //create a web application
const pool = require('./connection');
const cors = require('cors');

app.use(cors()); //will grant or allow access from the frontend

///this middleware gets executed whenever there is a call or request//
//it's the first thing getting executed since it's at the top
//this function tells it to allow any request
//the * in the parameters means "allow it from any origin"
//usually in real-world, change this accordingly depending on required 
//security level
app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Acess-Control-Allow-Methods", '*');
    res.setHeader("Access-Control-Allow-Headers", "*");
    next();
})

app.use(express.json());

app.use(cors());

//home route
app.get('/', function(req, res){
    res.send('Hello world');
});

//get all plant info entries
app.get('/plant_info/', async(request, response)=>{
    //get the connection
    const connection = await pool.getConnection();
    try {
        //return the query result
        const result = await connection.query('SELECT * FROM gardening_manuals.plant_info');
        response.status(200).json({
            users: result,
        });
    } catch (error) {
        response.send(500).send(error);
    }
});

//get all users info entries
app.get('/users/', async(request, response)=>{
    //get the connection
    const connection = await pool.getConnection();
    try {
        //return the query result
        const result = await connection.query('SELECT user_id, email, username FROM gardening_manuals.users');
        response.status(200).json({
            users: result,
        });
    } catch (error) {
        response.send(500).send(error);
    }
});


//get all plant categories info entries
app.get('/plant_categories/', async(request, response)=>{
    //get the connection
    const connection = await pool.getConnection();
    try {
        //return the query result
        const result = await connection.query('SELECT * FROM gardening_manuals.plant_categories');
        response.status(200).json({
            users: result,
        });
    } catch (error) {
        response.send(500).send(error);
    }
});

//get all user favourites info entries
app.get('/user_faves/', async(request, response)=>{
    //get the connection
    const connection = await pool.getConnection();
    try {
        //return the query result
        const result = await connection.query('SELECT * FROM gardening_manuals.user_faves');
        response.status(200).json({
            users: result,
        });
    } catch (error) {
        response.send(500).send(error);
    }
});

app.get('/users/:id', async (request, response) => {
    const connection = await pool.getConnection();
    const id = request.params.id;
    try {
        const result = await connection.query(`
        SELECT * 
        FROM gardening_manuals.users
        WHERE user_id = ?`, id);

        if (result.length == 0){
            return response.status(500).json("User not found");
        }
        return response.status(200).json({
            users: result,
        });
    } catch (error) {
        response.status(500).json(error);
    }

});


app.get('/plant_info/:id', async (request, response) => {
    const connection = await pool.getConnection();
    const id = request.params.id;
    try {
        const result = await connection.query(`
        SELECT * 
        FROM gardening_manuals.plant_info
        WHERE plant_id = ?`, id);
        response.status(200).json({
            plant_info: result,
        });
    } catch (error) {
        response.send(500).send(error);
    }

});

app.get('/user_faves/:id', async (request, response) => {
    const connection = await pool.getConnection();
    const id = request.params.id;
    try {
        const result = await connection.query(`
        SELECT * 
        FROM gardening_manuals.user_faves
        WHERE user_id = ?`, id);
        response.status(200).json({
            user_faves: result,
        });
    } catch (error) {
        response.send(500).send(error);
    }

});


app.get('/plant_categories/:id', async (request, response) => {
    const connection = await pool.getConnection();
    const id = request.params.id;
    try {
        const result = await connection.query(`
        SELECT * 
        FROM gardening_manuals.plant_categories
        WHERE plant_category_ID = ?`, id);
        response.status(200).json({
            plant_categories: result,
        });
    } catch (error) {
        response.send(500).send(error);
    }
});

//add a new user 
app.post('/users/', async (request, response) => {
    const connection = await pool.getConnection();
    const { email, username, password } = request.body;

    if(!email ) return response.status(500).send('Please provide an email');

    if(!username ) return response.status(500).send('Please provide a username');

    if(!password) return response.status(500).send('Please provide a password');
    
    try {
        const result = await connection.query(`
        INSERT INTO gardening_manuals.users (email, username, password)
        VALUES (?, ?, ?)`, [email, username, password]);
        return response.status(200).send(`Rows inserted ${result.affectedRows}`);

    } catch (error) {
        console.log(error);
        return response.status(500).send(error);
    }
});


//add new plant entry
app.post('/plant_info/', async (request, response) => {
    const connection = await pool.getConnection();
    const { plant_name, plant_category_ID, water, sunlight, spacing, soil, video_tutorial_link, how_to_plant, how_to_harvest } = request.body;

    if(!plant_name || !plant_category_ID  ) return response.status(500).send('Please provide both plant name and plant category ID');

    try {
        const result = await connection.query(`
        INSERT INTO gardening_manuals.plant_info (plant_name, plant_category_ID, water, sunlight, spacing, soil, video_tutorial_link, how_to_plant, how_to_harvest)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`, [plant_name, plant_category_ID, water, sunlight, spacing, soil, video_tutorial_link, how_to_plant, how_to_harvest]);
        return response.status(200).send(`Rows inserted ${result.affectedRows}`);

    } catch (error) {
        console.log(error);
        return response.status(500).send(error);
    }
});

app.post('/plant_categories/', async (request, response) => {
    const connection = await pool.getConnection();
    const { plant_category_name } = request.body;

    if(!plant_category_name ) return response.status(500).send('Please provide both and plant category ID');

    try {
        const result = await connection.query(`
        INSERT INTO gardening_manuals.plant_categories ( plant_category_name)
        VALUES ( ?)`, [plant_category_name]);
        return response.status(200).send(`Rows inserted ${result.affectedRows}`);

    } catch (error) {
        console.log(error);
        return response.status(500).send(error);
    }
});

//add new user fave
///ERROR: Cannot POST /users_faves/</pre>
app.post('/user_faves/', async (request, response) => {
    const connection = await pool.getConnection();
    const { user_id, plant_id } = request.body;

    if(!user_id || !plant_id  ) return response.status(500).send('Please provide both user ID and plant ID');

    try {
        const result = await connection.query(`
        INSERT INTO gardening_manuals.user_faves (user_id, plant_id)
        VALUES (?, ?)`, [user_id, plant_id]);
        return response.status(200).send(`Rows inserted ${result.affectedRows}`);

    } catch (error) {
        console.log(error);
        return response.status(500).send(error);
    }
});

//Update users table password by username
app.patch('/users/:username', async (request, response) => {
    const connection = await pool.getConnection();
    const username = request.body.username;
    
    if(!username) return response.status(500).send('Please provide a username to update password');

    try{
        const result = await connection.query(`
        UPDATE gardening_manuals.users
        SET password = ?
        WHERE username = ?`, [password, username]);
        return response.status(200).send(`Number of rows updated = ${result.affectedRows}`);
    } catch (error) {
        console.log(error);
        return response.status(500).send(error.toString());
    }

});

//update users email
app.patch('/users/username/:username', async (request, response) => {
    const connection = await pool.getConnection();
    const username = request.params.username;
    const email = request.body.email;
    
    if(!username) return response.status(500).send('Please provide a username to update email');

    try{
        const result = await connection.query(`
        UPDATE gardening_manuals.users
        SET email = ?
        WHERE username = ?
        `, [username, email]);
        return response.status(200).send(`Number of rows updated = ${result.affectedRows}`);
    } catch (error) {
        console.log(error);
        return response.status(500).send(error.toString());
    }

});

//DELETE user by user_id
app.delete('/users/:id', async (request, response) => {
    const connection = await pool.getConnection();
    const id = request.params.id;    
    
    try{
        const result = await connection.query(`
        DELETE FROM gardening_manuals.users
        WHERE user_id = ?`, id);
        return response.status(200).send(`Number of records deleted = ${result.affectedRows}`);
    } catch (error) {
        console.log(error);
        return response.status(500).send(error.toString());
    }

});

//DELETE plant entry by plant_id
app.delete('/plant_info/:id', async (request, response) => {
    const connection = await pool.getConnection();
    const id = request.params.id;    
    
//alter table users add a new column is_deleted the default value for this user is 0
// We will update that column here in this request
// which will be an update query instead of delete
//update users set is_deleted = 1 where user_id = id provided in the request

    try{
        const result = await connection.query(`
        DELETE FROM gardening_manuals.plant_info
        WHERE plant_id = ?`, id);
        return response.status(200).send(`Number of records deleted = ${result.affectedRows}`);
    } catch (error) {
        console.log(error);
        return response.status(500).send(error.toString());
    }

});

//delete entry from user_faves using user_id 
// question: how to delete using user_id and plant_id??
app.delete('/user_faves/:id', async (request, response) => {
    const connection = await pool.getConnection();
    const id = request.params.id;    
    
    try{
        const result = await connection.query(`
        DELETE FROM gardening_manuals.user_faves
        WHERE user_id = ?`, id);
        return response.status(200).send(`Number of records deleted = ${result.affectedRows}`);
    } catch (error) {
        console.log(error);
        return response.status(500).send(error.toString());
    }

});





//create the web server
app.listen(3000, function(){
    console.log('Server running on port 3000....');
});

