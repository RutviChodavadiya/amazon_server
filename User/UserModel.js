import mongoose from "mongoose";

class UserModel {
    constructor(){
        this.schema = new mongoose.Schema({
            firstName:{type:String, required:true},
            lastName:{type:String, required:true},
            email:{type:String, required:true, unique:true},
            phone:{type:Number, required:true},
            password:{type:String, required:true},
            isAdmin:{type:Boolean, default:false},
        },{
            timestamps:true
        })
    }

}

const user = new UserModel()
const userModel = mongoose.model("tbl_users",user.schema)
export default userModel;