import { Link } from "react-router-dom";

function ProjectCompo({ project, remove }) {

    const removeProject = () => {
        remove(project.id);
    }

    return (
        <div className="card shadow m-2 p-4 border-3 border-start "  >
            <div className="d-flex justify-content-between align-items-center">
                <div className="col-8">
                    <h3 className="">{project.title}</h3>
                </div>
                <div className="col-4 text-end">
                    <Link to={`/posts/edit/${project.id}`} className="text-dark" state={{ project }}>
                        <i className="fa-regular fa-edit fa-xl mx-2"></i>
                    </Link>
                    <i className="fa-regular fa-trash-can fa-xl" onClick={removeProject}></i>
                </div>
            </div>
        </div>
    );
}

export default ProjectCompo;