const express = require("express");
const connectdb = require("../../serverless/db/connect");
const featureProjectsDB = require("../../serverless/models/featureProjects.mongo");

const api = express();

export default api.get("/api/featureprojects", async (req, res) => {
	connectdb();

	const featureprojects = await featureProjectsDB.find({}, { __v: 0 });

	res.json(featureprojects);
});
