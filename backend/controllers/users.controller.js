import User from "../models/users.model.js";
import argon2 from 'argon2';
import jwt from 'jsonwebtoken';

export const getUsers = async (req, res) => {
    try {
        const user = await User.findAll();
        return res.status(200).json(user);
    } catch (error) {
        console.log(error);
    }
}

export const Register = async (req, res) => {
    const { name, password, confirm_password } = req.body;
    if(password !== confirm_password) {
        return res.status(400).json({msg: 'password and confirm password incoret'});
    }
    const hash = await argon2.hash(password);
    try {
        await User.create({
            name: name,
            password: hash,
        });
        return res.status(201).json({msg: 'success created'});
    } catch (error) {
        console.log(error);
    }
}

export const Login = async (req, res) => {
    try {
        const user = await User.findAll({
          where: {
            name: req.body.name
          }
        });
      
        if (!user || user.length === 0) {
          return res.status(404).json({ msg: 'User not found' });
        }
      
        const verifyPassword = await argon2.verify(user[0].password, req.body.password);
      
        if (!verifyPassword) {
          return res.status(403).json({ msg: 'Failed login' });
        }
      
        const userId = user[0].id;
        const name = user[0].name;
      
        const token = jwt.sign({ userId, name }, 'jahnlehlaoiuY609QU8Cikljhugfnkfhnhna21336', {
          expiresIn: '20s',
        });
      
        const refreshToken = jwt.sign({ userId, name }, 'mshuew3yquyvuet684h76t45h6tvhunhjivgiy', {
          expiresIn: '1d',
        });
      
        await User.update({ token: refreshToken }, {
          where: {
            id: userId,
          }
        });
      
        res.cookie('refreshToken', refreshToken, {
          httpOnly: true,
          maxAge: 24 * 60 * 60 * 1000
        });
      
        res.json({ token });
      
      } catch (error) {
        console.error(error);
        return res.status(500).json({ msg: 'Internal server error' });
      }      

}