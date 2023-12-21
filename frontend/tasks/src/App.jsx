import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        axios
            .get("http://127.0.0.1:8000/api/tasks")
            .then((response) => {
                setTasks(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <>
            <div className="w-10/12 my-2 mx-auto">
                <ul className=" flex flex-col gap-2">
                    {tasks.map((task) => (
                        <li key={task.id} className="bg-yellow-100">
                            <h2 className=" font-semibold">
                                {task.title}
                            </h2>
                            <p>{task.description}</p>
                            <button className="bg-red-400 px-2 rounded-sm">delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default App;
