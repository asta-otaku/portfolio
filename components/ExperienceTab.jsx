import { motion, useInView } from "framer-motion";
import React, { useEffect, useReducer, useRef, useState } from "react";
import home from "../styles/Home.module.css";
function reducer(state, action) {
	switch (action.type) {
		case "tab":
			return { ...state, tabs: { ...state.tabs, current: action.id } };
	}
}

export default function ExperienceTab({ experienceData }) {
	const init = {
		tabs: {
			current: JSON.parse(experienceData)[0]._id,
		},
	};
	const exp = useRef();
	const [state, dispatch] = useReducer(reducer, init);
	useEffect(() => {
		dispatch({
			type: "tab",
			id: JSON.parse(experienceData)[0]._id,
		});
	}, [experienceData]);

	// Finds eperience based tab selection
	const experience = JSON.parse(experienceData).find(
		(exp) => exp._id === state.tabs.current,
	);

	function highlight(event) {
		const { id } = event.target;

		dispatch({ type: "tab", id });
		exp.current.classList.toggle(home.slideIn);
		exp.current.classList.add(home.slideIn);
		setTimeout(() => exp.current.classList.toggle(home.slideIn), 300);
	}

	return (
		<>
			<ul className={home.experienceTabs}>
				{/* TO DO!: Connect to api */}

				{JSON.parse(experienceData).map((exp) => (
					<li
						key={exp._id}
						className={`${home.experienceTab} pointer `}
						onClick={highlight}
						id={exp._id}
					>
						{exp.work}
						{state.tabs.current === exp._id && (
							<motion.div className={home.highlight} layoutId='highlight' />
						)}
					</li>
				))}
			</ul>

			{/* Experience */}
			<div className={home.experience} ref={exp}>
				<div className={home.experienceHeader}>
					<p className={home.roleCompany}>
						{experience?.role} <span>@ {experience?.work}</span>
					</p>
					<p className={home.roleDuration}>
						{experience?.date.start} - {experience?.date.end}
					</p>
				</div>
				<ul className={home.roleResponsibility}>
					{experience?.contributions.map((cont, index) => (
						<li key={index}>{cont}</li>
					))}
				</ul>
			</div>
		</>
	);
}
