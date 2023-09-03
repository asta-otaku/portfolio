import connectdb from "../db/connect";
import aboutmeDB from "../models/aboutme.mongo";

export default async function aboutmeController() {
	connectdb();

	const aboutme = await aboutmeDB.findOne({}, { __v: 0 });

	return JSON.stringify(aboutme);
}
