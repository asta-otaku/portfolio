import connectdb from "../db/connect";
import otherProjectsDB from "../models/otherProjects.mongo";
export default async function otherProjectsController() {
	connectdb();

	const others = await otherProjectsDB.find({}, { __v: 0 });

	return JSON.stringify(others);
}
