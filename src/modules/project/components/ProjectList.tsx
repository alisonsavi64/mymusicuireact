import type { ProjectListProps } from "../props";
import ProjectItem from "./ProjectItem";

export default function ProjectList({projects}: ProjectListProps) {
    return (<>
        <ul>
            {projects.map((project => <ProjectItem project={project}/>))}
        </ul>
    </>);
}