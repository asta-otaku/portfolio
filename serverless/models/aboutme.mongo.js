const mongoose = require("mongoose");

const schema = new mongoose.Schema(
	{
		aboutMe: String,
		toolChain: [String],
		photo: String,
		resume: String,
	},
	{ capped: { max: 1, size: 1024 } },
);

module.exports = mongoose.models.About || mongoose.model("About", schema);

[
	{
		aboutMe: `Donald Abua is a skilled web developer with proficiency in HTML, CSS, and JavaScript.
With experience in popular front-end frameworks such as React and an understanding of server-side technologies like Node.js, he has developed a comprehensive skill set for building robust web applications. Donald has a keen eye for creating responsive and accessible web designs, and his experience with testing and debugging web applications ensures that his projects are delivered with the highest quality.

He also possesses knowledge of database technologies such as MongoDB and familiarity with version control systems like Git. Donald is well-versed in web performance optimization techniques and has experience working in Agile development methodologies, making him an asset to any team.

He has strong communication and collaboration skills and enjoys working in a team environment.

With his combination of technical expertise and interpersonal skills, Donald is a dependable and dedicated professional.`,
		photo:
			"https://res.cloudinary.com/torch-cms-media/image/upload/v1673611182/avatar_vyu2q3.jpg",
		toolChain: [
			"JavaScript (ES+6)",
			"React",
			"Next JS",
			"Node JS",
			"MongoDB",
			"Strapi",
		],
	},
];
