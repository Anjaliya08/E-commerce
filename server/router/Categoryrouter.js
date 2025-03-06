import express from "express";
import {isAdmin, requireSignIn} from "../middlewares/authMiddleware.js";
import{
    CategoryController,
    createCategoryController,
    singleCategoryController,
    updateCategoryController,
    deleteCategoryController,

} from"../controller/categorycontroller.js";

const router = express.Router();

//create category

router.post("/createcategory", requireSignIn, isAdmin, createCategoryController);

//update category 
router.put(
    "/update-category/:id",
    requireSignIn,
    isAdmin,
    updateCategoryController
);

//getAll category 
router.get("/get-category",CategoryController);

//single category
router.get("/single-category/:slug", singleCategoryController);

//delete category
router.delete(
    "/delete-category/:id",
    requireSignIn,
    isAdmin,
    deleteCategoryController
);

export default router;