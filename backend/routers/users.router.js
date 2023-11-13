import exprees from 'express';
import { Login, Register, getUsers } from '../controllers/users.controller.js';
const users = exprees.Router();

users.get('/users', getUsers);
users.post('/register', Register);
users.post('/login', Login);

export default users;