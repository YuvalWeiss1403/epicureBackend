import express, { Request, Response } from "express";
import ObjectId from "mongoose";
import restaurantsModel from "../model/restaurantsModel";

const dishesService = require("../services/dishes.service");

export const getDishes = async function (req: Request, res: Response) {
	try {
		const users = await dishesService.getDishes();
		return res.status(200).json({
			status: 200,
			data: users,
			message: "Successfully dishes Retrieved",
		});
	} catch (e: any) {
		return res.status(400).json({ status: 400, message: e.message });
	}
};

export const addDish = async function (req: Request, res: Response) {
	try {
		const dishes = await dishesService.addDish(req.body);
		return res.status(200).json({
			status: 200,
			data: dishes,
			message: "Successfully added dish",
		});
	} catch (e: any) {
		return res.status(400).json({ status: 400, message: e.message });
	}
};

export const deleteDish = async (req: Request, res: Response) => {
	try {
		const dishes = await dishesService.deleteDish(req.body._id);
		return res.status(200).json({
			status: 200,
			data: dishes,
			message: "Successfully removed dish",
		});
	} catch (err: any) {
		console.log(err);
		return res.status(500).json({
			status: 500,
			message: "Internal server error",
		});
	}
};

export const updateDish = async (req: Request, res: Response) => {
	try {
		const dishes = await dishesService.updateDish(req.body);
		return res.status(200).json({
			status: 200,
			data: dishes,
			message: "Successfully updated dish",
		});
	} catch (err: any) {
		console.log(err);
		return res.status(500).json({
			status: 500,
			message: "Internal server error",
		});
	}
};
