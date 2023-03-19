import express, { Request, Response } from "express";
const bcrypt = require("bcrypt");
import User from "../model/userModel";
const jwt = require("jsonwebtoken");
import dotenv from "dotenv";
dotenv.config();

const usersService = require("../services/user.service");

export const getUsers = async function (req: Request, res: Response) {
	try {
		const users = await usersService.getUsers();
		return res.status(200).json({
			status: 200,
			data: users,
			message: "Successfully users Retrieved",
		});
	} catch (e: any) {
		return res.status(400).json({ status: 400, message: e.message });
	}
};

export const addUser = async function (req: Request, res: Response) {
	try {
		const { first_name, last_name, email, password } = req.body;
		if (!(email && password && first_name && last_name)) {
			res.status(400).send("All input is required");
		}
		const oldUser = await User.findOne({ email });
		if (oldUser) {
			return res.status(409).send("User Already Exist. Please Login");
		}
		const encryptedPassword = await bcrypt.hash(password, 10);
		const user = await User.create({
			first_name,
			last_name,
			email: email.toLowerCase(),
			password: encryptedPassword,
		});
		const token = jwt.sign(
			{ user_id: user._id, email },
			process.env.TOKEN_KEY,
			{
				expiresIn: "2h",
			}
		);
		user.token = token;
		const users = await usersService.addUser(user);
		res.status(201).json(users);
		return res.status(200).json({
			status: 200,
			data: users,
			message: "Successfully added user",
		});
	} catch (e: any) {
		return res.status(400).json({ status: 400, message: e.message });
	}
};

export const login = async function (req: Request, res: Response) {
	try {
		const { email, password } = req.body;
		if (!(email && password)) {
			res.status(400).send("All input is required");
		}
		const user = await User.findOne({ email });
		if (user && (await bcrypt.compare(password, user.password))) {
			const token = jwt.sign(
				{ user_id: user._id, email },
				process.env.TOKEN_KEY,
				{
					expiresIn: "2h",
				}
			);
			user.token = token;
			res.status(200).json(user);
		}
		res.status(400).send("Invalid Credentials");
	} catch (err) {
		console.log(err);
	}
};
