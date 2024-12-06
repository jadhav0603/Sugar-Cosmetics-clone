import "./MainLogin.css";
import { useRef, useState, useEffect } from "react";
// import {SelectedOptionContext} from './SelectedOptionContext'

function MainLogin() {
    const [input, setInput] = useState("");
    const [btnEnable, setBtnEnable] = useState(false);

    const [placeholder, setPlaceholder] = useState("+91XXXXXXXXXX");
    const [btn, setBtn] = useState("SEND ME OTP");
    const [inputHead, setInputHead] = useState("Enter Mobile Number");

    const inputRef = useRef(null);
    const btnRef = useRef(null)

    const [code, setCode] = useState(null)

    //const {login,setLogin} = useContext(SelectedOptionContext)

    function handleChange(e) {
        const value = e.target.value;
       
        if (btn === "SEND ME OTP") {
            if (/^\d*$/.test(value) && value.length <= 10) {
                setInput(value);
            }
            
            if (value.length === 10) {
                setBtnEnable(true);
            }

            // if(btnEnable){
            //     btnRef.current.style.backgroundColor="black"
            //     btnRef.current.style.color = "white"
            // }
            // else{
            //     btnRef.current.style.backgroundColor="rgb(246,246,244)"
            //     btnRef.current.style.color = "grey"
            // }

            if (value.length < 10) {
                setBtnEnable(false);
            }
        }

        if (btn === "LOGIN") {
            if (/^\d*$/.test(value) && value.length <= 4) {
                setInput(+value);
            }

            if (value.length == 4) {
                setBtnEnable(true);
            }

            if (value.length < 4) {
                setBtnEnable(false);
            }
        }
    }

    useEffect(() => {
        if (btnEnable) {
            btnRef.current.style.backgroundColor = "black";
            btnRef.current.style.color = "white";
        } else {
            btnRef.current.style.backgroundColor = "rgb(246,246,244)";
            btnRef.current.style.color = "grey";
        }
    }, [btnEnable])

    function handleSubmit(e) {
        e.preventDefault();

        let OTP = "";

        if (btn === "SEND ME OTP") {
            if (input.length !== 10) {
                alert("Enter a 10-digit mobile number");
                return;
            }

            OTP = Math.floor(Math.random() * 9000);

            if(OTP < 1000)
            {
                OTP= OTP+1000;
            }

            setCode(OTP);

            alert(
                OTP +
                " is your OTP for Sugar Cosmetic portal. it is valid for next 10 minutes. Don not share your OTP with anyone."
            );
        }

        setInput("");
        setBtnEnable(false);
        setInputHead("Enter Your OTP");
        setPlaceholder("Enter OTP");
        setBtn("LOGIN");

        console.log("Valid input mobile number:", input);

        console.log("otp 1- ", OTP);

        if (btn === "LOGIN") {
            let validOTP = +input
            
            if (validOTP !== code) {
                alert("Please Enter a currect OTP");
                return;
            }

            if (validOTP == code) {
                   //window.location("/src/index.html")
                   //localStorage.setItem('flag',false);
                   window.open("/", "_blank");
            }  
        }
            
    }

    function handleBackBtn(){
        //localStorage.setItem('flag',true)
        localStorage.clear();
        window.open("/", "_blank");
    }

    return (
        <div id="container">
            <div id="loginContainer">
                <div id="leftDiv"></div>

                <div id="rightDiv">
                    <div id="backBtn">
                        <a
                            style={{ textDecoration: "none", color: "black" }}
                        >
                            <i className="fa-solid fa-arrow-left" onClick={handleBackBtn}></i>
                        </a>
                    </div>

                    <div id="loginContent">
                        <form onSubmit={handleSubmit}>
                            <h1>Hi!</h1>
                            <h5>Login/Sign Up Using Phone</h5>
                            <p id="mobileNoHead"> {inputHead} </p>

                            <input
                                ref={inputRef}
                                type="tel"
                                placeholder={placeholder}
                                onChange={handleChange}
                                value={input}
                                required
                            />

                            <p>
                                Registering for this site allows you to access your order status
                                and history. Just fill in the above fields, and we'll get a new
                                account set up for you in no time. We will only ask you for
                                information necessary to make the purchase process faster and
                                easier.
                            </p>
                            <input ref={btnRef} type="submit" value={btn} disabled={!btnEnable} />
                        </form>

                        <hr />

                        <div id="terms_condition">
                            <input type="checkbox" />
                            <p>
                                Get important updates on Whatsapp{" "}
                                <span>Terms and Conditions</span>
                            </p>
                        </div>
                        <p>
                            <b>
                                Need Help <span>Contact US</span>{" "}
                            </b>
                        </p>

                        <hr />

                        <p>
                            Get important updates on Whatsapp{" "}
                            <span>Terms and Conditions</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainLogin;
