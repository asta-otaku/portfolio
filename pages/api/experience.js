const express = require("express");
const connectdb = require("../../serverless/db/connect");
const experienceDB = require("../../serverless/models/experience.mongo");

const api = express();

export default api.get("/api/experience", async (req, res) => {
	connectdb();

	const experience = await experienceDB.find({}, { __v: 0 });

	res.json(experience);
});
