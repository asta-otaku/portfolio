import React from "react";
import home from "../styles/Home.module.css";

/**
 *
 * @param {String} pos
 * @param {String} heading
 * @returns
 */
export default function SectionHeader({ pos, heading }) {
	return (
		<div className={home.aboutHeader}>
			<p className={home.numbering}>{pos}.</p>
			<h2>{heading}</h2>
			<hr />
		</div>
	);
}
