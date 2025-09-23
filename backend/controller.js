const schema = require("../schema.js");



const postuser = async(req,res)=> {
    const user = new User ({
    Name : req.params.Name,
    Age : req.params.Age,
    Role : req.params.Role,
    })
try {
const details = await user.save();
res.status(201).json(user);
}
catch(error) {
    res.status(404).json({message : "Error found"});
}
};

const getuser = async (req,res) => {
    try {
        const user = await User.find();
        res.send(201).json(user);

} catch (error) {
    res.status(404).json({message : "Error Found"});
}
};


const UserById = async (req,res) => {
   try {

    const userid = await User.findById(req.params.id);
     if(userid == null) {
        res.send(404).json({message : "user not found"});
     }
     else {
        res.send(userid);
     }
   }
   catch (error) {
    res.status(404).json({message : "Error found"});
   }
};

module.exports = {postuser , getuser , UserById} 