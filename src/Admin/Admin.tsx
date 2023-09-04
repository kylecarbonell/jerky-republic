import AdminBar from "./AdminBar";
import "./Admin.css"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import OrderItem from "./OrderItem";
import Task from "./Task";

//Create props with dashboard content
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

function Admin() {





  const [orders, setOrders] = useState([[]]);
  const [showBar, setShowBar] = useState(true);

  // const width = showBar ? "85%" : "100%";
  const width = "100%";

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

      {
        showBar && (<div className="AdminBar">
          <AdminBar></AdminBar>
        </div>)
      }

      <div className="Content" style={{ width: width }}>
        <div className="Content-Item Pending">
          <h1 id="Admin-Text">Orders Pending</h1>
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
            <h1 id="Order-Header">Pending Orders</h1>
            <button>View All</button>
          </div>

          <OrderItem
            keyVal={1}
            orderId="Order ID"
            payMethod="Payment"
            orderDate="Order Date"
            deliveryDate="Delivery Date"
            status="Status"
            total="Total"
            order={{}}
            Header={false}
          />
          {
            orders.map((val: any, key: number) => {
              if (key < 8) {
                // console.log(key);
                return <OrderItem
                  keyVal={key}
                  orderId={val._id}
                  payMethod={val.payment}
                  orderDate={val.orderDate}
                  deliveryDate={val.deliveryDate}
                  status={val.status}
                  total={val.total}
                  order={val.order}
                  Header={true}
                />
              }
              else {
                return;
              }
            })
          }



        </div>
        <div className="Content-Item Task">
          <Task />
        </div>

        <div className="Content-Item Review"><h1>Reviews</h1></div>
      </div>
    </div>
  );
}

export default Admin;
