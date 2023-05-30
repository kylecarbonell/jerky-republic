import "../App.css";
import "./Shop.css";
import Bar from "./Bar";
import {
  addDoc,
  collection,
  doc,
  getFirestore,
  setDoc,
} from "firebase/firestore";
import { firestore } from "../Firebase";
import { useState } from "react";

interface ShopProps {
  name: string;
}

interface ItemProps {
  Name: string;
  src: string;
  Description: string;
  onClick: (Name: string) => void;
}

function Item(prop: ItemProps) {
  return (
    <>
      <div className="Item">
        <h1>{prop.Name}</h1>
        <img className="Item-Image" src={prop.src} />
        <p className="Item-Description">{prop.Description}</p>
        <button className="Item-Button" onClick={() => prop.onClick(prop.Name)}>
          Add to cart
        </button>
      </div>
    </>
  );
}

function Shop() {
  const handleClick = async (Name: string) => {
    console.log("Clicked");

    const docs = collection(firestore, "Orders", "User", "Cart");

    try {
      await addDoc(docs, { Item: Name });
      window.location.reload();
    } catch (e) {
      console.log(e);
    }

    return;
  };

  return (
    <>
      <div className="App">
        <div className="Bar">
          <Bar />
        </div>

        <div className="ShopApp">
          {/* <h1>{props.name}  </h1> */}
          <Item
            Name="Original"
            // Name={props.name}
            src="src\Images\AboutUsImage.JPG"
            Description="Embark on a flavor adventure that combines the best of 
            both worlds in every bite! Sweet 'n tangy fusion beef jerky is a 
            delightful fusion of sweet and tangy flavors that will tantalize 
            your taste buds like never before."
            onClick={handleClick}
          />
          <Item
            Name="Mild"
            src="src\Images\AboutUsImage.JPG"
            Description="Discover a flavor profile that embraces subtlety and 
            a gentle touch. Our mild beef jerky is a savory snack that 
            caters to those who prefer a milder taste experience without 
            compromising on quality or satisfaction."
            onClick={handleClick}
          />
          <Item
            Name="Fire"
            src="src\Images\AboutUsImage.JPG"
            Description="Ignite your taste buds with a fiery flavor experience like no other!
          Our fire flavor is a sizzling hot beef jerky that brings the heat to
          your snacking routine. The finest cuts of premium beef,
          marinated in a secret blend of scorching spices."
            onClick={handleClick}
          />
        </div>
      </div>
    </>
  );
}

export default Shop;
