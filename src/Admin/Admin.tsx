import AdminBar from "./AdminBar";
import "./Admin.css"
import { useEffect, useState } from "react";

//Create props with dashboard content
interface OrderProps {
  key: number;
  orderId: string;
  payMethod: string;
  orderDate: string;
  deliveryDate: string;
  status: string;
  total: string;
  Header: boolean
}

function Admin() {
  function OrderItem(props: OrderProps) {
    return (
      <div className="Order-Item">
        <h3 id="Order-Text">{props.orderId}</h3>
        <h3 id="Order-Text">{props.payMethod}</h3>
        <h3 id="Order-Text">{props.orderDate}</h3>
        <h3 id="Order-Text">{props.deliveryDate}</h3>
        <h3 id="Order-Text">{props.status}</h3>
        <h3 id="Order-Text">{props.total}</h3>
        {props.Header &&
          <button>View</button>

        }
        {
          props.Header &&
          <button>Edit</button>
        }
      </div>
    )
  }

  const temp = [
    ["132049", "cash", "5/21/23", "5/2/14", "Shipping", "1500"],
    ["132045", "cash", "5/21/23", "5/2/14", "Shipping", "125"],
    ["132043", "cash", "5/21/23", "5/2/14", "Shipping", "150"],
    ["132042", "cash", "5/21/23", "5/2/14", "Shipping", "100"],
    ["132043", "cash", "5/21/23", "5/2/14", "Shipping", "130"],
    ["132046", "cash", "5/21/23", "5/2/14", "Shipping", "170"],
    ["132041", "cash", "5/21/23", "5/2/14", "Shipping", "180"],
    ["132048", "cash", "5/21/23", "5/2/14", "Shipping", "110"],
    ["132044", "cash", "5/21/23", "5/2/14", "Shipping", "10"],
    ["132044", "cash", "5/21/23", "5/2/14", "Shipping", "10"],
    ["132044", "cash", "5/21/23", "5/2/14", "Shipping", "10"],
  ]

  const [orders, setOrders] = useState([[]]);

  const getOrders = async () => {
    const data = await fetch("http://localhost:8000/getOrders");

    if (!data.ok) {
      console.log("ERROR")
      return;
    }

    const json = await data.json();
    setOrders(json)
  }

  useEffect(() => {
    getOrders();
  }, [])

  return (
    <div className="Admin">

      <div className="Content">
        <div className="Content-Item Pending">
          <h1 id="Admin-Text">Order Pending</h1>
        </div>
        <div className="Content-Item Cancel">
          <h1 id="Admin-Text">Cancel</h1>
        </div>
        <div className="Content-Item Process">
          <h1 id="Admin-Text">Process</h1>
        </div>
        <div className="Content-Item Income">
          <h1 id="Admin-Text">Income</h1>
        </div>
        <div className="Content-Item Orders">
          <div className="Order-Header">
            <h1 id="Admin-Text">Pending Orders</h1>
            <button>View All</button>
          </div>

          <OrderItem
            key={-1}
            orderId="Order ID"
            payMethod="Payment"
            orderDate="Order Date"
            deliveryDate="Delivery Date"
            status="Status"
            total="Total"
            Header={false}
          />
          {
            orders.map((val: any, key: number) => {
              if (key < 8) {
                console.log();
                return <OrderItem
                  key={key}
                  orderId={val._id}
                  payMethod={val.payment}
                  orderDate={val.orderDate}
                  deliveryDate={val.deliveryDate}
                  status={val.status}
                  total={val.total}
                  Header={true}
                />
              }
              else {
                return;
              }
            })
          }
        </div>
      </div>
    </div>
  );
}

export default Admin;
