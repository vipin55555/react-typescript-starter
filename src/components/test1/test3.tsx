import { useNavigate } from "react-router";

const Test3 = () => {
    const navigate = useNavigate();

    return (<div>
        <h1>This is private Test 3 component</h1>
        <button onClick={()=> navigate('/test4',{replace: true})}> Go to Private Test 4 component</button>
    </div>)
}

export { Test3 };