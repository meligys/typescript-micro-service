import express from 'express';
import bodyParser from 'body-parser';
import config from 'config';
import routes from './routes'
import mongoose from 'mongoose';

// connection to mongoDB
mongoose.connect(config.get('databaseDNS'), { useNewUrlParser: true }).catch(function (error) { 
  // handle database connexion error
  console.error("Error while connecting to database. Go to config/default.json and edit the databaseDNS or check that your database is running");
  
});

var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(bodyParser.json({limit: '50mb'})) // handle json data
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true })) // handle URL-encoded data

routes(app);

let runningPort = process.env.PORT || config.get('port');
app.listen(runningPort);
console.log("The server is now running on port " + runningPort);