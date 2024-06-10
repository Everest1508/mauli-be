import express from 'express'
import { isAdmin, requiredSignIn } from "../middlewares/authMiddleware.js";
import { categoryController, createCategoryController, deleteCategoryController, singleCategoryController, updateCategoryController } from '../controllers/categorycontroller.js';

const router = express.Router();
//routes 

//create category
router.post('/create-category',createCategoryController);

//update category
router.put('/update-category/:id',updateCategoryController);

//get all category
router.get('/get-category',categoryController);


//single category
router.get('/single-category/:slug',singleCategoryController);

//delete route
router.delete('/delete-category/:id',deleteCategoryController);


export default router