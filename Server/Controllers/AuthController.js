import User from "../Models/User";
const bcrypt = require("bcrypt")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();



export const Login = async (req, res) => {
    const {
        email,
        password
    } = req.body;

    try {
        const user = await User.findOne({
            email
        });
        !user && res
            .status(401)
            .json("Wrong credentials");

        const validPassword = await bcrypt.compare(password, user.password);
        !validPassword && res
            .status(401)
            .json("Wrong credentials");

        const token = jwt.sign({
            id: user._id
        }, process.env.SECRET_KEY, {});

        const {
            password: pass,
            ...others
        } = user;

        return res
            .status(200)
            .json({
                ...others,
                token
            });
    } catch (error) {
        return res
            .status(500)
            .json(error);
    }
};