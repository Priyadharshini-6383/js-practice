const User = require("./schema.js");



const postuser = async(req,res)=> {
  
try {
    const user = new User ({
    Name : req.body.Name,
    Age : req.body.Age,
    Role : req.body.Role,
    })
const Newuser = await user.save();
res.status(201).json(Newuser);
}
catch(error) {
    res.status(404).json({message : "Error found"});
}
};

const getuser = async (req,res) => {
    try {
        const user = await User.find();
        res.status(201).json(user);

} catch (error) {
    res.status(404).json({message : "Error Found"});
}
};


const UserById = async (req,res) => {
   try {

    const userid = await User.findById(req.params.id);
     if(userid == null) {
        res.status(404).json({message : "user not found"});
     }
     else {
        res.status(userid);
     }
   }
   catch (error) {
    res.status(404).json({message : "Error found"});
   }
};

module.exports = {postuser , getuser , UserById} ;