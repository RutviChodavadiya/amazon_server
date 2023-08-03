import express from "express";
import productController from "./Product/ProductController.js";
import cors from "cors"
import ConnectDB from "./Connection.js";
import userController from "./User/UserController.js";
import env from 'dotenv'
env.config()


const app = express()
ConnectDB()

app.use(express.json())
app.use(cors())


app.get("/", (req, res) => {
    return res.status(500) .send({ message: "Success" })
})


app.get("/api/product", productController.getProduct)
app.get("/api/product/:id",productController.getProductById)
// app.get("/api/product/:insertMany",productController.insertProducts)

app.post("/api/user",userController.InsertUser)
app.post("/user/login", userController.userLogin)

app.listen(5000, () => {
    console.log("server started")
})



