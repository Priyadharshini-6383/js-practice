const express = require("express");
const app = express();

const router = require("./router.js");
const database = require("./database.js");
const Auth = require("../Authentication/Auth.js");


const PORT = 3000;

database();

app.use(express.json());
app.use(Auth);

app.use(express.urlencoded({extended : true}))

app.get('/' , (req,res) => {
    res.json({message : "Hello World"});
});

app.use((req,res,next) => {
    const timestamp = new Date().toISOString();
    console.log(`date and time  :${timestamp} | method :${req.method}`);
    next();
})
app.use("/user" , router);

app.listen(PORT , () => {
    console.log(`The server running in the http://localhost:${PORT}`);
});