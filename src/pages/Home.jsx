// eslint-disable-next-line no-unused-vars
import React from "react"
import { useNavigate } from "react-router-dom";
import ImageSlider from '../components/ImageSlider';
import { useState, useEffect, useContext, useRef } from "react"
import fetchData from '../components/FetchCardData';
import "./Home.css"
import { SelectedOptionContext } from '../components/SelectedOptionContext'



function Home() {
  const [data,setData] = useState({
    exclusive:{items:[],loading:true},
    newLaunch : {items:[],loading:true},
    inFocus: {items:[],loading:true},
  })

  const {favData, setFavData} = useContext(SelectedOptionContext)

  const Navigate = useNavigate()
  const favRef = useRef(null);

  // const { searchVal } = useContext(SelectedOptionContext)
  // const { selectedOption } = useContext(SelectedOptionContext)


  useEffect(() => {
    fetchAndSetData("&brand=lotus cosmetics usa","exclusive")
    fetchAndSetData("&brand=iman","newLaunch")
    fetchAndSetData("&brand=benefit","inFocus")
  }, [])



  async function fetchAndSetData(query, section){
    try{
      const fetchedData = await fetchData(query);
      const limitedData = fetchedData.slice(0, 4);

      setData((prev) => ({
        ...prev,
        [section]: { items: limitedData, loading: false },
      }));
    }
    catch(error){
      console.error(`Error fetching data for ${section}:`, error);
      setData((prev) => ({
        ...prev,
        [section]: { items: [], loading: false },
      }));
    }
  }


  function handleSelectedShade(ele) {
    Navigate('/selectShade', { state: ele });
  }

  function handleFavourite(ele, e) {
    const isFav = favData.some((item) => item.id === ele.id);
    if (!isFav) {
        e.currentTarget.style.color = "red";
        e.currentTarget.style.backgroundColor = "black";
        setFavData([...favData, ele]);
    } else {
        e.currentTarget.style.color = "black";
        e.currentTarget.style.backgroundColor = "white";
        setFavData(favData.filter((item) => item.id !== ele.id));
    }
}

  function renderCard(ele,i){
    return(
      <div className="cards" key={i}>

              <div className="cardElements" key={ele.i} >
                <img src={ele.api_featured_image} />
                <div className="fetchInfo">
                  <h6>{ele.name}</h6>
                  <p>{ele.product_colors.length} Shades</p>
                  <h2>{ele.price} $ </h2>
                </div>
              </div>

              <div className="btn" key={i} >
                <button ref={favRef} className="btn1" onClick={(e) => handleFavourite(ele, e)}> <i className="fa-solid fa-heart"></i> </button>
                <button className="btn2" onClick={() => handleSelectedShade(ele)}>
                {(ele.product_colors.length > 1) ? "SELECT SHADE" : "CHOOSE ITEMS" }
                </button>
              </div>

            </div>
    )
  }

  function renderSection(title, sectionKey) {
    const { items, loading } = data[sectionKey];

    return (
      <div>
        <h2 className="homeHeading">
          <div></div>{title}<div></div>
        </h2>
        <div className="cardMain" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(20vw, 1fr))", width: "90vw", margin: "auto" }}>
          {loading ? (
            <div style={{ margin: "20px", fontSize: "4vw", fontWeight: 500 }}>Loading...</div>
          ) : items.length > 0 ? (
            items.map((ele, i) => renderCard(ele, i))
          ) : (
            <h1 style={{ margin: "20px", fontSize: "4vw", fontWeight: 500 }}>No results available</h1>
          )}
        </div>
      </div>
    );
  }

  return (
    <div>
      <ImageSlider />
      {renderSection("EXCLUSIVE KIT SERIES", "exclusive")}
      {renderSection("NEW LAUNCH", "newLaunch")}
      {renderSection("SUGAR ICONICS IN-FOCUS", "inFocus")}
    </div>
  );

}

export default Home