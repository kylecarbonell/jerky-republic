import "./Task.css"

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

    const temp = [
        { task: "Take out garbage", author: "Kyle" },
        { task: "Buy Food", author: "Joe" },
        { task: "Cut Meat", author: "Bob" },
        { task: "Find Dog", author: "Kyle" },
        { task: "Eat Food", author: "Kyle" },
    ]

    return (
        <div className="Task">
            <h1 className="Task-Header">Tasks</h1>
            <div className="Task-Content">
                {
                    temp.map((val, key) => {
                        return (<TaskItem
                            task={val.task}
                            author={val.author}
                        />)
                    })
                }
            </div>
        </div>
    )
}

export default Task;