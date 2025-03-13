import { useLocation } from "react-router-dom";


function Order() {
    const loc = useLocation()
    const data = loc.state?.data;
    console.log(data);

    return <div>
        <h1>FIRE : {data.fire}</h1>
        <h1>ORIGINAL : {data.original}</h1>
        <h1>MILD : {data.mild}</h1>
    </div>
}

export default Order;