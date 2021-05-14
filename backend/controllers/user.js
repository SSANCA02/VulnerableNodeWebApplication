// Import function from Product Model
import { getUsers, addUser, getUserByEmail, getUserById, editUserById, editPasswordUserById } from "../models/userModel.js";
 
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
        }
    });
}

// Get Single User
export const showUserByEmail = (req, res) => {
    const {email, password} = req.body;
    getUserByEmail(email, password, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Get Single User
export const showUserById = (req, res) => {
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
        }
    });
}