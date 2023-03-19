import mongoose from "mongoose";
import { Schema, Model, ObjectId } from "mongoose";

const chefSchema: Schema = new Schema<IChef>({
	name: { type: String, required: true },
	age: { type: Number, required: true },
	img: { type: String, required: true },
	description: { type: String, required: true },
	chefOfTheWeek: { type: Boolean, required: true },
	isChefNew: { type: Boolean, required: true },
	mostViewed: { type: Boolean, required: true },
});

export interface IChef {
	_id?: ObjectId;
	name: string;
	restaurant?: ObjectId[];
	age: number;
	img: string;
	description: string;
	chefOfTheWeek: boolean;
	isChefNew: boolean;
	mostViewed: boolean;
}

export interface IChefs {
	users: IChef[];
}
const ChefModel: Model<IChef> = mongoose.model<IChef>("chefs", chefSchema);

export default ChefModel;
