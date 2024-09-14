const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    fathersName: { type: String, required: true },
    mothersName: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    phoneNumber1: { type: String, required: true },
    phoneNumber2: { type: String },
    branch: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    courses: {
        hindi: { type: Boolean, default: false },
        spoken: { type: Boolean, default: false },
        abacus: { type: Boolean, default: false },
        dance: { type: Boolean, default: false },
        keyboard: { type: Boolean, default: false },
    },
    password: { type: String, required: true }
});

const Register = mongoose.model('Register', registerSchema);

module.exports = Register;
