import connectdb from "../db/connect";
import featureProjectsDB from "../models/featureProjects.mongo";
export default async function featureProjectsController() {
	connectdb();

	const features = await featureProjectsDB.find({}, { __v: 0 });

	return JSON.stringify(features);
}
