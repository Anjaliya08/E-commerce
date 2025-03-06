import express from "express";
import {isAdmin, requireSignIn} from "../middlewares/authMiddleware.js";
import formidable from "express-formidable";
import{
    createProductController,
    ProductController,
    ProductPhotoController,
    deleteProductController,
    updateProductController,
    getSingleProductController,
    productListController,
    productFilterController,
    productCountController,
    brainTreePaymentController,
    braintreeTokenController,
    
} from"../controller/productcontroller.js";


const router = express.Router();

router.post("/create-product", requireSignIn, isAdmin, formidable(), createProductController);

//getAll product
router.get("/get-product",ProductController);

//get photo
router.get("/product-photo/:pid", ProductPhotoController);

//delete product
router.delete("/delete-product/:pid",deleteProductController);

//update product
router.put(
    "/update-product/:pid",
    requireSignIn,
    isAdmin,
    formidable(),
    updateProductController
);

//single product
router.get("/get-product/:slug",getSingleProductController)

//product list
router.get("/product-list/:page",productListController)

//filter product
router.post("/product-filters", productFilterController);

//product count
router.get("/product-count",productCountController);

//payments routes
router.get("/braintree/token", braintreeTokenController);
//payments
router.post("/braintree/payment", requireSignIn, brainTreePaymentController);

export default router;
