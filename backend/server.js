// Import the express module to create an HTTP server
const express = require('express');

// Initialize the express application
const app = express();

// Define the port number on which the server will listen
const PORT = 3001;

// Apply middleware to parse incoming JSON requests
// This allows us to access request body data in JSON format
app.use(express.json());

// Define a GET route for the root path '/'
// This route handler responds with 'Hello, World!' when the root URL is accessed
app.get('/', (req, res) => {
    // Send a response back to the client
    res.send('Hello, World!');
});

// Start the server and listen on the specified PORT
// The callback function confirms that the server has started successfully
app.listen(PORT, () => {
    // Log the server start message with the URL where it can be accessed
    console.log(`Server is running on http://localhost:${PORT}`);
});
