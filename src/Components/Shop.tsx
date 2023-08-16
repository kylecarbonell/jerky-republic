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
  const amounts = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [amount, setAmount] = useState({
    Original: 0,
    Fire: 0,
    Mild: 0,
  });

  const handleClick = async (Name: string, Amount: number) => {
    const _id = window.localStorage.getItem("AppId")
    const data = { Name, Amount, _id };
    await fetch("http://localhost:8000/shop", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    } as RequestInit)
      .then(() => {
        console.log("sent")
        const updatedValue = { [Name]: 0 };
        setAmount(amount => ({
          ...amount,
          ...updatedValue
        }));
      })
      .catch((error) => {
        console.log(error);
      });
  };




  function Item(prop: ItemProps) {
    let value = 0
    if (prop.Name == "Fire") {
      value = amount.Fire;
    }
    else if (prop.Name == "Original") {
      value = amount.Original
    }
    else {
      value = amount.Mild
    }

    const handleChange = (e: any, Name: string) => {
      const updatedValue = { [Name]: Number(e.target.value) };
      setAmount(amount => ({
        ...amount,
        ...updatedValue
      }));

      console.log(amount)
  };

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
              value={value}
              onChange={(e) => {
                handleChange(e, prop.Name);
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
            onClick={(e) => {
              handleClick(e, amount.Original)
            }}
            Key={0}
          />
          <Item
            Name="Mild"
            src="src\Images\AboutUsImage.JPG"
            Description="Discover a flavor profile that embraces subtlety and 
            a gentle touch. Our mild beef jerky is a savory snack that 
            caters to those who prefer a milder taste experience without 
            compromising on quality or satisfaction."
            onClick={(e) => {
              handleClick(e, amount.Mild)
            }}
            Key={1}
          />
          <Item
            Name="Fire"
            src="src\Images\AboutUsImage.JPG"
            Description="Ignite your taste buds with a fiery flavor experience like no other!
          Our fire flavor is a sizzling hot beef jerky that brings the heat to
          your snacking routine. The finest cuts of premium beef,
          marinated in a secret blend of scorching spices."
            onClick={(e) => {
              handleClick(e, amount.Fire)
            }}
            Key={2}
          />
        </div>
      </div>
    </>
  );
}

export default Shop;
