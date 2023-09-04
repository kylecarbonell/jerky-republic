import Bar from "./Bar";
import "../App.css";
import "./Cart.css";

import SpicyBeef from "../Images/FireJerky.jpg";
import OriginalBeef from "../Images/OriginalJerky.jpg";
import MildBeef from "../Images/MildJerky.jpg";

import { useEffect, useReducer, useRef, useState } from "react";

import { Button } from "react-bootstrap";

import SiteMap from "./SiteMap";
import { Link } from "react-router-dom";

interface ItemProps {
  itemName: string;
  itemPrice: number;
  itemCount: number;
  itemImage: string;
}

function Cart() {
  function Item(props: ItemProps) {
    const amount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    async function onChange(e: any) {
      const _id = window.localStorage.getItem("cartToken");
      const Amount = parseInt(e.target.value);
      // console.log(typeof Amount);
      // console.log(Amount);
      const Name = e.target.name;
      const data = { Name, Amount, _id };

      await fetch("http://localhost:8000/cart", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      } as RequestInit)
        .then(() => {
          setOrders((prev) => ({
            ...prev,
            [Name]: Amount
          }))
        })
        .catch((error) => {
          console.log(error);
        });
    }

    return (
      <>
        <div className="Item-Holder">
          <div className="Item-Picture-Holder">
            <img className="Item-Picture" src={props.itemImage}></img>
          </div>
          <div className="Item-Name-Holder">
            <h1 className="Item-Name">{props.itemName}</h1>
            <div className="Item-Name-Option">
              <h1 className="Item-Name" style={{ fontSize: "1.5rem" }}>
                Quantity: <span></span>
                <select
                  defaultValue={props.itemCount}
                  onChange={async (e: any) => {
                    const name = props.itemName;
                    await onChange(e);
                  }}
                >
                  {amount.map((num, key) => {
                    return (
                      <option key={key} value={num}>
                        {" "}
                        {num}
                      </option>
                    );
                  })}
                </select>
              </h1>
            </div>
          </div>
          <div className="Item-Price-Holder">
            <h1 className="Item-Price">${props.itemPrice}</h1>
          </div>
        </div>
      </>
    );
  }

  const [test, setSum] = useState(0);

  // const [fire, setFire] = useState(0);
  // const [original, setOriginal] = useState(0);
  // const [mild, setMild] = useState(0);

  const [orders, setOrders] = useState({
    fire: 0,
    original: 0,
    mild: 0
  })

  const prices = {
    priceFire: 7,
    priceMild: 6,
    priceOriginal: 5,
  }

  const priceTax = 0.09;

  const firePrice = orders.fire * prices.priceFire;
  const originalPrice = orders.original * prices.priceOriginal;
  const mildPrice = orders.mild * prices.priceMild;

  const sum = firePrice + originalPrice + mildPrice;
  const tax = sum * priceTax;
  const total = sum + tax;

  const GetData = async () => {
    const _id = window.localStorage.getItem("cartToken");

    const data = await fetch(
      `http://localhost:8000/cart?id=${_id}`
    );

    if (!data.ok) {
      console.log("ERRROR");
      return;
    }

    const json = await data.json();
    // console.log(json);

    setOrders({
      fire: json.Fire,
      original: json.Original,
      mild: json.Mild
    })

    // console.log(orders)

    return json;
  };

  const Checkout = async () => {
    const data = { total: total, payment: "Cash" }
    await fetch("http://localhost:8000/checkout", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    } as RequestInit)
      .then(() => {
        console.log("chekcing out");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    async function CalculateSum() {
      await GetData()
        .then(() => {
          console.log("Success ")
        })
        .catch((error) => {
          console.log(error.toString());
        });
    }
    CalculateSum();
  }, [orders.fire, orders.original, orders.mild]);

  return (
    <>
      <div className="App">
        <div className="Bar">
          <Bar />
        </div>

        <div className="Cart">
          <div className="Cart-Holder">
            {orders.fire > 0 && (
              <Item
                itemName="Fire"
                itemPrice={prices.priceFire}
                itemCount={orders.fire}
                itemImage={SpicyBeef}
              ></Item>
            )}
            {orders.mild > 0 && (
              <Item
                itemName="Mild"
                itemPrice={prices.priceMild}
                itemCount={orders.mild}
                itemImage={MildBeef}
              ></Item>
            )}
            {orders.original > 0 && (
              <Item
                itemName="Original"
                itemPrice={prices.priceOriginal}
                itemCount={orders.original}
                itemImage={OriginalBeef}
              ></Item>
            )}
          </div>
          <div className="Payment-Holder">
            <div className="Payment-Description">
              <h1>Order Summary</h1>
              <p className="Payment-Items">Items : ${sum}</p>
              <p className="Payment-Items">
                Shipping and Handling : ${(tax).toFixed(2)}
              </p>
              <p className="Payment-Items">Total : ${total}</p>
              {/* <Link to="/checkout"> ADD BACK LATER*/}
              <Button className="Payment-Button" onClick={() => { Checkout() }}>Place your order</Button>
              {/* </Link> */}

              <Link to="/Shop">
                <Button className="Payment-Button">Keep Shopping</Button>
              </Link>
            </div>
          </div>
        </div>
        <div id="Site-Map">
          <SiteMap />
        </div>
      </div>
    </>
  );
}

export default Cart;
