import mongoose from "mongoose";

//creation la table de la base pour la reservation du taxi
const reservationSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true
    },
    email: {
        type: String,
         required: true
        },
    from: {
        type: String, 
        required: true
    },
    to: {
        type: String,
         required: true
        },
    time: {
        type: String,
         required: true
        },
    date: {type: String,
         required: true
        },
    comfort: {
        type: String,
         required: true
        },
    adults: {
        type: String,
         required: true
        },
    children: {
        type: String, 
        required: true
    },
    message: {
        type: String,
         required: true
        },
}, {
    timestamps: true //pour le temps
});

const Reservation = mongoose.model('Reservation', reservationSchema);


export default Reservation;