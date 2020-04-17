//error handler

function errorHandler(error, req, res, next){
    console.log(error);
    const status = error.status || 500;
    const message = error.message || "Something went wrong";
    const name = error.name || 'Error'; 
    const errorObj = {name, message}
    res.status(status).send(errorObj);
}



module.exports = { errorHandler }