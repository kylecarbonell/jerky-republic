import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import StoreIcon from "@mui/icons-material/Store";

import "./Components/Bar.css";

export const SideBarData = [
  {
    title: "Home",
    icon: <HomeIcon className="NavBarIcon"></HomeIcon>,
    link: "/",
  },
  {
    title: "About",
    icon: <InfoIcon className="NavBarIcon"></InfoIcon>,
    link: "/About",
  },
  {
    title: "Shop",
    icon: <StoreIcon className="NavBarIcon"></StoreIcon>,
    link: "/Shop",
  },
];
