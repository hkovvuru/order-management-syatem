import mongoose from '../config/dbConfig';
import { Schema } from 'mongoose';

const userSchema = new Schema({
    userId:{
        type: Number
    },
    firstName:{
        type: String
    },
    lastName: {
        type: String
    },
    age: {
        type: Number,
    },
    location: {
        type: String
    },
    state:{
        type: String
    },
    Date:{
        type: Date,
        default: "21-NOV-2018"
    }
});

const userModel =  mongoose.model('User', userSchema);

export default userModel;