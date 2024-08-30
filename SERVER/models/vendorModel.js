// SERVER/models/vendorModel.js
import mongoose from 'mongoose';

const vendorSchema = new mongoose.Schema({
    adharName: {
        type: String,
        required: true,
    },
    adharNumber: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    number: {
        type: String,
        required: true,
    },
    panNumber: {
        type: String,
        required: true,
        unique: true,
    },
    gstin: {
        type: String,
        required: true,
        unique: true,
    },
    locality: {
        type: String,
        required: true,
    },
    pinCode: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    bankAccOwner: {
        type: String,
        required: true,
    },
    bankName: {
        type: String,
        required: true,
    },
    bankAccNumber: {
        type: String,
        required: true,
        unique: true,
    },
    bankIFSC: {
        type: String,
        required: true,
    },
    bankBranchName: {
        type: String,
        required: true,
    },
    bankBranchNumber: {
        type: String,
        required: true,
    },
    accept: {
        type: Boolean,
        default: false,
    },
    date: {
        type: Date,
        default: Date.now,
    }
});

const Vendor = mongoose.model('Vendor', vendorSchema);

export default Vendor;
