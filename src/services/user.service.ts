import UserModel, { IUser } from "../model/userModel";

export const getUsers = async function () {
	try {
		const users = await UserModel.find();
		return users;
	} catch (e) {
		throw Error("Error while getting users");
	}
};

export const addUser = async (user: IUser) => {
	const _user = new UserModel(user);
	try {
		await _user.save();
		return _user;
	} catch (e) {
		throw Error("Error while adding user");
	}
};
