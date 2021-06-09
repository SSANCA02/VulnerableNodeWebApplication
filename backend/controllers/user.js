// Import function from Product Model
import { getUsers, addUser, getUserByEmail, getUserById, editUserById, editPasswordUserById } from "../models/userModel.js";
import {logger} from "../routes/routes.js"
// Get All Posts
export const showUsers = (req, res) => {
    getUsers((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Create User
export const createUser = (req, res) => {
    const data= req.body;
    addUser(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
            logger.log({
                // Message to be logged
                    message: 'User registered: ' +req.body.email,
                
                // Level of the message logging
                    level: 'info'
             });
        }
    });
}

// Get Single User
export const showUserByEmail = (req, res) => {
    const {email} = req.body;
    getUserByEmail(email, (err, results) => {
        if (err){
            console.log("401");
            res.send(err);
        }else{
            console.log("200");
            res.json(results);
        }
    });
}
// Get Single User
export const showUserById = (req, res) => {
    getUserById(req.body.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Get Single User
export const showUserById2 = (req, res) => {
    getUserById(req.session.userId, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
} 

// Update Post
export const editUser = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    editUserById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 

// Update Post
export const editPasswordUser = (req, res) => {
    const data  = req.body;
    const id    = req.session.userId;
    editPasswordUserById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
            console.log("Password changed.");
            logger.log({
                // Message to be logged
                    message: 'User password changed.',
                
                // Level of the message logging
                    level: 'warn'
             });
        }
    });
}