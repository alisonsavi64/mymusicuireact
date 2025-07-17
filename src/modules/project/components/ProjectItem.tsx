import { Link } from "react-router";
import type { ProjectItemProps } from "../props";

export default function ProjectItem ({project}: ProjectItemProps){
    return (<>
        <Link to={`/timeline/${project.id}`}><li class="border p-2">{project.description}</li></Link>
    </>)
}