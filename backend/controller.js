const schema = require("../schema.js");



const postuser = async(req,res)=> {
    const user = new details ({
    Name : req.params.Name,
    Age : req.params.Age,
    Role : req.params.Role,
    })
try {
const details = await save.postuser();
res.send(201).json(details);
}
catch(error) {
    res.send(404).json({message : "Error found"});
}
};

const getuser = async (req,res) => {
    try {
        const user = await User.find();
        res.send(201).json(user);

} catch (error) {
    res.send(404).json({message : "Error Found"});
}
};


const UserById = async (req,res) => {
   try {

    const userid = await User.FindById(req.params.id);
     if(userid == null) {
        res.send(404).json({message : "user not found"});
     }
     else {
        res.send(userid);
     }
   }
   catch (error) {
    res.send(404).json({message : "Error found"});
   }
};

module.exports = {postuser , getuser , UserById} 