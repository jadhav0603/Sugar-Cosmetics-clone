import React from "react";
import { useState, useEffect, useContext } from "react";
import { SelectedOptionContext } from "../components/SelectedOptionContext";
import PagesPanel from './../components/PagesPanel';
import CardData from '../components/CardData'
// import fetchData from "../components/FetchCardData";

function SearchData() {
    const [searchedData, setSearchedData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [flag, setFlag] = useState(false)
    
    const { searchVal } = useContext(SelectedOptionContext)
    const { selectedOption } = useContext(SelectedOptionContext)

    useEffect(() => {
        const getSearchedData = async () => {
            setLoading(true)
            // const data = await fetchData(searchVal + selectedOption)
            const response = await fetch(`http://makeup-api.herokuapp.com/api/v1/products.json`);
            const data = await response.json();

            const filteredResult = data.filter((ele)=>{
                return(
                    ele.product_type?.toLowerCase().includes(searchVal.toLowerCase()) ||
                ele.name?.toLowerCase().includes(searchVal.toLowerCase()) || 
                ele.description?.toLowerCase().includes(searchVal.toLowerCase()) ||
                ele.brand?.toLowerCase().includes(searchVal.toLowerCase())
                );
            })

            console.log("filtered Data - ",filteredResult)
            // here is high to low sort
            if (selectedOption == "&price_greater_than=1") {
                filteredResult.sort((a, b) => b.price - a.price);
            }

            // here is low to high sort
            if (selectedOption == "&price_less_than=100&price_greater_than=1") {
                filteredResult.sort((a, b) => a.price - b.price);
            }

            console.log(data)
            setLoading(false)

            if(data.length > 0){
                setFlag(true)
                setSearchedData(filteredResult)
            }
            else{
                setFlag(false)
            }
        }

        getSearchedData()

    }, [searchVal, selectedOption])



    return (
        <div>

            <div style={{
                backgroundColor: "white",
                width: "100%",
                height: "50px",
                padding: "13px"
            }}>

                <div>
                    Home  &gt; <b> {searchVal} </b>
                </div>
            </div>

            <div className="mainContainer">
                <div id="sidePanel">
                    <PagesPanel />
                </div>

                {(loading) ?
                    <div style={{ margin: "20px", fontSize: "4vw", fontWeight: 500 }}> Loading... </div> : (flag) ? <CardData response={searchedData} /> : <h1 style={{ margin: "20px", fontSize: "4vw", fontWeight: 500 }}> Sorry, no results found. Please try searching with different data.</h1>}

            </div>

        </div>
    )
}

export default SearchData;