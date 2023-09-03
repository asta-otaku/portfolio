import React from "react";
import { forwardRef } from "react";

export default forwardRef(function Container(
	{ children, className, dataset },
	ref,
) {
	return (
		<div className={`container ${className}`} data-inview={dataset} ref={ref}>
			{children}
		</div>
	);
});
