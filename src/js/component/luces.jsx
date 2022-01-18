import React from "react";

const Luz = ({ color, lit, setLit }) => {
	return (
		<div>
			<div
				className={
					"light " + (color == lit ? lit + " glow" : "apagado")
				}
				onClick={() => setLit(color)}></div>
		</div>
	);
};

export default Luz;
