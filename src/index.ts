import "reflect-metadata";
import {useExpressServer} from "routing-controllers";
import * as logger from 'morgan';
import * as bodyParser from "body-parser";
import * as cors from 'cors';


// The port the express app will listen on
const port: number = Number(process.env.PORT || 3000);

// create express app
let express = require("express");
let app = express();
app.use(logger('dev'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());


useExpressServer(app, {
    routePrefix: "/v1",
    validation: true,
    controllers: [__dirname + "/controller/*.ts"]
});

app.listen(port); // run your express server


console.log("gcal2slack server has started on port 3000. Open http://localhost:3000/ to see results");

