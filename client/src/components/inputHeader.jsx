import { useState } from "react";

function InputHeader() {
    //using the useState hook to store the value of todo from the add section as the user types in
    const [description, setDescription] = useState("");
    
    //function to let user add items to the database
    async function addItem(e){
        e.preventDefault();
        try {
            const body = { description };
            // Sending a POST request to our express server with the description as body 
            const response = await fetch('http://localhost:5000/todos',{
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            // Refreshing to see the changes
            window.location = '/';
        } catch (err) {
            console.error(err.message);
        }
    };

    return(
      <>
        <h1 className="text-center mt-5">Todo list</h1>
        <form className="d-flex" onSubmit={ addItem }>
            <input type="text" className="form-control" onChange={e => setDescription(e.target.value)}/>
            <button className="btn btn-success" type="submit">Add</button>
        </form>
      </>
    )
};

export default InputHeader;