import mongoose from 'mongoose';

const uri = "mongodb://localhost/nosqlDB";

// initialize the mongoose connection
const initializeDatabase = mongoose.connect(uri, { useNewUrlParser: true });

// display the error 
initializeDatabase.catch(err => { console.log(`error while conecting to database ${err}`)});

// Trigger the open event when the connection is established to the database
mongoose.connection.once('open', () => {
    console.log(`Successfully connected to database `);
});

export default mongoose;
