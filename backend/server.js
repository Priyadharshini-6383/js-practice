const express = require("express");
const app = express();

const router = require("./router.js");


const PORT = 3000;

app.get('/' , (req,res) => {
    res.json({message : "Hello World"});
});
app.use("/" , router);

app.listen(PORT , () => {
    console.log(`The server running in the http://localhost:${PORT}`);
});