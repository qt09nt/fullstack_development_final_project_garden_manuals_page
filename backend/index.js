const express = require('express'); //importing the express package
const app = express(); //create a web application

const pool = require('./connection');
const cors = require('cors');

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








//create the web server
app.listen(3000, function(){
    console.log('Server running on port 3000....');
});

