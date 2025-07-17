import ProjectList from "../components/ProjectList";

function MyProjects () {
    return (<>
        <div class="justify-center items-center flex mt-50 mb-50">
            <div class="text-white border border-white items-center justify-center w-140">
                <h1 class="font-bold text-center text-4xl">Projects</h1>
                <ProjectList projects={[{id: 1, description: 'teste'},{id: 1, description: 'teste2'},{id: 1, description: 'teste3'}]}></ProjectList>
            </div>
        </div>
    </>);
}

export default MyProjects;

