const express = require('express');
const appConfig = require('./Config/appConfig')
const fs = require('fs');
const helmet = require('helmet');
const app = express();
const bodyparser = require('body-parser');
const cookieparser = require('cookie-parser');
const  mongoose = require('mongoose')
const GlobalError = require('./middlewares/ErrorHandler');
const GlobalLogger= require('./middlewares/routeLogger');
const logger = require('./library/Error');
const http = require('http');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
app.use(cookieparser());
app.use(GlobalError.globalErrorHandler);
app.use(GlobalLogger.logIp);
app.use(helmet());

let model='./models';
fs.readdirSync(model).forEach(function(file){
    if(~file.indexOf('.js')){
        require(model+'/'+file);
    }
})

let Routes = './routes'
fs.readdirSync(Routes).forEach(function(file){
    if(~file.indexOf('.js')){
        let router = require(Routes+'/'+file);
        router.allRoutes(app);
    }
}) 

app.use(GlobalError.globalRouteNotFound);

const server = http.createServer(app)
// start listening to http server
console.log(appConfig)
server.listen(appConfig.port)
server.on('error', onError)
server.on('listening', onListening)

function onError(error) {
    if (error.syscall !== 'listen') {
        logger.error(error.code + ' not equal listen', 'serverOnErrorHandler', 10)
        throw error
    }

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            logger.error(error.code + ':elavated privileges required', 'serverOnErrorHandler', 10)
            process.exit(1)
            break
        case 'EADDRINUSE':
            logger.error(error.code + ':port is already in use.', 'serverOnErrorHandler', 10)
            process.exit(1)
            break
        default:
            logger.error(error.code + ':some unknown error occured', 'serverOnErrorHandler', 10)
            throw error
    }
}

function onListening() {
    var addr = server.address()
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    ('Listening on ' + bind)
    logger.info('server listening on port' + addr.port, 'serverOnListeningHandler', 10)
    let db = mongoose.connect(appConfig.db,{ useNewUrlParser: true } )
}

process.on('unhandledRejection', (reason, p) => {
    console.log('Unhandled Rejection at: Promise', p, 'reason:', reason)
    // application specific logging, throwing an error, or other logic here
})


mongoose.connection.on('error',function(err){
    if(err){
        console.log('data base error occured');
    }
})

mongoose.connection.on('open', function (err) {
    if (err) {
        console.log("database error");
        console.log(err);

    } else {
        console.log("database connection open success");
    }

}); // end mongoose connection open handler