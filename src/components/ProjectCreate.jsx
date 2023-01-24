import { useState } from "react";

function ProjectCreate({ create }) {
    const [title, setTitle] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        let project = { id: Date.now(), title: title, completed: false };
        create(project);
        setTitle("");
    }
    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    }
    return (
        <div className="container" >
            <div className="card p-2 my-2 bg-light">
                <form className="form" onSubmit={handleSubmit}>
                    <div className="mb-2">
                        <label htmlFor="title">Title</label>
                        <input type="text" className="form-control" id="title" onChange={handleTitleChange} value={title} required />
                    </div>
                    <div className="mb-2">
                        <button className="btn btn-primary float-end">Create</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ProjectCreate;