import mongoose from "mongoose";

const ConnectDB = async() => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/amazon7")
        console.log("DB Connected")

    } catch (error) {
        console.log("DB Connection Loss")
    }
}
export default ConnectDB;