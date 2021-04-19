// import connection
import db from "../config/database.js";
 
// Get All Products
export const getPosts = (result) => {
    db.query("SELECT * FROM post", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// Get public Posts
export const getPostPublic = (result) => {
    db.query("SELECT * FROM post WHERE status = ?", [0], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// add post
export const addPost = (data, result) => {
    db.query("INSERT INTO post SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// Get Single Post
export const getPostById = (id, result) => {
    db.query("SELECT * FROM post WHERE idpost = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}


// Get Single Post
export const getMyPosts = (id, result) => {
    db.query("SELECT * FROM post WHERE user_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}

// Update Post to Database
export const updatePostById = (data, id, result) => {
    db.query("UPDATE post SET title = ?, brief = ?, content = ?, status = ? WHERE idpost = ?", [data.title, data.brief, data.content, data.status, id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Delete Post to Database
export const deletePostById = (id, result) => {
    db.query("DELETE FROM post WHERE idpost = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}