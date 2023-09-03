import Container from "./Container";
import Featured from "./Featured";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import home from "../styles/Home.module.css";

export default function FeatureProjects({ featureProjectData }) {
	return (
		<Section className={home.featuredSection} id='work'>
			<Container className={home.featuredContainer}>
				<SectionHeader pos={"03"} heading={"Some Things I’ve Built"} />

				{JSON.parse(featureProjectData).map((feature, index) =>
					index % 2 ? (
						<Featured key={feature._id} data={feature} />
					) : (
						<Featured key={feature._id} flip={true} data={feature} />
					),
				)}
			</Container>
		</Section>
	);
}
