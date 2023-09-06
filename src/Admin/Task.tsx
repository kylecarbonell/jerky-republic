import { useEffect, useState } from "react";
import "./Task.css"
import { Button, Modal } from "react-bootstrap";

interface TaskItemProps {
    task: string,
    author: string,
}

function Task() {
    function TaskItem(props: TaskItemProps) {
        return (
            <div className="Task-Item">
                <div className="Check">
                    <button className="Check-Button"></button>
                </div>
                <div className="Text">{props.task}</div>
                <div className="Author">By {props.author}</div>
                <div className="Buttons">
                    <button className="Buttons-Check">Check</button>
                    <button className="Buttons-Check">Delete</button>
                </div>
            </div >
        )
    }

    const [tasks, setTasks] = useState([[]]);


    const [add, setAdd] = useState(false);

    const showAdd = () => {
        setAdd(true)
    }

    const handleClose = () => {
        setAdd(false);
    }

    const [taskText, setTaskText] = useState("");

    const onChange = (e: any) => {
        setTaskText(e.target.value)
    }

    const onSubmit = async (e: any) => {
        e.preventDefault();
        const data = { task: taskText, author: "admin" };
        await fetch("http://localhost:8000/task", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        } as RequestInit)
            .then(() => {
                console.log("added task")
                setTaskText("");
                setTasks([[]]);
            })
            .catch((error) => {
                console.log(error);
            });
    }


    const getTasks = async () => {
        const data = await fetch("http://localhost:8000/getTasks");

        if (!data.ok) {
            console.log("ERROR")
            return;
        }

        const json = await data.json();
        setTasks(json)
    }

    useEffect(() => {
        getTasks();
    }, [tasks])


    return (
        <div className="Task">
            <h1 className="Task-Header">Tasks</h1>
            <div className="Task-Content">
                {
                    tasks.map((val: any, key: any) => {
                        return (<TaskItem
                            task={val.task}
                            author={val.author}
                        />)
                    })
                }
            </div>
            <div className="Task-Footer">
                <button className="Footer-Button" onClick={showAdd}>Add Item</button>
            </div>


            <Modal className="Add-Task" show={add} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Task</Modal.Title>
                </Modal.Header>
                <form onSubmit={onSubmit}>
                    <Modal.Body>

                        <input placeholder="Task" onChange={onChange}></input>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose} type="submit">
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </form>

            </Modal>
        </div>


    )
}

export default Task;