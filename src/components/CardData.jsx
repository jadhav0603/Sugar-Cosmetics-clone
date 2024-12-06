import React, { useContext } from "react"
import "./CardData.css"
import { useNavigate } from "react-router-dom";
import { useState, useRef } from 'react'
import Pagination from "./Pagination";
import { SelectedOptionContext } from "./SelectedOptionContext";

function CardData({ response }) {
    const ITEMS_PER_PAGE = 15;
    const [currentPage, setCurrentPage] = useState(1);
    const { favData, setFavData } = useContext(SelectedOptionContext);
    const Navigate = useNavigate();

    const getPaginatedData = () => {
        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        return response.slice(startIndex, startIndex + ITEMS_PER_PAGE);
    };

    function handleSelectedShade(ele) {
        Navigate("/selectShade", { state: ele });
    }

    function handleFavourite(ele) {
        const isFav = favData.some((item) => item.id === ele.id);
        if (!isFav) {
            setFavData([...favData, ele]);
        } else {
            setFavData(favData.filter((item) => item.id !== ele.id));
        }
    }

    function isFavourite(ele) {
        return favData.some((item) => item.id === ele.id);
    }

    return (
        <div>
            <div className="cardMain">
                {getPaginatedData().map((ele, i) => (
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
                                style={{
                                    backgroundColor: isFavourite(ele) ? "black" : "white",
                                    color: isFavourite(ele) ? "red" : "black",
                                }}
                            >
                                <i className="fa-solid fa-heart"></i>
                            </button>
                            <button className="btn2" onClick={() => handleSelectedShade(ele)}>
                            {(ele.product_colors.length > 1) ? "SELECT SHADE" : "CHOOSE ITEMS" }
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="pagination">
                <Pagination
                    currentPage={currentPage}
                    totalPages={Math.ceil(response.length / ITEMS_PER_PAGE)}
                    onPageChange={(page) => setCurrentPage(page)}
                />
            </div>
        </div>
    );
}


export default CardData