import React, { useRef } from "react";
import Container from "./Container";
import ExperienceTab from "./ExperienceTab";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import home from "../styles/Home.module.css";
import { useInView } from "framer-motion";
export default function Experience({ experienceData }) {
	const experienceRef = useRef();
	const experienceRefIsInView = useInView(experienceRef, { amount: 0.2 });

	return (
		<Section className={home.experienceSection} id='experience'>
			<Container
				ref={experienceRef}
				className={home.experienceContainer}
				dataset={experienceRefIsInView}
			>
				<SectionHeader pos={"02"} heading={"Where I've worked"} />
				{/* Workplace */}
				<div className={home.experiences}>
					<ExperienceTab experienceData={experienceData} />
				</div>
			</Container>
		</Section>
	);
}
