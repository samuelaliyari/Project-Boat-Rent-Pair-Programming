import mongoose, { Schema } from 'mongoose';

const bookingSchema = new Schema({
    bookingNumber: { type: Number, required: true},
    firstName: { type: String, required: true},
    lastName: { type: String, required: true},
    phone: { type: Number, required: true},
    email: { type: String, required: true},
    startDate: { type: Date },
    endDate: { type: Date }
}, { collection: 'bookings' });

export const Booking = mongoose.model('Booking', bookingSchema);