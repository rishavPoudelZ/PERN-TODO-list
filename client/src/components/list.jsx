import React, { useState, useEffect } from "react";
import EditTodo from "./editButton"

function List() {
    // using useState hook to store the value for the todo list in a array the state of list may change beacuse we can delete them so we use useState hook to handle them
    const [list, setList] = useState([]);

    // Function to get todo list from the server
    async function getTodos() {
        try {
            // Sending a get request to our express server
            const response = await fetch('http://localhost:5000/todos');
            const responseData = await response.json();
            // setting the list of todo we got as response from server
            setList(responseData);
        } catch (err) {
            console.error(err.message);
        }
    };

    // function to that sends a request to server to delete a specific item from the list from teh database
    async function deleteTodo(id) {
        try {
            // Sending a delete request to the server
            const response = fetch(`http://localhost:5000/todos/${id}`, {
                method: "DELETE",
            })
            // Setting the list to new array as we need to remove the deleted item
            // This way we dont have to refresh everytime we delete an item
            setList(list.filter(item => item.todo_id !== id))
        } catch (err) {
            console.error(err.message);
        }
    }

    // Using the useEffect hook so that everytime our component is rendered 
    useEffect(() => {
        getTodos();
    }, []);



    return (
        <>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Todo</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Mapping over the list of todos which creates a new row for every todo item */}
                    {list.map(item => (
                        <tr key={item.todo_id}>
                            <td>{item.description}</td>
                            <td><EditTodo item={item} /></td>
                            <td><button className="btn btn-danger" onClick={() => deleteTodo(item.todo_id)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
};

export default List;