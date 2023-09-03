const mongoose = require("mongoose");

const schema = new mongoose.Schema({
	name: String,
	description: String,
	tools: [String],
	link: String,
});

module.exports =
	mongoose.models.OtherProjects || mongoose.model("OtherProjects", schema);
