import "../App.css";
import "./Shop.css";
import Bar from "./Bar";
import {
  addDoc,
  collection,
  doc,
  getFirestore,
  increment,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { firestore } from "../Firebase";
import { useState } from "react";
import { Dropdown } from "react-bootstrap";

interface ShopProps {
  name: string;
}

interface ItemProps {
  Name: string;
  src: string;
  Description: string;
  Key: number;
  onClick: (Name: string) => void;
}

function Shop() {
  const handleClick = async (Name: String, Amount: number) => {
    const data = { Name, Amount };
    await fetch("http://localhost:8000/shop", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    } as RequestInit)
      .then(() => {
        console.log("Sent");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const amounts = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [amount, setAmount] = useState({
    original: 0,
    fire: 0,
    mild: 0,
  });

  const handleChange = (e: any, Name: number) => {
    const updatedValue = { Name: e.target.value };
    // setAmount(() => {
    //   ...amount,
    //   ...updatedValue;
    // });
  };

  function Item(prop: ItemProps) {
    return (
      <>
        <div className="Item">
          <h1>{prop.Name}</h1>
          <img className="Item-Image" src={prop.src} />
          <p className="Item-Description">{prop.Description}</p>
          <div className="Item-Buttons">
            <button
              className="Item-Button"
              onClick={() => prop.onClick(prop.Name)}
            >
              Add to cart
            </button>
            <select
              className="Item-Amount"
              value={amount[prop.Key]}
              onChange={(e) => {
                handleChange(e, prop.Key);
              }}
            >
              {amounts.map((num) => {
                return <option value={num}>{num}</option>;
              })}
            </select>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="App">
        <div className="Bar">
          <Bar />
        </div>

        <div className="ShopApp">
          <Item
            Name="Original"
            // Name={props.name}
            src="src\Images\AboutUsImage.JPG"
            Description="Embark on a flavor adventure that combines the best of 
            both worlds in every bite! Sweet 'n tangy fusion beef jerky is a 
            delightful fusion of sweet and tangy flavors that will tantalize 
            your taste buds like never before."
            onClick={handleClick}
            Key={0}
          />
          <Item
            Name="Mild"
            src="src\Images\AboutUsImage.JPG"
            Description="Discover a flavor profile that embraces subtlety and 
            a gentle touch. Our mild beef jerky is a savory snack that 
            caters to those who prefer a milder taste experience without 
            compromising on quality or satisfaction."
            onClick={handleClick}
            Key={1}
          />
          <Item
            Name="Fire"
            src="src\Images\AboutUsImage.JPG"
            Description="Ignite your taste buds with a fiery flavor experience like no other!
          Our fire flavor is a sizzling hot beef jerky that brings the heat to
          your snacking routine. The finest cuts of premium beef,
          marinated in a secret blend of scorching spices."
            onClick={handleClick}
            Key={2}
          />
        </div>
      </div>
    </>
  );
}

export default Shop;
