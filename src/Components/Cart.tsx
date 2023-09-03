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

<<<<<<< HEAD
    async function onChange(e: any) {
      const _id = window.localStorage.getItem("cartToken");
      const Amount = parseInt(e.target.value);
      // console.log(typeof Amount);
      // console.log(Amount);
      const Name = e.target.name;
=======
    async function onChange(val: string, Name: string) {
      const _id = window.localStorage.getItem("cartToken");
      const Amount = parseInt(val);
      console.log(typeof Amount);
      console.log(Amount);
>>>>>>> 32f672df2b01f3090dad33175a5e75c12ae84222
      const data = { Name, Amount, _id };

      await fetch("http://localhost:8000/cart", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      } as RequestInit)
        .then(() => {
<<<<<<< HEAD
          setOrders((prev) => ({
            ...prev,
            [Name]: Amount
          }))
=======
          if (Name == "Fire") {
            setFire(Amount);
          } else if (Name == "Mild") {
            setMild(Amount);
          } else {
            setOriginal(Amount);
          }
>>>>>>> 32f672df2b01f3090dad33175a5e75c12ae84222
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
<<<<<<< HEAD
                    await onChange(e);
=======
                    await onChange(e.target.value, name);
>>>>>>> 32f672df2b01f3090dad33175a5e75c12ae84222
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

<<<<<<< HEAD
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

=======
  const [sum, setSum] = useState(0);

  const [fire, setFire] = useState(0);
  const [original, setOriginal] = useState(0);
  const [mild, setMild] = useState(0);

  const priceFire = 7;
  const priceMild = 6;
  const priceOriginal = 5;
  const priceTax = 0.09;

>>>>>>> 32f672df2b01f3090dad33175a5e75c12ae84222
  const GetData = async () => {
    const _id = window.localStorage.getItem("cartToken");

    const data = await fetch(
<<<<<<< HEAD
      `http://localhost:8000/cart?id=${_id}`
=======
      `http://localhost:8888/.netlify/functions/cart?id=${_id}`
>>>>>>> 32f672df2b01f3090dad33175a5e75c12ae84222
    );

    if (!data.ok) {
      console.log("ERRROR");
      return;
    }

    const json = await data.json();
<<<<<<< HEAD
    // console.log(json);

    setOrders({
      fire: json.Fire,
      original: json.Original,
      mild: json.Mild
    })

    // console.log(orders)
=======
    console.log(json);

    setFire(json.Fire);
    setOriginal(json.Original);
    setMild(json.Mild);
>>>>>>> 32f672df2b01f3090dad33175a5e75c12ae84222

    return json;
  };

  useEffect(() => {
    async function CalculateSum() {
      await GetData()
        .then(() => {
<<<<<<< HEAD
          console.log("Success ")
=======
          const firePrice = fire * priceFire;
          const originalPrice = original * priceOriginal;
          const mildPrice = mild * priceMild;

          const s = firePrice + originalPrice + mildPrice;

          setSum(s);
>>>>>>> 32f672df2b01f3090dad33175a5e75c12ae84222
        })
        .catch((error) => {
          console.log(error.toString());
        });
    }
    CalculateSum();
<<<<<<< HEAD
  }, [orders.fire, orders.original, orders.mild]);
=======
  }, [fire, original, mild]);
>>>>>>> 32f672df2b01f3090dad33175a5e75c12ae84222

  return (
    <>
      <div className="App">
        <div className="Bar">
          <Bar />
        </div>

        <div className="Cart">
          <div className="Cart-Holder">
<<<<<<< HEAD
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
=======
            {fire > 0 && (
              <Item
                itemName="Fire"
                itemPrice={priceFire}
                itemCount={fire}
                itemImage={SpicyBeef}
              ></Item>
            )}
            {mild > 0 && (
              <Item
                itemName="Mild"
                itemPrice={priceMild}
                itemCount={mild}
                itemImage={MildBeef}
              ></Item>
            )}
            {original > 0 && (
              <Item
                itemName="Original"
                itemPrice={priceOriginal}
                itemCount={original}
>>>>>>> 32f672df2b01f3090dad33175a5e75c12ae84222
                itemImage={OriginalBeef}
              ></Item>
            )}
          </div>
          <div className="Payment-Holder">
            <div className="Payment-Description">
              <h1>Order Summary</h1>
              <p className="Payment-Items">Items : ${sum}</p>
              <p className="Payment-Items">
<<<<<<< HEAD
                Shipping and Handling : ${(tax).toFixed(2)}
              </p>
              <p className="Payment-Items">Total : ${sum + tax}</p>
=======
                Shipping and Handling : ${(sum * priceTax).toFixed(2)}
              </p>
              <p className="Payment-Items">Total : ${sum + sum * priceTax}</p>
>>>>>>> 32f672df2b01f3090dad33175a5e75c12ae84222
              <Link to="/checkout">
                <Button className="Payment-Button">Place your order</Button>
              </Link>

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
