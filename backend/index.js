import express from "express";
import db from './config/dbConnect.js';
import auth from "./routers/auth.router.js";
const app = express();

try {
    await db.authenticate();
    console.log('database connected');
} catch (error) {
    console.error(error);
}

app.use(express.json(), express.urlencoded({extended: true}));
app.use(auth);


app.listen(5000, () => console.log('app listen at port 5000'));
