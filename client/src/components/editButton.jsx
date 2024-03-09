import React, { useState, useEffect } from "react";

function EditTodo({item}) {
    const [description, setDescription] = useState(item.description);

    async function updateTodo(id){
        try {
            const body ={description};
            const repsonse = await fetch(`http://localhost:5000/todos/${id}`,{
                method : "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            window.location = '/';
        } catch (err) {
            console.error(err.message);
        }
    }

    return (
        <>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#ID${item.todo_id}`}>
                Edit
            </button>

            <div className="modal fade" id={`ID${item.todo_id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" onClick={() =>{setDescription(item.description)}}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Edit</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() =>{setDescription(item.description)}}></button>
                        </div>
                        <div className="modal-body">
                            <input type="text" className="form-control" value={description} onChange={(e) =>{setDescription(e.target.value)}}/>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() =>{setDescription(item.description)}}>Close</button>
                            <button type="button" className="btn btn-primary" onClick={() => updateTodo(item.todo_id)}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditTodo;