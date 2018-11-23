import userModel from '../model/userModel';
import { Query } from 'mongoose';

/**
 * fetching the user details 
 * @param req 
 * @param res 
 */
const allUsers = async (req, res) => {

    try {
        const query = userModel.findOne({location: 'Bangalore'}); 
        res.status(200).json(await userModel.find(query));
    } catch (err) {
        res.status(404).send(err);
    }
};

/**
 * adding the user details 
 * @param req 
 * @param res 
 */

const addUsers = async (req, res) => {
    try {
        const newUser = new userModel(req.body);
        res.status(200).json(await newUser.save());
    } catch (err) {
        res.status(400).send(err);
    }
}

/**
 * Update the user details 
 * @param req 
 * @param res 
 */
const updateUser = async (req, res) => {
    try {
        res.status(201).json(await userModel.findOneAndUpdate({ userId: req.params.id }, req.body));
    } catch (err) {
        res.status(500).send(err);
    }
};


/**
 * Delete Users details 
 * @param req 
 * @param res 
 */
const deleteUser = async (req,res) => {
    try {
        res.status(200).json(await userModel.findOneAndRemove({ age: req.body.age }, req.body));
    } catch (err) {
        res.status(404).send(err);
    }
};


const userMethods = {
    allUsers,
    addUsers,
    updateUser,
    deleteUser,
};

export default userMethods;