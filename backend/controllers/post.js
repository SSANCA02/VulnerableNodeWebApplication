// Import function from Product Model
import { getPosts, addPost, getPostById, getPostPublic, getMyPosts, updatePostById, deletePostById } from "../models/postModel.js";
 
// Get All Posts
export const showPosts = (req, res) => {
    getPosts((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Create Post
export const createPost = (req, res) => {
    const data= req.body;
    addPost(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Get Single post
export const showPostById = (req, res) => {
    getPostById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}


// Get public posts
export const showPostPublic = (req, res) => {
    getPostPublic((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 

// Get Single post
export const showMyPosts = (req, res) => {
    getMyPosts(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Update Post
export const updatePost = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updatePostById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Delete Post
export const deletePost = (req, res) => {
    const id = req.params.id;
    deletePostById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}