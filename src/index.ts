import "reflect-metadata";
import {useExpressServer} from "routing-controllers";
import * as logger from 'morgan';
import * as bodyParser from "body-parser";
import * as cors from 'cors';


// The port the express app will listen on
const port: number = Number(process.env.PORT || 3000);


// create express app
let express = require("express"); // or you can import it if you have installed typings
let app = express(); // your created express server
app.use(logger('dev'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json()); // you can configure it the way you want
// app.use(cache.middleware('10 seconds')); // Cache Middleware initialization
app.use(cors());


useExpressServer(app, { // register created express server in routing-controllers
    routePrefix: "/v1",
    validation: true,
    controllers: [__dirname + "/controller/*.ts"]
});

app.listen(port); // run your express server


console.log("Backend API server has started on port 3000. Open http://localhost:3000/ to see results");

