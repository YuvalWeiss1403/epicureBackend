import DishModel, { IDish } from "../model/dishesModel";

export const getDishes = async function () {
	try {
		const users = await DishModel.find();
		return users;
	} catch (e) {
		throw Error("Error while getting dishes");
	}
};

export const addDish = async (dish: IDish) => {
	const _dish = new DishModel(dish);
	try {
		await _dish.save();
		return _dish;
	} catch (e) {
		throw Error("Error while adding dishes");
	}
};

export const deleteDish = async (dishId: String) => {
	try {
		await DishModel.findByIdAndDelete(dishId);
		return await DishModel.find();
	} catch (e) {
		throw Error("Error while deleting dish");
	}
};

export const updateDish = async (dish: IDish) => {
	try {
		await DishModel.updateOne(dish._id, dish);
		return await DishModel.find();
	} catch (e) {
		throw Error("Error while updating dish");
	}
};
