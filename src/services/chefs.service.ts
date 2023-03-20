import ChefModel, { IChef } from "../model/chefsModel";

export const getChefs = async function () {
	try {
		const users = await ChefModel.find();
		return users;
	} catch (e) {
		throw Error("Error while getting chefs");
	}
};

export const addChef = async (chef: IChef) => {
	const _chef = new ChefModel(chef);
	try {
		await _chef.save();
		return _chef;
	} catch (e) {
		throw Error("Error while adding chefs");
	}
};

export const deleteChef = async (chefId: String) => {
	try {
		await ChefModel.findByIdAndDelete(chefId);
		return await ChefModel.find();
	} catch (err) {
		console.error(err);
		throw err;
	}
};
