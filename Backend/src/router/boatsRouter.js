import { Router } from "express";
import services from "../services";


const boatsRouter = Router();

boatsRouter.get('/', async (_, res) => {
    try {
        const allBoats = await services.getAll('boats');
        res.status(OK).json({
            success: true, result: allBoats
        });
    } catch (error) {
        res.status(INTERNAL_SERVER_ERROR).json({
            success: false, error: error
        });
    };
});

boatsRouter.get('/:boatId', async (req, res) => {
    const boatId = req.params.boatId;
    try {
        const boat = await services.getOneById('boats', boatId);
        res.status(OK).json({
            success: true, result: boat
        });
    } catch (error) {
        res.status(INTERNAL_SERVER_ERROR).json({
            success: false, error: error
        });
    };
});

boatsRouter.delete('/delete/:boatId', async (req, res) => {
    const boatId = req.params.boatId;
    try {
        const deletedBoat = await services.deleteOneById('boats', boatId);
        res.status(OK).json({
            success: true, result: deletedBoat
        });
    } catch (error) {
        res.status(INTERNAL_SERVER_ERROR).json({
            success: false, error: error
        });
    };
});

boatsRouter.put('/edit', async (req, res) => {
    const editedBoatObj = req.body;
    try {
        const editedBoat = await services.editOne('boats', editedBoatObj);
        res.status(OK).json({
            success: true, result: editedBoat
        });
    } catch (error) {
        res.status(INTERNAL_SERVER_ERROR).json({
            success: false, error: error
        });
    };
});

boatsRouter.post('/add', async (req, res) => {
    const newBoatObj = req.body;
    try {
        const newBoat = await services.insertNew('boats', newBoatObj);
        res.status(OK).json({
            success: true, result: newBoat
        });
    } catch (error) {
        res.status(INTERNAL_SERVER_ERROR).json({
            success: false, error: error
        });
    };
});