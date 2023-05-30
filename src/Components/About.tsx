import Bar from "./Bar";
import "../App.css";
import "./About.css";

interface Props {
  Name: string;
  Role: string;
  Description: string;
}

function Staff(prop: Props) {
  return (
    <>
      <h2 id="Name">{prop.Name}</h2>
      <h3 id="Role">{prop.Role}</h3>
      <img id="Image" src="src\Images\AboutUsImage.JPG" />
      <p id="Description">{prop.Description}</p>
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
          <h1 className="AboutTitle">About Us</h1>
          <img className="Image" src="src\Images\AboutUsImage.JPG"></img>
          <p className="AboutUsP">
            Welcome to our family-owned beef jerky business, where passion and
            tradition meet to create the most mouthwatering, savory snacks
            you've ever tasted. For generations, our family has been dedicated
            to perfecting the art of crafting premium beef jerky, using only the
            finest cuts of meat and a secret blend of spices. What started as a
            humble endeavor in our own kitchen has now evolved into a beloved
            local establishment, cherished by our community and beyond. We take
            immense pride in the authenticity of our recipes and the meticulous
            process that goes into each batch. With every bite, you can taste
            the love and care that has been passed down through our family,
            ensuring that our customers experience the ultimate flavor and
            quality. We invite you to savor our handcrafted beef jerky and
            become a part of our extended family, as we continue our journey of
            delighting taste buds and preserving the rich tradition that defines
            our business.
          </p>

          <div className="OurStaff">
            <h1 className="OurStaffHeader">Our Staff</h1>
            <div id="Container" className="Eric">
              <Staff
                Name="Eric Carbonell"
                Role="Founder / Owner"
                Description="Hi, my name is Eric and I founded Jerky Republic back in 2019 over
                  covid. I love fishing with some of my buddies and traveling all around
                  the world. My favorite places to travel to include the Philippines and
                  sever European countries."
              />
            </div>
            <div className="Staff">
              <div id="Container" className="StaffContainer">
                <Staff
                  Name="Kyle Carbonell"
                  Role="Cutter"
                  Description="Hi, my name is Kyle, I love spending time with my family. 
                  Some of my hobbies are playing volleyball and making computer science projects. "
                />
              </div>
              <div id="Container" className="StaffContainer">
                <Staff
                  Name="Aiden Carbonell"
                  Role="Marinator"
                  Description="Hey guys, I'm Aiden. I am currently a first-year college student and 
                  I'm working for my uncle Eric part time. I love playing games and hanging out with my friends."
                />
              </div>
              <div id="Container" className="StaffContainer">
                <Staff
                  Name="Kennet Carbonell"
                  Role="Baker"
                  Description="Hi, I'm Kenneth. I have a bachelor's in computer science from Cal 
                  state Fullerton. My hobbies are playing video games and playing Pokemon Go on my free time."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
