import mongoose from "mongoose";
import { Schema, Model, ObjectId } from "mongoose";

const dishSchema: Schema = new Schema<IDish>({
	name: { type: String, required: true },
	time: { type: [String], required: true },
	about: { type: String, required: true },
	price: { type: Number, required: true },
	allergan: { type: [String], required: true },
	icons: { type: [String], required: false },
	sides: { type: [String], required: false },
	changes: { type: [String], required: false },
	img: { type: String, required: true },
	isSignatureDish: { type: Boolean, required: true },
});

export interface IDish {
	_id?: ObjectId;
	name: string;
	time: string[];
	about: string;
	price: number;
	allergan: string[];
	icons?: string[];
	sides?: string[];
	changes?: string[];
	img: string;
	isSignatureDish: boolean;
}

export interface IDishes {
	users: IDish[];
}
const DishModel: Model<IDish> = mongoose.model<IDish>("dishes", dishSchema);

export default DishModel;
