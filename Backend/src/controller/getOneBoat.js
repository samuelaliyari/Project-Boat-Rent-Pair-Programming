import { services } from "../services/index.js";
import { status } from "./status.js";

export const getOneBoat = async (req, res) => {
    const boatId = req.params.boatId;
    try {
        const boat = await services.getOneById('boats', boatId);
        res.status(status.OK).json({
            success: true, result: boat
        });
    } catch (error) {
        res.status(status.INTERNAL_SERVER_ERROR).json({
            success: false, error: error
        });
    };
};