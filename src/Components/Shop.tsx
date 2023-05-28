import "../App.css";
import "./Shop.css";
import Bar from "./Bar";

interface Props {
  Name: string;
  src: string;
  Description: string;
}

function Item(prop: Props) {
  return (
    <>
      <div className="Item">
        <h1>{prop.Name}</h1>
        <img className="Item-Image" src={prop.src} />
        <p className="Item-Description">{prop.Description}</p>
        <button className="Item-Button">Add to cart</button>
      </div>
    </>
  );
}

function Shop() {
  return (
    <>
      <div className="App">
        <div className="Bar">
          <Bar />
        </div>

        <div className="ShopApp">
          <Item
            Name="Orignal"
            src="src\Images\AboutUsImage.JPG"
            Description="Embark on a flavor adventure that combines the best of 
            both worlds in every bite! Sweet 'n tangy fusion beef jerky is a 
            delightful fusion of sweet and tangy flavors that will tantalize 
            your taste buds like never before."
          />
          <Item
            Name="Mild"
            src="src\Images\AboutUsImage.JPG"
            Description="Discover a flavor profile that embraces subtlety and 
            a gentle touch. Our mild beef jerky is a savory snack that 
            caters to those who prefer a milder taste experience without 
            compromising on quality or satisfaction."
          />
          <Item
            Name="Fire"
            src="src\Images\AboutUsImage.JPG"
            Description="Ignite your taste buds with a fiery flavor experience like no other!
          Our fire flavor is a sizzling hot beef jerky that brings the heat to
          your snacking routine. The finest cuts of premium beef,
          marinated in a secret blend of scorching spices."
          />
        </div>
      </div>
    </>
  );
}

export default Shop;
