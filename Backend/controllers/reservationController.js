import Reservation from "../models/reservationModel.js"


//Controller for Reservation Taxi
export const controllerReservation = async (req, res) => {
    const newReservation = new Reservation(req.body);
    try {
        const savedReservation = await newReservation.save();
        res.status(200).json(savedReservation);
    } catch (error) {
        res.status(500).json(error);
    }
}