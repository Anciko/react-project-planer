import { useEffect, useState } from "react";
import ProjectCompo from "./ProjectCompo";
import ProjectCreate from "./ProjectCreate";

function ProjectsCompo() {
    const [projects, setProjects] = useState([]);

    const handleRemove = async (id) => {
        await (fetch(`http://localhost:3030/todos/${id}`, {
            method: "DELETE"
        }));
        const filteredProjects = projects.filter(project => project.id !== id);
        setProjects(filteredProjects);
    }

    const handleCreate = async (project) => {
        await fetch("http://localhost:3030/todos", {
            method: "POST",
            headers: { "Content-Type": "Application/json" },
            body: JSON.stringify({
                title: project.title,
                completed: false
            })
        })
        setProjects([project, ...projects]);
    }

   
    useEffect(() => {
        // let projects = await(await fetch("http://localhost:3030/todos")).json();
        // setProjects(projects);
        fetch("http://localhost:3030/todos")
            .then((res) => res.json())
            .then((projects) => {
                setProjects(projects.reverse())
            })
            .catch((err) => console.log(err))
    }, [])

    return (
        <div className="container col-md-6">
            <ProjectCreate create={handleCreate}  />
            {
                projects.map(project => <ProjectCompo project={project}  key={project.id} remove={handleRemove} />)
            }
        </div>
    )
}

export default ProjectsCompo;