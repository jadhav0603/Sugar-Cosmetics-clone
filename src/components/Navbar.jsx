import "./Navbar.css";
import logo from "../images/logo/logo1.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faHeart,
  faBagShopping,
  faPercent,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { SelectedOptionContext } from "./SelectedOptionContext";

const Links = [
  {
    to: "/",
  },
  {
    to: "/sugarPlay",
    label: "SUGAR PLAY",
  },
  {
    to: "/lips",
    label: "LIPS",
  },
  {
    to: "/eyes",
    label: "EYES",
  },
  {
    to: "/face",
    label: "FACE",
  },
  {
    to: "/nails",
    label: "NAILS",
  },
  {
    to: "/skincare",
    label: "SKINCARE",
  },
  {
    to: "/accessories",
    label: "ACCESSORIES",
  },
  {
    to: "/gifting",
    label: "GIFTING",
  },
  {
    to: "/bestseller",
    label: "BESTSELLERS",
  },
  {
    to: "/newLaunches",
    label: "NEW LAUNCHES",
  },
  {
    to: "/offers",
    label: "OFFERS",
  },
  {
    to: "/blog",
    label: "BLOG",
  },
  // {
  //   to: "/selectShade",
  //   label: "SELECTSHADE",
  // },
  // {
  //   to: "/favourite",
  //   label: "FAVOURITE",
  // },
  // {
  //   to:"/searchData",
  //   label:""
  // }
];

function Navbar() {
  const [login, setLogin] = useState("Login");
  const { searchVal, setSearchVal } = useContext(SelectedOptionContext);
  const [value, setValue] = useState("");

  const Navigate = useNavigate();

  useEffect(() => {
    let data = localStorage.getItem("flag");
    // console.log(data);
    if (data) {
      setLogin("Hi, Sugar Fan");
    } else {
      setLogin("Login/Register");
    }
  }, [login]);

  function handleSearch(val) {
    setSearchVal(val);
    console.log(searchVal);
    Navigate("/searchData")
  }

  function handleLogin() {
    localStorage.setItem("flag", false);
  }

  function handleOffers() {
    Navigate("/offers");
  }

  function handleFav() {
    // setSearchVal(val);
    // console.log(searchVal);
    // Navigate("/favourite");
    Navigate('/favourite')
  }

  function handleBag() {
    Navigate('/BagData')
  }

  console.log(login);

  return (
    <div id="navContainer">
      <div id="navSearchBar">
        <div style={{display:"flex",alignItems:"center"}}>
          <Link to={Links[0].to}>
            <img style={{marginRight:"5vw"}} src={logo} alt="Logo" />
          </Link>

          <div id="inputTags">
            <input
              type="text"
              id="searchInput"
              placeholder='Try "Liquid Lipstick"'
              onChange={(e) => setValue(e.target.value)}
            />
            <button
              type="button"
              id="searchBtn"
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "nowrap",
              }}
              onClick={() => handleSearch(value)}
            >

              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                style={{ marginRight: "10px" }}
              />
              Search
            </button>
          </div>
        </div>

        <div style={{display:"flex", flexWrap:"wrap", justifyContent:"center"}}>
          <div id="loginRegister">
            <FontAwesomeIcon icon={faUser} />
            <a href="/src/Login.html" onClick={handleLogin}>
              {login}
            </a>
          </div>

          <div id="shopIcons">
            <FontAwesomeIcon
              icon={faHeart}
              style={{ color: "white", padding: "10px", cursor: "pointer" }}
              onClick={handleFav}
            />
            <FontAwesomeIcon
              icon={faBagShopping}
              style={{ color: "white", padding: "10px", cursor: "pointer" }}
              onClick={handleBag}
            />
            <FontAwesomeIcon
              icon={faPercent}
              style={{ color: "white", padding: "10px", cursor: "pointer" }}
              onClick={handleOffers}
            />
          </div>
        </div>
      </div>

      <div id="navLinks">
        {Links.map((ele) => (
          <Link key={ele.to} to={ele.to} className="pages">
            {ele.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
