const express = require("express");
const app = express();

const PORT = 3000;

app.get('/' , (req,res) => {
    res.json({message : "Hello World"});
});

app.listen(PORT , () => {
    console.log(`The server running in the http://localhost:${PORT}`);
});