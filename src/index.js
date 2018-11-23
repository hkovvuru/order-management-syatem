import express from 'express';
import bodyParser from 'body-parser';
import route from './routes';

// Initialize the instance
const app = express();

// Parser the json data 
app.use(bodyParser.json());

app.use(route);

// initialize server connection
app.listen(5000, () => {
    console.log('Server is listening on port 5000');
});

