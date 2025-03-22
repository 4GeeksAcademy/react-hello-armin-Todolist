import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [name, resultName] = useState()
	console.log(name)
	return (

		<div className="card bg-secondary-subtle" style={{ width: "18rem;" }}>
			<div className="card-body d-flex justify-content-center align-items-center">
				<h1 className="card-title">Todos</h1>
			</div>
			<div className="text-center d-flex justify-content-center align-items-center">
				<div className=" d-flex flex-column gap-2 bg-danger-subtle justify-content-center align-items-center" style={{ maxWith: "100%" }}>
					<h4 className="text-success">{name}</h4>
					<input type="text" className="form-control"
						onChange={(event) => {
							resultName(event.target.value)
						}}
						value={name}
					/>

				</div>
			</div>

		</div>
	);
};

export default Home; 