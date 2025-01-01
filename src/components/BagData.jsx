import React, { useState, useContext, useEffect } from "react";
import { SelectedOptionContext } from "./SelectedOptionContext";
import { useNavigate } from "react-router-dom";
// import "./BagData.css"; // Assuming you have a CSS file for styles
import "./BagData.css"

function BagData() {
    const { BagData, setBagData } = useContext(SelectedOptionContext);
    const Navigate = useNavigate();

    const [counts, setCounts] = useState({}); // To store item counts
    const [total, setTotal] = useState(0);

    // Calculate the total price whenever BagData or counts changes
    useEffect(() => {
        const newTotal = BagData.reduce((acc, item) => {
            const count = counts[item.id] || 1;
            return acc + item.price * count;
        }, 0);
        setTotal(newTotal);
    }, [BagData, counts]);

    // Handle increment
    const incrementCount = (id) => {
        setCounts({ ...counts, [id]: (counts[id] || 1) + 1 });
    };

    // Handle decrement
    const decrementCount = (id) => {
        if (counts[id] > 1) {
            setCounts({ ...counts, [id]: counts[id] - 1 });
        }
    };

    // Remove item from the bag
    const handleRemove = (id) => {
        setBagData(BagData.filter((item) => item.id !== id));
        const updatedCounts = { ...counts };
        delete updatedCounts[id];
        setCounts(updatedCounts);
    };

    const handleBuyNow = () => {
        setBagData([])
        Navigate("/payment");
    };

    return (
        <div id="container">
            <div id="pageHeading">
                Home &gt; <b>Bag</b>
            </div>

            <div id="main">
                <div id="mainLeft">
                    <h2>BAG SUMMARY</h2>
                    <div id="card">

                        {BagData.map((item) => (
                            <div key={item.id} className="bag-item">
                                <div >
                                    <img
                                        src={item.api_featured_image || item.image_link}
                                        alt={item.name}
                                    />
                                    <div>
                                        <div className="item-details">
                                            <p>{item.description || item.name} </p>
                                            <p>
                                                MRP: <b>$ {item.price}</b>
                                            </p>
                                        </div >
                                        <div className="deleteIcon">
                                            <i className="fa fa-trash"
                                                onClick={() => handleRemove(item.id)}></i>
                                        </div>
                                        <div className="item-actions">
                                            <button onClick={() => decrementCount(item.id)}>-</button>
                                            <span>{counts[item.id] || 1}</span>
                                            <button onClick={() => incrementCount(item.id)}>+</button>
                                        </div>
                                    </div>
                                </div>
                                <hr className="dashed-line"></hr>
                            </div>
                        ))}

                    </div>
                </div>

                <div id="mainRight">
                    <h2>APPLY COUPON</h2>
                    <div>
                        <div id="inputField">
                            <div>
                                <input type="text" />
                                <button>APPLY</button>
                            </div>
                            <hr className="dashed-line"></hr>
                            <i className="fa-light fa-percent"></i><h2>Offer & Coupons</h2>
                        </div>

                        <h2>PRICE DETAILS</h2>
                        <div id="priceSection">
                            <div className="priceDetails">
                                <h5>Item(s) Total (Inclusive of taxes)</h5>
                                <h5>${total.toFixed(2)}</h5>
                            </div>
                            <div className="priceDetails">
                                <h5>Savings</h5>
                                <h5>$0</h5>
                            </div>
                            <div className="priceDetails">
                                <h5>Club Vellvette Saving</h5>
                                <h5>$ 0 </h5>
                            </div>
                            <div className="priceDetails">
                                <h5>Standard Shipping</h5>
                                <h5>$ 0 </h5>
                            </div>
                            <hr className="dashed-line"></hr>
                            <div className="priceDetails" style={{fontWeight:"700", fontSize:"large"}}>
                                <h2>Order Total</h2>
                                <h5>${total.toFixed(2)}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="orderDiv">
                <div>
                    <h2>DELIVERING TO: </h2>
                </div>
                <button onClick={handleBuyNow}>
                    ${total.toFixed(2)} PLACE ORDER
                </button>
            </div>
        </div>
    );
}

export default BagData;
