import React, { useContext } from "react";
import { SelectedOptionContext } from "./SelectedOptionContext";
import { useNavigate } from "react-router-dom";
// import Favourite from './Favourite';

function Favourite() {
  // const [flag, setFlag] = useState(true);
  const { favData, setFavData } = useContext(SelectedOptionContext);
  const Navigate = useNavigate()

  function handleFavourite(ele) {
    setFavData(favData.filter((item) => item.id !== ele.id));
  }

  function handleBuyNow(ele) {
    Navigate('/selectShade', {state:ele})
  }

  return (
    <div>
      {favData.length <= 0 ? (
        <div
          style={{
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            margin: "10vw 0vw",
            fontSize: "2vw",
            fontWeight: "500",
          }}
        >
          Your Favourite Data Is Empty ...!
        </div>
      ) : (
        <div
          className="cardMain"
          style={{
            width: "90%",
            margin: "auto",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
          }}
        >
          {favData.map((ele, i) => (
            <div className="cards" key={i}>
              <div className="cardElements">
                <img src={ele.api_featured_image} alt={ele.name} />
                <div className="fetchInfo">
                  <h6>{ele.name}</h6>
                  <p>{ele.product_colors.length} shades</p>
                  <h2>{ele.price} $</h2>
                </div>
              </div>

              <div className="btn">
                <button
                  className="btn1"
                  onClick={() => handleFavourite(ele)}
                  style={{ backgroundColor: "black", color: "red" }}
                >
                  <i className="fa-solid fa-heart"></i>
                </button>
                <button className="btn2" onClick={() => handleBuyNow(ele)}>
                  {(ele.product_colors.length > 1) ? "SELECT SHADE" : "CHOOSE ITEMS" }
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favourite;
