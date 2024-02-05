import { services } from "../services/index.js";
import { status } from "./status.js";

export const addNewBoat = async (req, res) => {
    const newBoatObj = req.body;
    try {
        const newBoat = await services.insertNew('boats', newBoatObj);
        res.status(status.CREATED).json({
            success: true, result: newBoat
        });
    } catch (error) {
        res.status(INTERNAL_SERVER_ERROR).json({
            success: false, error: error
        });
    };
};