import React from 'react';
import {useState,useEffect,useContext} from "react"
import PagesPanel from "../components/PagesPanel"
import CardData from "../components/CardData"
import "../components/CardData.css"
import fetchData from '../components/FetchCardData';
import face from '../images/pagesUnder/face.jpg'
import {SelectedOptionContext} from '../components/SelectedOptionContext'

function Face() {

  const [FaceData, setFaceData] = useState([])
  const [loading, setLoading] = useState(true);

  const [flag, setFlag] = useState(false)

  const {selectedOption} = useContext(SelectedOptionContext)
  
useEffect(()=>{
  const getFaceData = async ()=>{
    setLoading(true)
    let value = `Blush${selectedOption}`
    console.log("value = "+value)
    const data = await fetchData(value)
    
    // here is high to low sort
    if(selectedOption == "&price_greater_than=1")
      {
        data.sort((a, b) => b.price - a.price);
      }

    // here is low to high sort
    if(selectedOption == "&price_less_than=100&price_greater_than=1")
      {
        data.sort((a, b) => a.price - b.price);
      }

    console.log(data)
    setLoading(false);
    if(data.length > 0)
    {
      setFlag(true)
      setFaceData(data)
    }
    else{
      setFlag(false)
    }
  }

   getFaceData() 
},[selectedOption])

return (
  <div>
    <div style={{display:"flex", justifyContent:"center"}}>
      <img src={face} style={{height:"20vw"}}/>
    </div>

    <div style={{
      backgroundColor:"white",
      width:"100%",
      height:"50px",
      padding:"13px"
    }}> 
    
    <div>
      Home  &gt; <b> Face </b> 
    </div>
    </div>
    
    <div className="mainContainer">
      <div id="sidePanel">
        <PagesPanel />
      </div>

      {(loading) ?
          <div style={{margin:"20px", fontSize:"4vw", fontWeight:500}}> Loading... </div> : (flag) ? <CardData response={FaceData} /> : <h1 style={{margin:"20px", fontSize:"4vw", fontWeight:500}}> Result Not Available, Please Search another data</h1>}
        
    </div>
  
  </div>
);
}

export default Face;