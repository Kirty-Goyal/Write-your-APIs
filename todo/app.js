import express from 'express';
import db from './db/db';
import bodyParser from 'body-parser';
//import router from './routes/hello.js';
// Set up the express app
const app = express();
// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
var routes = require('./routes/index');
app.use(routes);
//routes.initsialize(app);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});
