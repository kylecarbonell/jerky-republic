import { Link } from "react-router-dom";
import "./OrderItem.css"

interface OrderProps {
    keyVal: number;
    orderId: string;
    payMethod: string;
    orderDate: string;
    deliveryDate: string;
    status: string;
    total: string;
    order: object;
    Header: boolean
}

function OrderItem(props: OrderProps) {
    const styleComp =
        props.keyVal % 2 == 1 ?
            { backgroundColor: "lightgray" } : { backgroundColor: "whitesmoke" };



    return (
        <div className="Order-Item" style={props.keyVal % 2 == 1 ? { backgroundColor: "lightgray" } : { backgroundColor: "whitesmoke" }}>
            <h3 id="Order-Text"
                style={styleComp}>
                {props.orderId}
            </h3>
            <h3 id="Order-Text"
                style={styleComp}>
                {props.payMethod}
            </h3>
            <h3 id="Order-Text"
                style={styleComp}>
                {props.orderDate}
            </h3>
            <h3 id="Order-Text"
                style={styleComp}>
                {props.deliveryDate}
            </h3>
            <h3 id="Order-Text"
                style={styleComp}>
                {props.status}
            </h3>
            <h3 id="Order-Text"
                style={styleComp}>
                {props.total}
            </h3>
            {props.Header &&
                <Link to={`/admin/order/view/${props.orderId}`} state={{ data: props.order }}>
                    <button style={props.keyVal % 2 == 1 ? { backgroundColor: "lightgray" } : { backgroundColor: "whitesmoke" }}>View</button>
                </Link>

            }
            {
                props.Header &&
                <button style={props.keyVal % 2 == 1 ? { backgroundColor: "lightgray" } : { backgroundColor: "whitesmoke" }}>Edit</button>
            }
        </div>
    )
}

export default OrderItem;