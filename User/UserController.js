import userModel from "./UserModel.js";
import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken"

class UserController {
    async InsertUser(req, res) {
        try {

            const password = bcrypt.hashSync(req.body.password, 8)
            if (!password) {
                return res.status(500).send({ message: "Something went wrong" })
            }

            const result = await userModel.create({ ...req.body, password: password })
            if (result) {
                return res.status(200).send({ message: "Success", user: result })
            }
            return res.status(500).send({ message: "Something went wrong" })
        } catch (error) {

            if (error && error.code && error.code === 11000) {
                return res.status(400).send({ message: "Email is Allready Exist" })
            }
            return res.status(500).send({ message: "internal server error" })
        }
    }

    async userLogin(req, res) {
        try {

            const { email, password } = req.body
            let result = await userModel.findOne({ email: email })
            if (!result) return res.status(400).send({ message: "Email not exist" })
            result = result._doc

            if (!bcrypt.compareSync(password, result.password)) {
                return res.status(400).send({ message: "Password and email are not match" })
            }

            delete result.password
            const token = Jwt.sign(result, process.env.JWT_SECRATE, {
                expiresIn: "30d"
            })
            result = {
                firstName: result.firstName,
                lastName: result.lastName,
                email: result.email,

            }
            if (!token) return res.status(500).send({ message: "Something went wrong" })
            return res.status(200).send({ message: "Success", userinfo: result, taken: token })     ``
        } catch (error) {
            console.log(error)
        }
    }
}
const userController = new UserController()
export default userController;