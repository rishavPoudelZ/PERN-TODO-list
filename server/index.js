const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db.js")

//midleware
app.use(cors());

//express.json() helps us get the json data sent by the client
app.use(express.json());


//add method
app.post('/todos', async(req, res) =>{
    try {
        const { description } = req.body;
        const newTodo = await pool.query('INSERT into todos (description) VALUES($1) RETURNING *',[description]);
        res.json(newTodo.rows);
    } catch (err) {
        console.error(err.message);
    }
});

//get method
app.get('/todos', async(req, res) =>{
    try {
        const allTodos = await pool.query('SELECT * from todos');
        res.json(allTodos.rows);
    } catch (err) {
        console.error(err.message);
    }
});

//update method
app.put('/todos/:id', async(req, res) =>{
    try {
        const { id } = req.params;
        const { description } = req.body;
        const updatedTodo = await pool.query('UPDATE todos SET description = ($1) WHERE todo_id = ($2) RETURNING *',[description,id]);
        res.json(updatedTodo.rows)
    } catch (err) {
        console.error(err.message)
    }
});

//delete method
app.delete('/todos/:id', async(req, res) =>{
    try {
        const { id } = req.params;
        const deletedTodo = await pool.query('DELETE from todos WHERE todo_id = ($1)',[id]);
        res.json(deletedTodo)
    } catch (err) {
        console.error(err.message);
    }
})


//Server listen
app.listen(5000, () =>{
    console.log('server has started listening on port 5000');
});