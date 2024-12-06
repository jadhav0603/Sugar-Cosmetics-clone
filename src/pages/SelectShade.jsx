import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import "./SelectShade.css";
import { SelectedOptionContext } from "../components/SelectedOptionContext"

function SelectShade() {
  const [activeIndex, setActiveIndex] = useState(null);
  const { favData, setFavData } = useContext(SelectedOptionContext);
  const { BagData, setBagData} = useContext(SelectedOptionContext);

  const Navigate = useNavigate();

  const location = useLocation();
  const a = location.state;
  let data = [];
  data.push(a);
  console.log(data);

  function handleShade(index) {
    setActiveIndex(index);
  }

  function handlePayment() {
    Navigate("/payment");
  }

  function handleFavourite(ele) {
    const isFav = favData.some((item) => item.id === ele.id);
    if (!isFav) {
        setFavData([...favData, ele]);
    } else {
        setFavData(favData.filter((item) => item.id !== ele.id));
    }
}

function handleBag(ele) {
  const isBag = BagData.some((item) => item.id === ele.id);
  if (!isBag) {
      alert("Your product is added in bag")
      setBagData([...BagData, ele]);
  } else {
    alert("Your product is aleady added in bag please check bag")
      // setBagData(BagData.filter((item) => item.id !== ele.id));
  }
}

function isBagData(ele){
  return BagData.some((item) => item.id === ele.id)
}

function isFavourite(ele) {
    return favData.some((item) => item.id === ele.id);
}

  return (
    <div id="main">
      {data.map((ele, index) => (
        <div id="shadeContainer" key={index}>
          <div id="leftDiv">
            <img
              id="smallImg"
              src={ele.api_featured_image|| ele.image_link}
              alt="not available"
            />
            <img id="bigImg" src={ele.api_featured_image} alt="404 Not Found" />
          </div>

          <div id="rightDiv">
            <div id="heading">
              <h1>{ele.name}</h1>
              <p>
                <a href={ele.product_link}>share</a>
              </p>
            </div>
            <div id="discrip">
              <p>
                <b>Description :</b> {ele.description}
              </p>
            </div>

            <div>
              <span>{ele.rating}</span>
              <p id="price">
                {ele.price_sign} {ele.price}
              </p>
              <p> Brand : {ele.brand}</p>
            </div>

            <div id="colorShade">
              {ele.product_colors.map((item, index) => (
                <div
                  key={index}
                  style={{
                    width: activeIndex === index ? "55px" : "50px",
                    height: activeIndex === index ? "55px" : "50px",
                    borderRadius: "5px",
                    backgroundColor: `${item.hex_value}`,
                    transition: "all 0.2s ease-in-out",
                    border: activeIndex === index ? "2px solid black" : "none",
                  }}
                  onClick={() => handleShade(index)}
                ></div>
              ))}
            </div>

            <div id="btns">
              <button
                className="btn1"
                onClick={() => handleFavourite(ele)}
                style={{
                  backgroundColor: isFavourite(ele) ? "black" : "white",
                  color: isFavourite(ele) ? "red" : "black",
                }}
              >
                <i className="fa-solid fa-heart"></i>
              </button>
              <button className="btn2" onClick={()=>handleBag(ele)}> ADD BAG</button>
            </div>

            <div id="commonQue">
              <h1>COMMONLY ASKED QUESTIONS</h1>
              <p>
                Q. I have oily skin. Will this foundation work for me? A.
                Absolutely. SUGAR Rage For Coverage Foundation has an oil-free
                and oil-absorbing formula that delivers a smooth, shine-free
                finish. It suits all skin types. For extremely dry skin, we
                suggest prepping skin well and using a rich moisturizer to keep
                your skin barrier intact and hydrated which allows makeup to go
                smooth. <br /> <br />
                Q. Does this foundation work for skin with acne and redness? A.
                This long-wear foundation is enriched with the skin-soothing
                active Portulaca Vita from purslane extract that aids in
                relieving irritated skin and reducing inflammation. You can use
                it to conceal and minimize redness, acne scars and the gentle,
                non-irritating foundation formula works well for rosacea too!{" "}
                <br /> <br />
                Q. I have really dry skin and normally when I apply a
                high-coverage foundation, it tends to get cakey? which shade is
                best for me? A. All the 15 shades of our new SUGAR Rage For
                Coverage Foundation match with shades from our bestselling SUGAR
                Ace Of Face Foundation Stick. You can use the SUGAR foundation
                guide too!
              </p>

              <button className="btn2" onClick={() => handlePayment()}>
                {" "}
                BUY NOW
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SelectShade;
