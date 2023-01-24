import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function ProjectEdit() {
    const navigate = useNavigate();
    const location = useLocation();
    const project = location.state.project;

    const [title, setTitle] = useState("");

    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        await fetch(`http://localhost:3030/todos/` + project.id , {
            method: "PATCH",
            headers: {"content-type" : "application/json"},
            body: JSON.stringify({title: title})
        });
        navigate("/");
    }

    return (
        <div className="container col-md-6 mx-auto">
            <div className="card p-2 my-2 bg-light">
                <form className="form" onSubmit={handleSubmit}>
                    <div className="mb-2">
                        <label htmlFor="title">Title</label>
                        <input type="text" className="form-control" id="title" defaultValue={project.title}  onChange={titleChangeHandler}   />
                    </div>
                    <div className="mb-2">
                        <button className="btn btn-primary float-end">Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ProjectEdit;