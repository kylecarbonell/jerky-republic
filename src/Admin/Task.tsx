import { useEffect, useState } from "react";
import "./Task.css";
import { Button, Modal } from "react-bootstrap";
import { v4 as uuid } from "uuid";

interface TaskItemProps {
  index: any;
  id: string;
  task: string;
  author: string;
}

function Task() {
  const [del, setDelete] = useState([{}]);
  function TaskItem(props: TaskItemProps) {
    const onDelete = async (id: string) => {
      console.log(`DELTING ${id}`);
      const data = { _id: id };
      await fetch("http://localhost:9000/deleteTask", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      } as RequestInit)
        .then(() => {
          console.log("deleted task");
          getTasks();
        })
        .catch((error) => {
          console.log(error);
        });
    };

    return (
      <div className="Task-Item">
        <div className="Check">
          <input
            className="Check-Button"
            key={props.index}
            type="checkbox"
            value={props.id}
            onChange={(e: any) => {
              // setDelete([
              //   ...del,
              //   { id: props.id, completed: e.target.checked },
              // ]);
              const temp = e.target.checked;
              console.log(temp);
              console.log({ id: props.id, completed: temp });

              setDelete([w{ id: props.id, completed: temp }]);
              console.log(del);
            }}
          ></input>
        </div>
        <div className="Text">{props.task}</div>
        <div className="Author">By {props.author}</div>
        <div className="Buttons">
          <button
            className="Buttons-Delete"
            onClick={() => {
              onDelete(props.id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }

  const [tasks, setTasks] = useState([[]]);
  const [add, setAdd] = useState(false);

  const showAdd = () => {
    setAdd(true);
  };

  const handleClose = () => {
    setAdd(false);
  };

  const [taskText, setTaskText] = useState("");

  const onChange = (e: any) => {
    setTaskText(e.target.value);
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    const data = { task: taskText, author: "admin" };
    await fetch("http://localhost:9000/task", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    } as RequestInit)
      .then(() => {
        console.log("added task");
        setTaskText("");
        getTasks();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getTasks = async () => {
    const data = await fetch("http://localhost:9000/getTasks");

    if (!data.ok) {
      console.log("ERROR");
      return;
    }

    const json = await data.json();
    setTasks(json);
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div className="Task">
      <h1 className="Task-Header">
        Tasks{" "}
        <button
          onClick={() => {
            del.map((val: any) => {
              if (val.completed) {
                console.log(val);
              }
            });
          }}
        >
          DELETE ALL
        </button>
      </h1>
      <div className="Task-Content">
        {tasks.map((val: any, index: any) => {
          return (
            <TaskItem
              key={index}
              index={index}
              id={val._id}
              task={val.task}
              author={val.author}
            />
          );
        })}
      </div>
      <div className="Task-Footer">
        <button className="Footer-Button" onClick={showAdd}>
          Add Item
        </button>
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
  );
}

export default Task;
