import React from "react";
import Container from "./Container";
import Others from "./Others";
import Section from "./Section";
import home from "../styles/Home.module.css";

export default function OtherProjects({ otherProjectData }) {
	return (
		<Section>
			<Container className={home.otherProjContainer}>
				<div className={home.opHead}>
					<h2>Other Noteworthy Projects</h2>
					<p>view the archive</p>
				</div>
				<div className={home.opGrid}>
					{JSON.parse(otherProjectData).map((project) => (
						<a key={project.name} href={project.link}>
							<Others data={project} />
						</a>
					))}
				</div>
			</Container>
		</Section>
	);
}
