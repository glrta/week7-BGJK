// to verify each user
const jwt = require('jsonwebtoken');
const model = require("../model/user-model");
require('dotenv').config();

const SECRET = process.env.JWT_SECRET;

function verifyUser(req, res, next) {
    // grab the token
    const auth = req.headers.authorization;
    if(!auth) {
        const error = new Error('Unauthorized!');
        error.status = 400;
        next(error);   //create error handling middleware!!
    } else{
        const token = auth.replace("Bearer ", "");
        const user = jwt.verify(token, SECRET);
           try{  
            model
              .getUser(user.id)
              .then((user) => {
                  req.user = user
                  next()
              })
              .catch(next); 
            } catch(_err) {
            const err = new Error('Invalid Token!')
            err.status = 401;   
            next(err);
          }
    }

    //extract the user
    //put it in request object
}

module.exports = { verifyUser }