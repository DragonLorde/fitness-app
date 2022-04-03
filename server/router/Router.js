import Router  from "express";
import { login, setLogin, updateLogin, setTrainer, getAllTrainers, addUser, getAllUser,checkUser } from './routes.js';
import adminController from "../controller/adminController.js";
import trainerController from "../controller/trainerController.js";
import userController from "../controller/userController.js";

const router = new Router();

router.get(login, adminController.Login);;
//router.post(setLogin, adminController.setLogin);
router.put(updateLogin, adminController.updateLogin);

router.post(setTrainer, trainerController.addTrainer);
router.get(getAllTrainers, trainerController.getAll);

router.post(addUser, userController.addUser);
router.get(getAllUser, userController.getAllUser);
router.get(checkUser, userController.CheckUser);

export default router;