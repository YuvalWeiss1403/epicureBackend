import mongoose from "mongoose";
import { Schema, Model, ObjectId } from "mongoose";

const restSchema: Schema = new Schema<IRest>({
	name: { type: String, required: true },
	address: { type: [String], required: true },
	chef: { type: String, required: true },
	openHours: { type: [Number], required: true },
	openDays: { type: [Number], required: true },
	openYear: { type: Number, required: true },
	img: { type: String, required: true },
	dishes: { type: [Schema.Types.ObjectId], required: false },
	rating: { type: Number, required: true },
	popular: { type: Boolean, required: true },
	newRest: { type: Boolean, required: true },
	openNow: { type: Boolean, required: false },
});

export interface IRest {
	_id?: ObjectId;
	name: string;
	address: string[];
	chef: string;
	openHours: number[];
	openDays: number[];
	openYear: number;
	img: string;
	dishes?: ObjectId[];
	rating: number;
	popular: boolean;
	newRest: boolean;
	openNow?: boolean;
}

export interface IRests {
	users: IRest[];
}
const RestModel: Model<IRest> = mongoose.model<IRest>(
	"restaurants",
	restSchema
);

export default RestModel;
