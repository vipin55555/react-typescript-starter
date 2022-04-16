import { useLocation } from "react-router";
import { useNavigate } from "react-router";

const Test1 = () => {
    const navigate = useNavigate();
    const location = useLocation();
    console.log('Test1 location', JSON.stringify(location.state)); // Some additional passed in state during navigation from prev component
    
    return (<div>
        <h1>This is private Test component</h1>
        <button onClick={()=> navigate('/test3',{replace: true})}> Go to Private Test 3 component</button>
    </div>)
}

export { Test1 };