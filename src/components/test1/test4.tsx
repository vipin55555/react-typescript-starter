import { useNavigate } from "react-router";

const Test4 = () => {
    const navigate = useNavigate();
    return (<div>
        <h1>This is private Test 4 component</h1>
        <button onClick={()=> navigate('/test1',{replace: true, state:{test:'Extra info passed'}})}> Go to Private Test 1 component</button>
    </div>)
}

export { Test4 };