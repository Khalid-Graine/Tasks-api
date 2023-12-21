import React, { useEffect, useState } from "react";
import axios from "axios";
import Message from "./components/Message";

function App() {
    const myapi = 'http://127.0.0.1:8000/api/tasks/'
    const [tasks, setTasks] = useState([]);
    const [message , setMessage] = useState({
        type: 'success',
        text: 'ttttttttt',
        show: false
    });

    useEffect(() => {
        axios
            .get(myapi)
            .then((response) => {
                setTasks(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    function deleteTask(id) {
        setTasks(() => tasks.filter((t) => t.id !== id));
        axios.delete(myapi + ''+id)
        .then((res) => {
            console.log(res)
            setMessage({
                type: 'success',
                text: 'you have removed the task successfully',
                show: true
            })
        }).catch((err) => {
             console.log(err)
        })
    }
    return (
        <>
            <div className="w-10/12 my-2 mx-auto">
                <Message obj={message}  />
                <ul className=" flex flex-col gap-2">
                    {tasks.map((task) => (
                        <li key={task.id} className="bg-yellow-100">
                            <h2 className=" font-semibold">
                                {task.title}
                            </h2>
                            <p>{task.description}</p>
                            <button onClick={() => deleteTask(task.id)} className="bg-red-400 px-2 rounded-sm">delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default App;
