const express = require("express"); 
const router = express.Router();

const controllers = require("./controller.js");

router.get("/user/:name" , (req,res) => {
   const name = req.params.name;
   res.send(`Hello [${name}]!`);   
   })

   
   router.post("/" , controller.postuser);


   router.get("/" , controller.getuser);


   router.get ("/:id" , controller.UserById);
   

module.exports = router;

