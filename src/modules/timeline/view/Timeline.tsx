import { useParams } from "react-router";

export default function Timeline(){
    const params = useParams();

    return (<>
        <h1 class="text-white">{params.id}</h1> 
    </>);
}