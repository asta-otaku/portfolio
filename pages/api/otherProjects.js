const express = require("express");
const connectdb = require("../../serverless/db/connect");
const otherProjectsDB = require("../../serverless/models/otherProjects.mongo");

const api = express();

export default api.get("/api/otherProjects", async (req, res) => {
	connectdb();

	const otherProjects = await otherProjectsDB.find({}, { __v: 0 });

	res.json(otherProjects);
});
