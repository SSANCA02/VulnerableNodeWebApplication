// Import function from Product Model
import { addMess } from "../models/messageModel.js";
 
// Create User
export const addMessage = (req, res) => {
    const data= req.body;
    addMess(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}