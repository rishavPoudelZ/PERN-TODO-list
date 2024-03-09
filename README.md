## PERN stack  TODO List

Todo list made using Postgres SQL, express.js, react.js, and node.js.  
The development is divided into client and server. we will be working with React on the client side. Whereas we will be working with node, express, and Postgres on the server. 

### Client
I have used Vite to create the React project. The components folder inside the src folder contains the code for all components on the client side.  
  **1.inputHeader.js**  
  The inputHeader.js file contains the code for the input field at the top of the page. It deals with adding      items to the database. It deals with the "POST" method.  
  **2.list.jsx**  
  To list out the items that are in the database. It creates the table that holds the db items It also has        the code for deleting an item from the db. It deals with "GET" and "DELETE" methods.  
  **3.editButton.js**  
  It deals with the logic behind the edit button. It puts out a "PUT" request to the server to update items in    the database.  

### Server
  **1.db.js**  
  It creates a pool that is used to connect our application with the database.  
  **2.index.js**  
  It deals with the different types of requests coming from the client side.
