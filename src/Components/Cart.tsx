import Bar from "./Bar";
import "../App.css";
import "./Cart.css";

import SpicyBeef from "../Images/FireJerky.jpg";
import OriginalBeef from "../Images/OriginalJerky.jpg";
import MildBeef from "../Images/MildJerky.jpg";

import { collection, doc, getDoc, getDocs, query } from "firebase/firestore";
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

    async function onChange(val: string, Name: string) {
      const _id = window.localStorage.getItem("cartToken");
      const Amount = parseInt(val);
      console.log(typeof Amount);
      console.log(Amount);
      const data = { Name, Amount, _id };

      await fetch("http://localhost:8000/cart", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      } as RequestInit)
        .then(() => {
          if (Name == "Fire") {
            setFire(Amount);
          } else if (Name == "Mild") {
            setMild(Amount);
          } else {
            setOriginal(Amount);
          }
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
                    await onChange(e.target.value, name);
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

  const [sum, setSum] = useState(0);

  const [fire, setFire] = useState(0);
  const [original, setOriginal] = useState(0);
  const [mild, setMild] = useState(0);

  const priceFire = 7;
  const priceMild = 6;
  const priceOriginal = 5;
  const priceTax = 0.09;

  const GetData = async () => {
    const _id = window.localStorage.getItem("cartToken");

    const data = await fetch(
      `http://localhost:8888/.netlify/functions/cart?id=${_id}`
    );

    if (!data.ok) {
      console.log("ERRROR");
      return;
    }

    const json = await data.json();
    console.log(json);

    setFire(json.Fire);
    setOriginal(json.Original);
    setMild(json.Mild);

    return json;
  };

  useEffect(() => {
    async function CalculateSum() {
      await GetData()
        .then(() => {
          const firePrice = fire * priceFire;
          const originalPrice = original * priceOriginal;
          const mildPrice = mild * priceMild;

          const s = firePrice + originalPrice + mildPrice;

          setSum(s);
        })
        .catch((error) => {
          console.log(error.toString());
        });
    }
    CalculateSum();
  }, [fire, original, mild]);

  return (
    <>
      <div className="App">
        <div className="Bar">
          <Bar />
        </div>

        <div className="Cart">
          <div className="Cart-Holder">
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
                itemImage={OriginalBeef}
              ></Item>
            )}
          </div>
          <div className="Payment-Holder">
            <div className="Payment-Description">
              <h1>Order Summary</h1>
              <p className="Payment-Items">Items : ${sum}</p>
              <p className="Payment-Items">
                Shipping and Handling : ${(sum * priceTax).toFixed(2)}
              </p>
              <p className="Payment-Items">Total : ${sum + sum * priceTax}</p>
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
