import { Sequelize } from "sequelize";
import db from "../config/dbConnect.js";

const { DataTypes } = Sequelize;

const User = db.define('users', {
    name: {
        type: DataTypes.STRING,
    },
    password: {
        type: DataTypes.STRING,
    },
    token: {
        type: DataTypes.STRING,
    }
}, {
    freezeTableName: true
});

export default User;