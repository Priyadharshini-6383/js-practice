const express = require("express"); 
const router = express.Router();

const {postuser,getuser,UserById} = require("./controller.js");
const Roles = require("../Authentication./Roles.js");

router.get("/user/:name" , (req,res) => {
   const name = req.params.name;
   res.send(`Hello [${name}]!`);   
   })

   
   router.post("/" , postuser);


   router.get("/" , getuser);


   router.get ("/:id" , UserById);
   

module.exports = router;

