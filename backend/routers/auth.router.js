import express from "express";
import { Login, Register } from "../controllers/auth.controller.js";

const auth = express.Router();

auth.post('/auth/register', Register);
auth.post('/auth/login', Login);

export default auth;