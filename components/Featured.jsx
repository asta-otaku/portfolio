/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import { GithubLogo, Link } from "phosphor-react";

import home from "../styles/Home.module.css";
import Frame from "./Frame";
import ToolChain from "./ToolChain";

export default function Featured({ flip, data }) {
	return (
		<Frame>
			<motion.div
				className={home.featured}
				onViewportEnter={(e) => (e.target.dataset.inview = "true")}
				onViewportLeave={(e) => (e.target.dataset.inview = "false")}
				viewport={{ amount: 0.2 }}
			>
				<div className={`${home.featuredContent} ${flip && home.flipContent}`}>
					<div className={home.featuredHeader}>
						<p>Featured Project</p>
						<h2>{data.name}</h2>
					</div>

					<p>{data.description}</p>
					<ToolChain>
						{data.tools.map((tool) => (
							<p key={tool}>{tool}</p>
						))}
					</ToolChain>
					<div className={home.featuredIcon}>
						<a href={data.github}>
							<GithubLogo size={25} color='white' />
						</a>
						<a href={data.link}>
							<Link size={25} color='white' />
						</a>
					</div>
				</div>

				{/* Background */}
				<figure className={`${home.featuredBg} ${flip && home.flipBg}`}>
					<img src={data.thumb} alt='project thumbnail' />
				</figure>
			</motion.div>
		</Frame>
	);
}
