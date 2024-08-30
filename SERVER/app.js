import express from "express";
import users from './Routes/users.js';
import admin from './Routes/admin.js';
import vendor from './Routes/vendor.js';
import cors from 'cors';
import connectDB from "./db.js";  // Import the Mongoose connection
import bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
dotenv.config();

const app = express();
// const port = process.env.PORT || 5000;
const port = process.env.PORT || 8080;

// Connect to MongoDB using Mongoose
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use(express.static('./uploads'));

// Routes
app.use('/api/users/', users);
app.use('/api/admin/', admin);
app.use('/api/vendor/', vendor);

// Start server
app.listen(port, (err) => {
    if (err) console.log("Server Error: ", err);
    console.log(`Server listening on PORT ${port}`);
});
