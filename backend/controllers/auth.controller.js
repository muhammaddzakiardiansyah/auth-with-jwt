import User from "../models/users.model.js";
import argon2 from "argon2";
import jwt from "jsonwebtoken";

export const Register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const hash = await argon2.hash(password);
        const result = await User.create({
            name: name,
            email: email,
            password: hash,
        });
        return res.status(201).send({
            response: {
                statusCode: 201,
                message: 'Success Created!',
            },
            data: result
        });
    } catch (error) {
        return res.status(400).send({
            message: 'Failed!',
            error: error.message,
        });
    }
}

export const Login = async (req, res) => {
    try {
        const result = await User.findOne({
            where: {
                email: req.body.email,
            }
        });
        if(!result) {
            return res.status(404).send({
                message: 'Email or passwoord incorret!',
                error: 'Authentication error',
            });
        }
        const verifyPassword = await argon2.verify(result.password, req.body.password);
        if(verifyPassword) {
            const token = jwt.sign({id: result.id, email: result.email, name: result.name}, 'a98yr83y');
            return res.status(200).send({
                response: {
                    statusCode: 200,
                    message: 'Authentication Successfully!',
                },
                data: {
                    id: result.id,
                    name: result.name,
                    email: result.email,
                },
                token: token,
            });
        }
        return res.status(404).send({
            message: 'Email or passwoord incorret!',
            error: 'Authentication error',
        });
    } catch (error) {
        console.log(error);
        return res.status(400).send({
            message: 'Failed!',
            error: error.message,
        });
    }
}