import DishModel from "../model/dishesModel";
import restaurantsModel, { IRest } from "../model/restaurantsModel";

export const getRests = async function () {
	try {
		const users = await restaurantsModel.find();
		return users;
	} catch (e) {
		throw Error("Error while getting restaurants");
	}
};

export const addRest = async (rest: IRest) => {
	const _rest = new restaurantsModel(rest);
	try {
		await _rest.save();
		return _rest;
	} catch (e) {
		throw Error("Error while adding restaurant");
	}
};

export const deleteRest = async (restId: string) => {
	try {
		const restData = await restaurantsModel.findById(restId);

		if (restData && restData.dishes) {
			for (const dish of restData.dishes) {
				await DishModel.findByIdAndDelete(dish);
			}
		} else {
			throw new Error(`Restaurant with ID ${restId} not found`);
		}
		await restaurantsModel.findByIdAndDelete(restId);
		return await restaurantsModel.find();
	} catch (err) {
		console.error(err);
		throw err;
	}
};

export const updateRest = async (rest: IRest) => {
	try {
		await restaurantsModel.updateOne(rest._id, rest);
		return await restaurantsModel.find();
	} catch (e) {
		throw Error("Error while updating rest");
	}
};
