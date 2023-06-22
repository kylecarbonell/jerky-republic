import Bar from "./Bar";
import "../App.css";
import "./Cart.css";

import { collection, doc, getDoc, getDocs, query } from "firebase/firestore";
import { firestore } from "../Firebase";
import { useEffect, useReducer, useRef, useState } from "react";

import { Button } from "react-bootstrap";

interface ItemProps {
  itemName: string;
  itemPrice: number;
  itemCount: number;
}

function Cart() {
  const fireCount = useRef<number>(0);
  const originalCount = useRef<number>(0);
  const mildCount = useRef<number>(0);

  function Item(props: ItemProps) {
    const amount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
      <>
        <div className="Item-Holder">
          <div className="Item-Picture-Holder">
            <img
              className="Item-Picture"
              src="src/Images/AboutUsImage.JPG"
            ></img>
          </div>
          <div className="Item-Name-Holder">
            <h1 className="Item-Name">{props.itemName}</h1>
            <div className="Item-Name-Option">
              <select defaultValue={props.itemCount}>
                {amount.map((num) => {
                  return <option value={num}> {num}</option>;
                })}
              </select>
            </div>
          </div>
          <div className="Item-Price-Holder">
            <h1 className="Item-Price">${props.itemPrice}</h1>
          </div>
        </div>
      </>
    );
  }

  const tempSum = useRef<number>(0);
  const [sum, setSum] = useState(0);
  const [tax, setTax] = useState(0);
  const [items, setItems] = useState(Array<string>);
  // const [reducer, forceUpdate] = useReducer(x => x + 1, 0);

  let tempItems: Array<string> = [];

  const priceFire = 7;
  const priceMild = 6;
  const priceOriginal = 5;
  const priceTax = 0.09;

  async function GetDoc() {
    const docRef = await getDocs(
      collection(firestore, "Orders", "User", "Cart")
    );

    return docRef;
  }

  useEffect(() => {
    async function CalculateSum() {
      // console.log("Rendered");
      const docs = await GetDoc();
      tempSum.current = 0;
      fireCount.current = 0;
      mildCount.current = 0;
      originalCount.current = 0;

      setItems([]);
      docs.forEach((doc) => {
        items.push(doc.get("Item"));
        const name = doc.get("Item");
        if (name == "Fire") {
          tempSum.current += priceFire;
          fireCount.current += 1;
        } else if (name == "Mild") {
          tempSum.current += priceMild;
          mildCount.current += 1;
        } else {
          tempSum.current += priceOriginal;
          originalCount.current += 1;
        }
      });
      // console.log(items);
    }

    CalculateSum();
    setItems(tempItems);
  }, []);

  return (
    <>
      <div className="App">
        <div className="Bar">
          <Bar />
        </div>

        <div className="Cart">
          <div className="Cart-Holder">
            {fireCount.current.valueOf() >= 1 ? (
              <Item
                itemName="Fire"
                itemPrice={priceFire}
                itemCount={fireCount.current.valueOf()}
              ></Item>
            ) : null}
            {mildCount.current.valueOf() >= 1 ? (
              <Item
                itemName="Mild"
                itemPrice={priceMild}
                itemCount={mildCount.current.valueOf()}
              ></Item>
            ) : null}
            {originalCount.current.valueOf() >= 1 ? (
              <Item
                itemName="Original"
                itemPrice={priceOriginal}
                itemCount={originalCount.current.valueOf()}
              ></Item>
            ) : null}
          </div>
          <div className="Payment-Holder">
            <div className="Payment-Description">
              <h1>Order Summary</h1>
              <p className="Payment-Items">
                Items : ${tempSum.current.valueOf()}
              </p>
              <p className="Payment-Items">
                Shipping and Handling : $
                {(tempSum.current.valueOf() * priceTax).toFixed(2)}
              </p>
              <p className="Payment-Items">
                Total : $
                {tempSum.current.valueOf() +
                  tempSum.current.valueOf() * priceTax}
              </p>
              <Button className="Payment-Button">Place your order</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
