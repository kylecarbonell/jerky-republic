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
}

function Item(props: ItemProps) {
  return <h1>{props.itemName}</h1>;
}

function Cart() {
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
      console.log("Rendered");
      const docs = await GetDoc();
      tempSum.current = 0;
      docs.forEach((doc) => {
        items.push(doc.get("Item"));
        const name = doc.get("Item");
        if (name == "Fire") {
          tempSum.current += priceFire;
        } else if (name == "Mild") {
          tempSum.current += priceMild;
        } else {
          tempSum.current += priceOriginal;
        }
      });
      console.log(items);
      setSum(tempSum.current.valueOf());
    }

    CalculateSum();
    setTax(sum * priceTax);
    setItems(tempItems);
  });

  return (
    <>
      <div className="App">
        <div className="Bar">
          <Bar />
        </div>

        <div className="Cart">
          <div className="Cart-Holder">
            {items.map((doc) => {
              let price = 0;
              if (doc == "Fire") {
                price = priceFire;
              } else if (doc == "Mild") {
                price = priceMild;
              } else {
                price = priceOriginal;
              }
              console.log(doc);
              return <Item itemName={doc} itemPrice={price} />;
            })}
          </div>
          <div className="Payment-Holder">
            <div className="Payment-Description">
              <h1>Order Summary</h1>
              <p className="Payment-Items">Items : ${sum}</p>
              <p className="Payment-Items">Shipping and Handling : ${tax}</p>
              <p className="Payment-Items">Total : ${sum + tax}</p>
              <Button className="Payment-Button">Place your order</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
