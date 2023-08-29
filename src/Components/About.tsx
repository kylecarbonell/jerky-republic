import Bar from "./Bar";
import "../App.css";
import "./About.css";
import AboutUsImage from "../Images/AboutUsImage.jpeg";
import NoProfPic from "../Images/Pic.jpg";

import SiteMap from "./SiteMap";

import { StaffData } from "../Data/StaffData";

interface Props {
  Name: string;
  Role: string;
  Description: string;
}

function Staff(prop: Props) {
  return (
    <>
      <div id="Container" className="StaffContainer">
        <h2 id="Name">{prop.Name}</h2>
        <h3 id="Role">{prop.Role}</h3>
        <img id="Image" src={NoProfPic} />
        <p id="Description">{prop.Description}</p>
      </div>
    </>
  );
}

function About() {
  return (
    <>
      <div className="App">
        <div className="Bar">
          <Bar />
        </div>

        <div id="Content" className="About">
          {/*Item 1*/}
          <div className="About-Item">
            <h1 className="AboutTitle">About Us</h1>
            <img id="Image" src={AboutUsImage}></img>
            <p className="AboutUsP">
              Welcome to our family-owned beef jerky business, where passion and
              tradition meet to create the most mouthwatering, savory snacks
              you've ever tasted. For generations, our family has been dedicated
              to perfecting the art of crafting premium beef jerky, using only
              the finest cuts of meat and a secret blend of spices. What started
              as a humble endeavor in our own kitchen has now evolved into a
              beloved local establishment, cherished by our community and
              beyond. We take immense pride in the authenticity of our recipes
              and the meticulous process that goes into each batch. With every
              bite, you can taste the love and care that has been passed down
              through our family, ensuring that our customers experience the
              ultimate flavor and quality. We invite you to savor our
              handcrafted beef jerky and become a part of our extended family,
              as we continue our journey of delighting taste buds and preserving
              the rich tradition that defines our business.
            </p>
          </div>

          <div className="About-Item">
            <div className="Staff">
              {StaffData.map((val, key) => {
                return (
                  <Staff
                    Name={val.name}
                    Role={val.role}
                    Description={val.description}
                  ></Staff>
                );
              })}
            </div>
          </div>
        </div>

        <div className="SiteMap-Container-About">
          <SiteMap></SiteMap>
        </div>
      </div>
    </>
  );
}

export default About;
