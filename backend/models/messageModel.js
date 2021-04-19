// import connection
import db from "../config/database.js";
 
// Create message
export const addMess = (data, result) => {
    db.query("INSERT INTO message SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

