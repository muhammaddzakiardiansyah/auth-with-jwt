import express from "express";
import db from './config/dbConnect.js';
import users from "./routers/users.router.js";
const app = express();

try {
    await db.authenticate();
    console.log('database connected');
} catch (error) {
    console.error(error);
}

app.use(express.json());
app.use(users);


app.listen(5000, () => console.log('app listen at port 5000'));
