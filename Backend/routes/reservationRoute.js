import express from 'express'
import { controllerReservation } from '../controllers/reservationController.js';

const ReservationRouter = express.Router();

//Reservation Taxi
ReservationRouter.post('/reservation', controllerReservation);

export default ReservationRouter;