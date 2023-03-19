import express, { Request, Response } from "express";

const restaurantService = require("../services/restaurants.service");

export const getRests = async function (req: Request, res: Response) {
	try {
		const users = await restaurantService.getRests();
		return res.status(200).json({
			status: 200,
			data: users,
			message: "Successfully restaurant Retrieved",
		});
	} catch (e: any) {
		return res.status(400).json({ status: 400, message: e.message });
	}
};

export const addRest = async function (req: Request, res: Response) {
	try {
		const users = await restaurantService.addRest(req.body);
		return res.status(200).json({
			status: 200,
			data: users,
			message: "Successfully added restaurant",
		});
	} catch (e: any) {
		return res.status(400).json({ status: 400, message: e.message });
	}
};

export const deleteRest = async (req: Request, res: Response) => {
	try {
		const restaurants = await restaurantService.deleteRest(req.body._id);
		return res.status(200).json({
			status: 200,
			data: restaurants,
			message: "Successfully removed Restaurant",
		});
	} catch (err: any) {
		console.log(err);
		return res.status(500).json({
			status: 500,
			message: "Internal server error",
		});
	}
};

export const updateRest = async (req: Request, res: Response) => {
	try {
		const rests = await restaurantService.updateRest(req.body);
		return res.status(200).json({
			status: 200,
			data: rests,
			message: "Successfully updated rest",
		});
	} catch (err: any) {
		console.log(err);
		return res.status(500).json({
			status: 500,
			message: "Internal server error",
		});
	}
};
