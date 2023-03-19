import mongoose from "mongoose";
import { Schema, Model } from "mongoose";

const userSchema: Schema = new Schema<IUser>({
	first_name: { type: String, required: true },
	last_name: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
	admin: { type: Boolean, default: false },
	token: { type: String, required: false },
});

export interface IUser {
	first_name: string;
	last_name: string;
	email: string;
	password: string;
	admin: boolean;
	token?: string;
}

export interface IUsers {
	users: IUser[];
}
const UserModel: Model<IUser> = mongoose.model<IUser>("users", userSchema);

export default UserModel;
