import "./ToDoListForm.css"

const ToDoListForm = (props) => {

    return(
        <form  className="form-visual">
            <div className="form-section">
                <div>
                    <label>New Task</label>
                    <br></br>
                    <input className="form-selections" type="text"/>
                </div>
                <div>
                    <label>Date</label>
                    <br></br>
                    <input className="form-selections" type="date" min="2023-01-18" max="2025-12-31"/>
                </div>
                <div>
                    <label className="label">Select task priority</label>
                    <br></br>
                    <select className="form-selections">
                        <option value={0}>low</option>
                        <option value={1}>medium</option>
                        <option value={2}>high</option>
                    </select>
                </div>
                <div>
                    <button className="btn">Add Task</button>
                </div>
            </div>
        </form>
    )
}

export default ToDoListForm;