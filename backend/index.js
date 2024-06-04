const express = require('express'); //importing the express package
const app = express(); //create a web application
const pool = require('./connection');
const cors = require('cors');

app.use(express.json());

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
        const result = await connection.query('SELECT user_id, email, username FROM gardening_manuals.users WHERE is_deleted = 0');
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

//get the users info using user_id
app.get('/users/:id', async (request, response) => {
    const connection = await pool.getConnection();
    const id = parseInt(request.params.id);
    // check that id is a number only and not any other data type
        //problem is that const id = string from what is retrieved from the id part in the url
        if (typeof id != "number") {   
            return response.status(500).json("User id must be a number");
        } else if(isNaN(id)){
            return response.status(500).json("User id must be a number");
        }
        //ERROR: since id is a string, it will always be false, and the error message "User id must be a number" is always
        //shown even when it's a valid ID

    
        //when you use the Number() constructor to explicitly typecast a string that holds a number
        // to a number or even a value like an actual string that cannot be typecasted to an integer, 
        //it will always return a number as its data type:
        // if (typeof Number(id) != "number"){
        //    return response.status(500).json("User id must be a number");
        // }
        // ERROR: id is always converted to number so the error message will not show up even when it's
        // a string id
        
        //ERROR: always returns "{}" even if it's a valid user_id
        // returns "{}" even if id is a random string

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

        if (result.length == 0){
            return response.status(500).json("Plant id not found");
        }

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

    // // // check that id is a number only and not any other data type
    // if (typeof(id) != typeof(12345)){

    //     return response.status(500).json("user_id must be a number");
    // } 

    try {
        const result = await connection.query(`
        SELECT * 
        FROM gardening_manuals.user_faves
        WHERE user_id = ?`, id);

        if (result.length == 0){
            return response.status(500).json("user id not found");
        }
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
    
    if (length.password === 0) return response.status(500).send('Password can not be empty');

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

//add a new plant category
app.post('/plant_categories/', async (request, response) => {
    const connection = await pool.getConnection();
    const { plant_category_name } = request.body;

    if(!plant_category_name ) return response.status(500).send('Please provide a plant category name');
    if(typeof(plant_category_name) == "number") return response.status(500).send("Plant category name should be a string not a number")
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
app.patch('/users/change_password/:username', async (request, response) => {
    const connection = await pool.getConnection();
    const username = request.body.username;
    const password = request.body.password;

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
app.patch('/users/username/update_email/:username', async (request, response) => {
    const connection = await pool.getConnection();
    const username = request.params.username;
    const email = request.body.email;
    const password = request.body.password;

    if(!username) return response.status(500).send('Please provide a username to update email');
    
    if(!password) return response.status(500).send('Please provide a password to update email');
//new parameter in the request for new email 
    //write a select query to get email and password from the database
    
    // try {
    //     const result = await connection.query(`
    //     SELECT email, password FROM gardening_manuals.users WHERE email = email AND 
    //     WHERE password = password
    //     `)
    // }
    
    // SELECT * FROM gardening_manuals.users WHERE email = email
    //compare the password with the password provided in the api
    // add in the database for the email to be unique

    //if the password matches write an update query to update the email;
    try{
        const result = await connection.query(`      
        UPDATE gardening_manuals.users
        SET email = ?
        WHERE username = ?
        AND is_deleted = 0`, [username, email] );   //is_deleted = 0 means look only at active users account, not deleted ones
        return response.status(200).send(`Number of rows updated = ${result.affectedRows}`);
    } catch (error) {
        console.log(error);
        return response.status(500).send(error.toString());
    }

});


//Soft DELETE user by user_id in the is_deleted column of users table
app.patch('/users/delete/:id', async (request, response) => {
    const connection = await pool.getConnection();
    const id = request.params.id;    
    const is_deleted = request.body.is_deleted; 

    try{
        // const result = await connection.query(`
        // DELETE FROM gardening_manuals.users
        // WHERE user_id = ?`, id);
        const result = await connection.query(`
        UPDATE gardening_manuals.users
        SET is_deleted = ?
        WHERE user_id = ?`,
        [is_deleted, id]);

        //check if user_id exists
        if (result.length == 0){
            return response.status(500).json("User not found");
        }
        return response.status(200).send(`Number of records deleted = ${result.affectedRows}`);
    } catch (error) {
        console.log(error);
        return response.status(500).send(error.toString());
    }

});

//soft DELETE plant entry by plant_id
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

//Delete plant category by plant_category_id
app.delete('/plant_categories/:id', async (request, response) => {
    const connection = await pool.getConnection();
    const id = request.params.id;    
    
    try{
        const result = await connection.query(`
        DELETE FROM gardening_manuals.plant_categories
        WHERE plant_category_ID = ?`, id);
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

//register user
app.post('/register/', async (request, response) =>{
    const {username, password, confirm_password} = request.body;
    // const username = request.body.username;
    // const password = request.body.password;
    // const confirm_password = request.body;

    if (!username || !password || !confirm_password) response.status(500).json('All fields are required');
    
    if(password != confirm_password) response.status(500).json('Password does not match with confirm password')

    const connection = await pool.getConnection();

    try {
        const result = connection.query(`INSERT INTO gardening_manuals.users (username, password)
                                                VALUES ? , ? `, [username, password]);
    } catch(error){

    }

    //get the database connection
    //insert values in database
    //encrypt the password

})

app.post('/login/', async (request, response) =>{

})



//create the web server
app.listen(3000, function(){
    console.log('Server running on port 3000....');
});

