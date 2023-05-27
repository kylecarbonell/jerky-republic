import "./Bar.css";

function Bar() {
  return (
    <>
      <div className="Bar">
        <h1 className="Title">Jerky Republic</h1>
        {/* Add a font to this that matches the whole page */}
        <button className="Button">Home</button>
        <button className="Button">About</button>
        <button className="Button">Flavors</button>
        <button className="Button">Shop</button>
        <button className="Button">Contact</button>
        <button className="Button">Login</button>
      </div>
    </>
  );
}

export default Bar;
