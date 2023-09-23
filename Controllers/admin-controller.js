// import users  from "../Models/users";   
const users = require("../Models/users");
export const GetAllUser = async (req, res,next)=>{
    let users;

    try {
        users = await users.find();

    }catch (err){

    }
    if (!users){
        return res.status(404).json({message: "No users found"});
    }else {
        return res.status (200).json({users});
    }
}

export const signup = async(req,res,next)=>{

    const {name, email, password} = req.body;
    let existingUser;
    try {
            existingUser = await users.findone({email});
    }catch (err){
        return console.log(err);
    }
    if (existingUser){
        return res.status(400).json({message:"User already exist! Login instead"});
    }
    const users = new User({
        name,
        email, 
        password,
    });

    try {
        await users.save();

    }catch (err){
        return console.log (err);

    }
    return res.status(200).json({user});
}