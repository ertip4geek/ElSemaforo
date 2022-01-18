import React, { useState } from "react";
import Luz from "./luces.jsx";

function Home() {
	const colors = ["rojo", "ambar", "verde"];
	const [lit, setLit] = useState("rojo");
	return (
		<div className="semaforo">
			{colors.map((color) => {
				return <Luz color={color} lit={lit} setLit={setLit} />;
			})}
		</div>
	);
}

export default Home;
