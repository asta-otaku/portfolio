import connectdb from "../db/connect";
import experienceDB from "../models/experience.mongo";

export default async function experienceController() {
	connectdb();

	const experience = await experienceDB.find({}, { __v: 0 });

	return JSON.stringify(experience);
}
