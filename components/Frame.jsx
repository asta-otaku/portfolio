import React from "react";

export default function Frame({ children }) {
	return <div style={{ overflow: "hidden", height: "100%" }}>{children}</div>;
}
