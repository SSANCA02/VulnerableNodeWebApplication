// import express
import express from "express";
import connection from "../config/database.js";
// import function from controller
import { showPosts, createPost, showPostById, showMyPosts, showPostPublic, updatePost, deletePost} from "../controllers/post.js";
import { showUsers, createUser, showUserById, editUser, editPasswordUser} from "../controllers/user.js";
import { addMessage} from "../controllers/message.js";
// init express router
const router = express.Router();
 
//Add message
router.post('/message', addMessage);

// Get All posts
router.get('/posts', showPosts);

// Get All posts public
router.get('/postspublic', showPostPublic);

// Get All posts by a user
router.post('/myposts', function(req, res, next) {
       
    var user_id = req.body.id;
        connection.query('SELECT * FROM post WHERE user_id = ?', [user_id], function(err, rows, fields) {
            if(err) throw err
             
            // if user not found
            if (rows.length <= 0) {
                //req.flash('error', 'Please correct enter email and Password!')
                res.send(404)
            }
            else { 
                res.send(rows);
 
            }            
        })
  
})

// Create posts
router.post('/post', createPost);

// Get post by id from the post
router.get('/myposts/:id',  showPostById);

// Update Post
router.put('/post/:id', updatePost);
 
// Delete POost
router.delete('/post/:id', deletePost);

// Get All users
router.get('/users', showUsers);

// Create New User
router.post('/user', createUser);

// Get user by id
router.get('/users/:id', showUserById);

// Edit User to suspend or activate
router.put('/editUser/:id', editUser);

// Edit User password
router.put('/editPassword/:id', editPasswordUser);

// Login
router.post('/login', function(req, res, next) {
       
    var email = req.body.email;
    var password = req.body.password;
 
        connection.query('SELECT * FROM user WHERE email = ? AND password = ?', [email, password], function(err, rows, fields) {
            if(err) throw err
             
            // if user not found
            if (rows.length <= 0) {
                //req.flash('error', 'Please correct enter email and Password!')
                res.send(404)
            }
            else { // if user found
                // render to views/user/edit.ejs template file
               // req.session.loggedin = true;
                //req.session.name = name;
                console.log('Usuario logeado.');
                res.send(rows);
 
            }            
        })
  
})



// export default router
export default router;