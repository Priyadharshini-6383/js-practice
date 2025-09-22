const express = require("express"); 
const router = express.Router();

const controllers = require("./controller.js");

router.get("/user/:name" , (req,res) => {
   const name = req.params.name;
   res.send(`Hello [${name}]!`);   
   })

   
   router.post("/" , postuser);


   router.get("/" , getuser);


   router.get ("/:id" , UserById);
   

module.exports = router;

