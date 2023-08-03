
import productModel from "./ProductModel.js";

class ProductContoller {
    constructor() { }

    // async insertProducts(req, res){
    //     try {
    //         const result = await productModel.insertMany(products)
    //         if(!result){
    //             return res.status(500).send({message:"Something went wrong"})
    //         }
    //         return res.status(200).send({message:"Success"})
    //     } catch (error) {
    //         return res.status(500).send({message:"Internal server error"})

    //     }
    // }

    async getProduct(req, res) {
        try {

            const result = await productModel.find()
            if (result) {
                return res.status(200).send({ message: "Success", products: result })
            }
            return res.status(500).send({ mesage: "Something went wrong" })

        } catch (error) {
            return res.status(500).send({ mesage: "Internal server error" })
        }
    }


    async getProductById(req, res) {
        try {
            const { id } = req.params
            const result = await productModel.findById(id)
            if (result) {
                return res.status(200).send({ message: "Success", product: result })
            }
            return res.status(500).send({ mesage: "Something went wrong" })
        } catch (error) {
            return res.status(500).send({ mesage: "Internal server error" })
        }
    }

}

const productController = new ProductContoller()
export default productController;


