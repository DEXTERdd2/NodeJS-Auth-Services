const mongoose = require("mongoose");


const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type:String,
        required:true
    },
    user : {
        type:String,
        required:true,
        unique:true
    },

    password:{
        type:String,
        required:true,
        minlength:6
    }
});


export default mongoose.model("User", userSchema);
