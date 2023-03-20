import { Request, Response } from "express";
import restaurantsModel from "../model/restaurantsModel";
import dishesModel from "../model/dishesModel";

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
	// try {
	// 	const dishes = await dishesService.addDish(req.body.dish, req.body.restId);
	// 	return res.status(200).json({
	// 		status: 200,
	// 		data: dishes,
	// 		message: "Successfully added dish",
	// 	});
	// } catch (e: any) {
	// 	return res.status(400).json({ status: 400, message: e.message });
	// }
	try {
		const { restId, isSignatureDish, icons, price, img, about, name, time } =
			req.body;
		const dish = await dishesModel.create({
			about,
			name,
			time,
			icons,
			price,
			isSignatureDish,
			img,
		});
		const newDish = await dishesService.addDish(req.body);
		const restaurant = await restaurantsModel.findById(restId);
		if (!restaurant) {
			return res.status(404).send("Restaurant not found");
		}
		restaurant.dishes?.push(dish._id);
		await restaurant.save();

		res.status(201).json(newDish);
	} catch (err) {
		console.log(err);
		throw err;
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
