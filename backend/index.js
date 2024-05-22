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
        const result = await connection.query('SELECT * FROM gardening_manuals.users');
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
        response.status(200).json({
            users: result,
        });
    } catch (error) {
        response.send(500).send(error);
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

app.post('/users/', async (request, response) => {
    const connection = await pool.getConnection();
    const { email, username } = request.body;

    if(!email || !username  ) return response.status(500).send('Please provide both username and email');

    try {
        const result = await connection.query(`
        INSERT INTO gardening_manuals.users (email, username)
        VALUES (?, ?)`, [email, username]);
        return response.status(200).send(`Rows inserted ${result.affectedRows}`);

    } catch (error) {
        console.log(error);
        return response.status(500).send(error);
    }
});



app.post('/plant_info/', async (request, response) => {
    const connection = await pool.getConnection();
    const { plant_name, plant_category_ID } = request.body;

    if(!plant_name || !plant_category_ID  ) return response.status(500).send('Please provide both plant name and plant category ID');

    try {
        const result = await connection.query(`
        INSERT INTO gardening_manuals.plant_info (plant_name, plant_category_ID)
        VALUES (?, ?)`, [plant_name, plant_category_ID]);
        return response.status(200).send(`Rows inserted ${result.affectedRows}`);

    } catch (error) {
        console.log(error);
        return response.status(500).send(error);
    }
});

app.post('/plant_categories/', async (request, response) => {
    const connection = await pool.getConnection();
    const { plant_category_ID, plant_category_name } = request.body;

    if(!plant_category_ID || !plant_category_name ) return response.status(500).send('Please provide both plant category name and plant category ID');

    try {
        const result = await connection.query(`
        INSERT INTO gardening_manuals.plant_categories (plant_category_ID, plant_category_name)
        VALUES (?, ?)`, [plant_category_ID, plant_category_name]);
        return response.status(200).send(`Rows inserted ${result.affectedRows}`);

    } catch (error) {
        console.log(error);
        return response.status(500).send(error);
    }
});

app.post('/user_faves/', async (request, response) => {
    const connection = await pool.getConnection();
    const { user_id, plant_id } = request.body;

    if(!plant_id || !user_id ) return response.status(500).send('Please provide both plant ID and user ID');

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

//Update users
app.put('/users/:user_id', async (request, response) => {
    const connection = await pool.getConnection();
    const user_id = request.params.id;
    const username = request.body.name;
    
    if(!username) return response.status(500).send('Please provide a username to update');

    try{
        const result = await connection.query(`
        UPDATE gardening_manuals.users
        SET username = ?
        WHERE user_id = ?`, [username, user_id]);
        return response.status(200).send(`Number of rows updated = ${result.affectedRows}`);
    } catch (error) {
        console.log(error);
        return response.status(500).send(error.toString());
    }

});






//create the web server
app.listen(3000, function(){
    console.log('Server running on port 3000....');
});

