import express, { Request, Response } from "express";

const chefsService = require("../services/chefs.service");

export const getChefs = async function (req: Request, res: Response) {
	try {
		const users = await chefsService.getChefs();
		return res.status(200).json({
			status: 200,
			data: users,
			message: "Successfully chefs Retrieved",
		});
	} catch (e: any) {
		return res.status(400).json({ status: 400, message: e.message });
	}
};

export const addChef = async function (req: Request, res: Response) {
	try {
		const chef = await chefsService.addChef(req.body);
		return res.status(200).json({
			status: 200,
			data: chef,
			message: "Successfully added chef",
		});
	} catch (e: any) {
		return res.status(400).json({ status: 400, message: e.message });
	}
};

export const deleteChef = async (req: Request, res: Response) => {
	try {
		const chefs = await chefsService.deleteChef(req.body._id);
		return res.status(200).json({
			status: 200,
			data: chefs,
			message: "Successfully removed chef",
		});
	} catch (err: any) {
		console.log(err);
		return res.status(500).json({
			status: 500,
			message: "Internal server error",
		});
	}
};
