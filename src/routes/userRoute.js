import { Router } from 'express';
import userMethods from '../controllers/userContoller';

const userRoute = new Router();

// displaying  the user details 
userRoute.get('/users', userMethods.allUsers);

// Adding the users details 
userRoute.post('/add-users', userMethods.addUsers);

// Update the user details 
userRoute.put('/update-user/:id', userMethods.updateUser);

// Delete the User details 
userRoute.delete('/delete-user', userMethods.deleteUser);

export default userRoute;

