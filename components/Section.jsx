import React from "react";
import { forwardRef } from "react";

export default forwardRef(function Section({ children, className, id }, ref) {
	return (
		<section className={`section ${className}`} id={id} ref={ref}>
			{children}
		</section>
	);
});
