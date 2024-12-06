import "./Footer.css"
import sugarLogo from "../images/logo/Footer_sugar_icon.svg"
import playStore from "../images/logo/playstore.png";
import appleStore from "../images/logo/apple-store.png"

function Footer() {
    return (
        <div id="footerContainer">

            <div id="subscribeSearch">
                <div id="subscribeHeading">
                <div className="pinkDiv"></div>
                    <h1> LET'S STAY IN TOUCH</h1>
                <div className="pinkDiv"></div>
                </div>
                <p>Get the latest beauty tips straight to your inbox. Can't wait to connect !</p>
                <div id="subscribeInput">
                    <input
                        type="text"
                        id="searchInput"
                        placeholder='Enter Email'
                    />
                    <button
                        type="button"
                        id="searchBtn"
                        style={{
                            display: "flex",
                            alignItems: "center",
                            flexWrap: "nowrap",
                        }}>
                        SUBSCRIBE
                    </button>
                </div>
            </div>


            <div id="SugarAbout">
                <div id="sugarLogoBorderDiv">
                    <img src={sugarLogo} />
                </div>
            </div>

                <div id="contactUsIcons">
                    <div> <i className="fa-brands fa-facebook-f"></i></div>
                    <div><i className="fa-brands fa-tumblr"></i> </div>
                    <div> <i className="fa-brands fa-youtube"></i> </div>
                    <div> <i className="fa-brands fa-twitter"></i> </div>
                    <div> <i className="fa-brands fa-instagram"></i> </div>
                    <div> <i className="fa-solid fa-envelope"></i> </div>
                    <div> <i className="fa-brands fa-pinterest"></i> </div>
                </div>
            
                <hr></hr>
                    <ul>
                        <li>Stores</li>
                        <li>Elite</li>
                        <li>Terms & Conditions</li>
                        <li>Returns</li>
                        <li>FAQs</li>
                        <li>About </li>
                    </ul>
                <hr></hr>
                
                    <h2>GET IN TOUCH</h2>
                
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Call us at</th>
                                <th>Support</th>
                                <th>Carrers</th>
                                <th>Press & Media</th>
                                <th>Influencer Collab</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr id="contact_joinUs">
                                <td>1800-209-9933</td>
                                <td> hello@sugarcosmetics.com </td>
                                <td> We're hiring!</td>
                                <td>pr@sugarcosmetics.com</td>
                                <td>Join Us</td>
                            </tr>
                            <tr>
                                <td>
                                    Monday to Friday: 09:00 AM - 09:00 PM <br/>
                                    Saturday: 09:00 AM - 07:00 PM 
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            <hr></hr>

                <div id="playstoreApplestore">
                    <div>
                        <h2><b> GET THE NEW SUGAR APP TODAY! </b> </h2>
                        <p style={{color:"#969696"}}>Tap into a better shopping experience.</p>
                    </div>
                    
                    <img src={playStore} />
                    <img src={appleStore} />

                </div>

            <hr id= "lasthr"></hr>

                <p>Copyright © 2024 SUGAR Cosmetics. All rights reserved to Vijay Jadhav.</p>

        </div>
    )
}

export default Footer