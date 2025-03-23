import React, { useState } from "react";

const Home = () => {
	// Estado para el texto que se escribe en el input
	const [taskInput, setTaskInput] = useState("");
	// Estado para la lista de tareas
	const [tasks, setTasks] = useState([]);

	// Función para detectar la tecla Enter y agregar la tarea
	const handleKeyDown = (event) => {
		if (event.key === "Enter" && taskInput !== "") {
			// Se agrega la tarea a la lista y se limpia el input
			setTasks([...tasks, taskInput]);
			setTaskInput("");
		}
	};

	// Función para eliminar una tarea de la lista
	const handleDelete = (index) => {
		// Filtramos la tarea en el índice que se quiere eliminar
		setTasks(tasks.filter((_, i) => i !== index));
	};

	return (
		<div className="card d-flex bg-secondary-subtle card-container">
			<div className=" card-form text-center d-flex flex-column mb-3 justify-content-center align-items-center">
				<h1 className="text-success title-container">todos</h1>
				<div
					className="d-flex"
					style={{ width: "18rem" }}
				>
					<input
						type="text"
						className="form-control mb-3"
						onChange={(event) => setTaskInput(event.target.value)}
						onKeyDown={handleKeyDown} // Detecta la tecla Enter
						value={taskInput}
						placeholder="Escribe una tarea y presiona Enter"
					/>
				</div>
				<div className="card-items d-flex flex-column " style={{ width: "18rem" }}>
					<ul className="list-group list-group-flush ">
						{tasks.length === 0 ? (
							<li className="list-group-item ">No hay tareas, añadir tareas</li>
						) : (
							tasks.map((task, index) => (
								<li key={index} className="list-group-item task-item  d-flex">
									{task}
									<span
										className="delete-icon fs-4 "
										onClick={() => handleDelete(index)}
									>
										x
									</span>
								</li>
							))
						)}
					</ul>
					<div className="card-footer bg-danger-subtle text-secondary justify-content-start d-flex" >
						{tasks.length} {tasks.length === 1 ? "item left" : "items left"}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;