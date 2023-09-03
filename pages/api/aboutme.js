const express = require("express");
const connectdb = require("../../serverless/db/connect");
const aboutDB = require("../../serverless/models/aboutme.mongo");

const api = express();

export default api.get("/api/aboutme", async (_, res) => {
	connectdb();

	const aboutme = await aboutDB.findOne({}, { __v: 0 });

	res.json(aboutme);
});
