import productModel from '../model/productModel';

/**
 * Get the all products details 
 * @param req 
 * @param res 
 */
const allProducts = async (req,res) => {
    try{
        res.status(201).json(await productModel.find({}));
    }catch(err){
        res.status(500).send(err);
    };
}

/**
 * add product details 
 * @param req 
 * @param res 
 * 
 */
const addProduct = async (req,res) => {
    try{
        const newProduct = new productModel(req.body)
        res.status(200).json(await newProduct.save());
    }
    catch(err) {
         res.staus(404).send(err);
    }
}

/**
 * buy the product
 * @param req 
 * @param res 
 */
const buyProduct = async (req,res) => {
    try{
        const query = productModel.findOne({productId: req.params.id}); 
        res.status(201).json(await productModel.find(query));
    }catch (err) {
        res.status(404).send(err);
    }
}

const productMethods = {
    allProducts,
    addProduct,
    buyProduct,
};

export default productMethods;