import { motion } from "framer-motion";
import { FolderSimple, Link } from "phosphor-react";
import home from "../styles/Home.module.css";
import Frame from "./Frame";
import ToolChain from "./ToolChain";

export default function Others({ data }) {
	return (
		<Frame>
			<motion.div
				viewport={{ amount: 0.2 }}
				className={home.otherProject}
				onViewportEnter={(e) => (e.target.dataset.inview = "true")}
				onViewportLeave={(e) => (e.target.dataset.inview = "false")}
			>
				<div className={home.otherProjectHeader}>
					<FolderSimple size={50} color='#64ffda' stroke='1px' />
					<Link size={25} color='white' className='pointer' />
				</div>
				<article>
					<h2>{data.name}</h2>
					<p>{data.description}</p>
					<ToolChain>
						{data.tools.map((tool) => (
							<p key={tool}>{tool}</p>
						))}
					</ToolChain>
				</article>
			</motion.div>
		</Frame>
	);
}
