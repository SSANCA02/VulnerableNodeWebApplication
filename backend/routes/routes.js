// import express
import express from "express";
import connection from "../config/database.js";
// import function from controller
import { showPosts, createPost, showPostById, showMyPosts, showPostPublic, updatePost, deletePost} from "../controllers/post.js";
import { showUsers, createUser, showUserByEmail, showUserById, editUser, editPasswordUser} from "../controllers/user.js";
import { addMessage} from "../controllers/message.js";
import winston from "winston";

// init express router
const router = express.Router();
const logConfiguration = {
    'transports': [
        new winston.transports.File({
            filename: 'logs/logger.log'
        })
    ]
};

export const logger = winston.createLogger(logConfiguration);

// Authentication and Authorization Middleware
var auth = function(req, res, next) {
    console.log("auth" +req.session.role);
    if (req.session.userId)
      return next();
    else
      return res.sendStatus(401);
  };

//Add message
router.post('/message', addMessage);

router.get('/messages', auth, function(req, res, next) {
       
        connection.query('SELECT * FROM message', function(err, rows, fields) {
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
  
});

// Get All posts
router.get('/posts', showPosts);

// Get All posts public
router.get('/postspublic', showPostPublic);

// Get All posts by a user
router.post('/myposts', auth, function(req, res, next) {
       
    var user_id = req.session.userId;
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
  
});

// Create posts
router.post('/post', createPost);

// Get post by id from the post
router.get('/myposts/:id', showPostById);

// Update Post
router.put('/post/:id', updatePost);
 
// Delete POost
router.delete('/post/:id', deletePost);

// Get All users
router.get('/users', auth, showUsers);

// Create New User
router.post('/user', createUser);

// Get user by email
router.post('/userbyemail', showUserByEmail);

// Get user by id
router.get('/userbyid', auth, showUserById);

// Edit User to suspend or activate
router.put('/editUser/:id', editUser);

// Edit User password
router.post('/editPassword', editPasswordUser);

// Login
router.post('/login', function(req, res, next) {
       
    var email = req.body.email;
    var password = req.body.password;
    const query="SELECT * FROM user WHERE email = '" + req.body.email + " ' AND password = '" + req.body.password + "'";
        connection.query(query , (err, rows ) =>{
            console.log(query);
            if(err) throw err
             
            // if user not found
            if (rows.length <= 0) {
                //req.flash('error', 'Please correct enter email and Password!')
                res.send(401);
            }
            else { // if user found
                // render to views/user/edit.ejs template file
               // req.session.loggedin = true;
                //req.session.name = name;
                req.session.userId = rows[0].iduser;
                req.session.role = rows[0].role;
                console.log('Usuario logeado.');
                res.send(rows);
                
                logger.log({
                    // Message to be logged
                        message: 'User logged!',
                    
                    // Level of the message logging
                        level: 'info'
                 });
                
            }            
        })
  
});


// Logout endpoint
router.get('/logout', function (req, res) {
    req.session.destroy();
    console.log("logout success!");
    logger.log({
        // Message to be logged
            message: 'User log out',
        
        // Level of the message logging
            level: 'info'
     });
    res.sendStatus(200);
});

// export default router
export default router;