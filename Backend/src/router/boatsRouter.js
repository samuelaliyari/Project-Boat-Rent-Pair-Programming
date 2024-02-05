import { Router } from "express";
import { controller } from "../controller/index.js";

const boatsRouter = Router();

boatsRouter.get('/', controller.getAllBoats);

boatsRouter.get('/:boatId', controller.getOneBoat);

boatsRouter.delete('/delete/:boatId', controller.deleteBoat);

boatsRouter.put('/edit', controller.editBoat);

boatsRouter.post('/add', controller.addNewBoat);

export default boatsRouter;