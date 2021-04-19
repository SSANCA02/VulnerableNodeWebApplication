// import connection
import db from "../config/database.js";
 
// Get All users
export const getUsers = (result) => {
    db.query("SELECT * FROM user", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// add user
export const addUser = (data, result) => {
    db.query("INSERT INTO user SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// Get Single user
export const getUserByEmail = (email, password, result) => {
    db.query("SELECT * FROM user WHERE email = ? AND password = ?", [email], [password], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            console.log("log");
            result(null, results[0]);
        }
    });   
}

// Get Single User
export const getUserById = (id, result) => {
    db.query("SELECT * FROM user WHERE iduser = "+id, (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// Update user to Database
export const editUserById = (data, id, result) => {
    db.query("UPDATE user SET role = ? WHERE iduser = ?", [data.role, id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });  
}

// Update user to Database
export const editPasswordUserById = (data, id, result) => {
    db.query("UPDATE user SET password = ? WHERE iduser = ?", [data.password, id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });  
}