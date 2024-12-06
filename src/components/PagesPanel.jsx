import './PagePanel.css'
import { useState, useContext, useEffect } from "react";
import { SelectedOptionContext } from './SelectedOptionContext';


function PagesPanel() {
    const { selectedOption, setSelectedOption } = useContext(SelectedOptionContext)

    useEffect(()=>{
        setSelectedOption("")
    },[])

    const [toggleKey1, setToggleKey1] = useState(false)
    const [toggleKey2, setToggleKey2] = useState(false)
    const [toggleKey3, setToggleKey3] = useState(false)
    const [toggleKey4, setToggleKey4] = useState(false)
    const [toggleKey5, setToggleKey5] = useState(false)
    const [toggleKey6, setToggleKey6] = useState(false)
    const [toggleKey7, setToggleKey7] = useState(false)
    const [toggleKey8, setToggleKey8] = useState(false)
    const [toggleKey9, setToggleKey9] = useState(false)
    const [toggleKey10, setToggleKey10] = useState(false)
    const [toggleKey11, setToggleKey11] = useState(false)
    const [toggleKey12, setToggleKey12] = useState(false)
    const [toggleKey13, setToggleKey13] = useState(false)

 
    const handleChange = (e) => {
        let newValue = e.target.value
        setSelectedOption(newValue)
    }
    console.log("pagepanel - " + selectedOption)

    function handleToggle1() {
        setToggleKey1(!toggleKey1)
        setToggleKey2(false)
        setToggleKey3(false)
        setToggleKey4(false)
        setToggleKey5(false)
        setToggleKey6(false)
        setToggleKey7(false)
        setToggleKey8(false)
        setToggleKey9(false)
        setToggleKey10(false)
        setToggleKey11(false)
        setToggleKey12(false)
        setToggleKey13(false)
    }

    function handleToggle2() {
        setToggleKey2(!toggleKey2)
        setToggleKey1(false)
        setToggleKey3(false)
        setToggleKey4(false)
        setToggleKey5(false)
        setToggleKey6(false)
        setToggleKey7(false)
        setToggleKey8(false)
        setToggleKey9(false)
        setToggleKey10(false)
        setToggleKey11(false)
        setToggleKey12(false)
        setToggleKey13(false)
    }

    function handleToggle3() {
        setToggleKey3(!toggleKey3)
        setToggleKey2(false)
        setToggleKey1(false)
        setToggleKey4(false)
        setToggleKey5(false)
        setToggleKey6(false)
        setToggleKey7(false)
        setToggleKey8(false)
        setToggleKey9(false)
        setToggleKey10(false)
        setToggleKey11(false)
        setToggleKey12(false)
        setToggleKey13(false)
    }

    function handleToggle4() {
        setToggleKey4(!toggleKey4)
        setToggleKey2(false)
        setToggleKey3(false)
        setToggleKey1(false)
        setToggleKey5(false)
        setToggleKey6(false)
        setToggleKey7(false)
        setToggleKey8(false)
        setToggleKey9(false)
        setToggleKey10(false)
        setToggleKey11(false)
        setToggleKey12(false)
        setToggleKey13(false)
    }

    function handleToggle5() {
        setToggleKey5(!toggleKey5)
        setToggleKey2(false)
        setToggleKey3(false)
        setToggleKey4(false)
        setToggleKey1(false)
        setToggleKey6(false)
        setToggleKey7(false)
        setToggleKey8(false)
        setToggleKey9(false)
        setToggleKey10(false)
        setToggleKey11(false)
        setToggleKey12(false)
        setToggleKey13(false)
    }

    function handleToggle6() {
        setToggleKey6(!toggleKey6)
        setToggleKey2(false)
        setToggleKey3(false)
        setToggleKey4(false)
        setToggleKey5(false)
        setToggleKey1(false)
        setToggleKey7(false)
        setToggleKey8(false)
        setToggleKey9(false)
        setToggleKey10(false)
        setToggleKey11(false)
        setToggleKey12(false)
        setToggleKey13(false)
    }

    function handleToggle7() {
        setToggleKey7(!toggleKey7)
        setToggleKey2(false)
        setToggleKey3(false)
        setToggleKey4(false)
        setToggleKey5(false)
        setToggleKey6(false)
        setToggleKey1(false)
        setToggleKey8(false)
        setToggleKey9(false)
        setToggleKey10(false)
        setToggleKey11(false)
        setToggleKey12(false)
        setToggleKey13(false)
    }

    function handleToggle8() {
        setToggleKey8(!toggleKey8)
        setToggleKey2(false)
        setToggleKey3(false)
        setToggleKey4(false)
        setToggleKey5(false)
        setToggleKey6(false)
        setToggleKey7(false)
        setToggleKey1(false)
        setToggleKey9(false)
        setToggleKey10(false)
        setToggleKey11(false)
        setToggleKey12(false)
        setToggleKey13(false)
    }

    function handleToggle9() {
        setToggleKey9(!toggleKey9)
        setToggleKey2(false)
        setToggleKey3(false)
        setToggleKey4(false)
        setToggleKey5(false)
        setToggleKey6(false)
        setToggleKey7(false)
        setToggleKey8(false)
        setToggleKey1(false)
        setToggleKey10(false)
        setToggleKey11(false)
        setToggleKey12(false)
        setToggleKey13(false)
    }

    function handleToggle10() {
        setToggleKey10(!toggleKey10)
        setToggleKey2(false)
        setToggleKey3(false)
        setToggleKey4(false)
        setToggleKey5(false)
        setToggleKey6(false)
        setToggleKey7(false)
        setToggleKey8(false)
        setToggleKey9(false)
        setToggleKey1(false)
        setToggleKey11(false)
        setToggleKey12(false)
        setToggleKey13(false)
    }

    function handleToggle11() {
        setToggleKey11(!toggleKey11)
        setToggleKey2(false)
        setToggleKey3(false)
        setToggleKey4(false)
        setToggleKey5(false)
        setToggleKey6(false)
        setToggleKey7(false)
        setToggleKey8(false)
        setToggleKey9(false)
        setToggleKey10(false)
        setToggleKey1(false)
        setToggleKey12(false)
        setToggleKey13(false)
    }

    function handleToggle12() {
        setToggleKey12(!toggleKey12)
        setToggleKey2(false)
        setToggleKey3(false)
        setToggleKey4(false)
        setToggleKey5(false)
        setToggleKey6(false)
        setToggleKey7(false)
        setToggleKey8(false)
        setToggleKey9(false)
        setToggleKey10(false)
        setToggleKey11(false)
        setToggleKey1(false)
        setToggleKey13(false)
    }

    function handleToggle13() {
        setToggleKey13(!toggleKey13)
        setToggleKey2(false)
        setToggleKey3(false)
        setToggleKey4(false)
        setToggleKey5(false)
        setToggleKey6(false)
        setToggleKey7(false)
        setToggleKey8(false)
        setToggleKey9(false)
        setToggleKey10(false)
        setToggleKey11(false)
        setToggleKey12(false)
        setToggleKey1(false)
    }


    return (

        <>
            <div id="filterContainer">
                <div id="sortOptions">
                    <b>Sort By:</b>
                    <select onChange={handleChange} value={selectedOption} >
                    <option value="">Select Filter </option>
                        <option value="&price_greater_than=1">Price: High to Low </option>
                        <option value="&price_less_than=100&price_greater_than=1"> Price: Low to High </option>
                        <option value="&brand=clinique">Popularity: Customers Top Rated </option>
                        <option value="&brand=nyx" >Popularity: Bestsellers</option>
                    </select>
                </div>

                <div id="filters">

                    <ul>
                        <p>Filters</p>
                        <hr></hr>
                        <li>
                            <p onClick={handleToggle1}>Category <i className="fa-solid fa-chevron-down"></i> </p>
                            {(toggleKey1) && <div>
                                <li>
                                    <label>
                                        <input
                                            type="checkbox"
                                            value="&product_category=powder"
                                            checked={selectedOption === "&product_category=powder"}
                                            onChange={handleChange}
                                        />
                                        powder
                                    </label>
                                </li>

                                <li>
                                    <label>
                                        <input type="checkbox"
                                            value="&product_category=cream"
                                            checked={selectedOption === "&product_category=cream"}
                                            onChange={handleChange}
                                        />
                                        Cream
                                    </label>
                                </li>

                                <li>
                                    <label>
                                        <input type="checkbox"
                                            value="&product_category=pencil"
                                            checked={selectedOption === "&product_category=pencil"}
                                            onChange={handleChange}
                                        />
                                        Pencil
                                    </label>
                                </li>

                                <li>
                                    <label>
                                        <input type="checkbox"
                                            value="&product_category=liquid"
                                            checked={selectedOption === "&product_category=liquid"}
                                            onChange={handleChange}
                                        />
                                        liquid
                                    </label>
                                </li>

                            </div>}

                        </li>

                        <hr></hr>

                        <li >
                            <p onClick={handleToggle2}>Price <i className="fa-solid fa-chevron-down"></i> </p>
                            {(toggleKey2) && <div>
                                <li>
                                    <label>
                                        <input type="checkbox"
                                            value="&price_greater_than=0&price_less_than=10"
                                            checked={selectedOption === "&price_greater_than=0&price_less_than=10"}
                                            onChange={handleChange}
                                        />
                                        $0 - $10
                                    </label>
                                </li>

                                <li>
                                    <label>
                                        <input type="checkbox"
                                            value="&price_greater_than=10&price_less_than=20"
                                            checked={selectedOption === "&price_greater_than=10&price_less_than=20"}
                                            onChange={handleChange}
                                        />
                                        $10 - $20
                                    </label>
                                </li>

                                <li>
                                    <label>
                                        <input type="checkbox"
                                            value="&price_greater_than=20&price_less_than=30"
                                            checked={selectedOption === "&price_greater_than=20&price_less_than=30"}
                                            onChange={handleChange}
                                        />
                                        $20 - $30
                                    </label>
                                </li>

                                <li>
                                    <label>
                                        <input type="checkbox"
                                             value="&price_greater_than=30"
                                             checked={selectedOption === "&price_greater_than=30"}
                                             onChange={handleChange}
                                        />
                                        $30 +
                                    </label>
                                </li>
                            </div>}

                        </li>

                        <hr></hr>

                        <li >
                            <p onClick={handleToggle3}>Discount <i className="fa-solid fa-chevron-down"></i> </p>
                            {(toggleKey3) && <div>
                                <li>
                                    <label >
                                        <input type="checkbox" disabled />
                                        10% and Above
                                    </label>
                                </li>

                                <li>
                                    <label>
                                        <input type="checkbox" disabled/>
                                        20% and Above
                                    </label>
                                </li>

                                <li>
                                    <label>
                                        <input type="checkbox" disabled/>
                                        30% and Above
                                    </label>
                                </li>

                                <li>
                                    <label>
                                        <input type="checkbox" disabled/>
                                        40% and Above
                                    </label>
                                </li>
                            </div>}

                        </li>

                        <hr></hr>

                        <li >
                            <p onClick={handleToggle4}>Colour <i className="fa-solid fa-chevron-down"></i> </p>
                            {(toggleKey4) && <div>
                                <li>
                                    <label>
                                        <input type="checkbox" disabled/>
                                        <input type="color" value="#ff0000" style={{ width: "15px", height: "20px" }} />
                                        Red
                                    </label>
                                </li>
                            </div>}

                        </li>

                        <hr></hr>

                        <li>
                            <p onClick={handleToggle5}>Finish <i className="fa-solid fa-chevron-down"></i></p>
                            {(toggleKey5) && <div>
                                <li>
                                    <label>
                                        <input type="checkbox" 
                                        value="&product_tag=vegan"
                                        checked={selectedOption === "&product_tag=vegan"}
                                        onChange={handleChange}
                                        />
                                        Vegan
                                    </label>
                                </li>

                                <li>
                                    <label>
                                        <input type="checkbox" 
                                        value="&product_tag=organic"
                                        checked={selectedOption === "&product_tag=organic"}
                                        onChange={handleChange}
                                        />
                                        Organic
                                    </label>
                                </li>

                                <li>
                                    <label>
                                        <input type="checkbox" 
                                        value="&product_tag=canadian"
                                        checked={selectedOption === "&product_tag=canadian"}
                                        onChange={handleChange}
                                        />
                                        Canadian
                                    </label>
                                </li>

                                <li>
                                    <label>
                                        <input type="checkbox" 
                                        value="&product_tag=natural"
                                        checked={selectedOption === "&product_tag=natural"}
                                        onChange={handleChange}
                                        />
                                        Natural
                                    </label>
                                </li>
                            </div>}
                        </li>

                        <hr></hr>

                        <li>
                            <p onClick={handleToggle6}>Formulation <i className="fa-solid fa-chevron-down"></i></p>
                            {(toggleKey6) && <div>
                                <li>
                                    <label>
                                        <input type="checkbox" 
                                        value="&price_greater_than=35"
                                        checked={selectedOption === "&price_greater_than=35"}
                                        onChange={handleChange}
                                        />
                                        Advanced
                                    </label>
                                </li>

                                <li>
                                    <label>
                                        <input type="checkbox" 
                                        value="&price_less_than=35"
                                        checked={selectedOption === "&price_less_than=35"}
                                        onChange={handleChange}
                                        />
                                        Beginner
                                    </label>
                                </li>

                            </div>}
                        </li>

                        <hr></hr>

                        <li >
                            <p onClick={handleToggle7}>  Ease of Use <i className="fa-solid fa-chevron-down"></i></p>
                            {(toggleKey7) && <div>
                                <li>
                                    <label>
                                        <input type="checkbox" 
                                        value="&product_tag=natural"
                                        checked={selectedOption === "&product_tag=natural"}
                                        onChange={handleChange}
                                        />
                                        Natural
                                    </label>
                                </li>

                                <li>
                                    <label>
                                        <input type="checkbox" 
                                        value="&product_tag=chemical free"
                                        checked={selectedOption === "&product_tag=chemical free"}
                                        onChange={handleChange}
                                        />
                                        Chemical-Free
                                    </label>
                                </li>

                                <li>
                                    <label>
                                        <input type="checkbox" 
                                        value="&product_tag=water free"
                                        checked={selectedOption === "&product_tag=water free"}
                                        onChange={handleChange}
                                        />
                                        Water Resistant
                                    </label>
                                </li>

                                <li>
                                    <label>
                                        <input type="checkbox" 
                                        value="&product_tag=purpicks"
                                        checked={selectedOption === "&product_tag=purpicks"}
                                        onChange={handleChange}/>
                                        Purpicks
                                    </label>
                                </li>
                            </div>}
                        </li >

                        <hr></hr>

                        <li >
                            <p onClick={handleToggle8}>  Pack Size <i className="fa-solid fa-chevron-down"></i></p>
                            {(toggleKey8) && <div>
                                <li>
                                    <label>
                                        <input type="checkbox" />
                                        Single
                                    </label>
                                </li>

                            </div>}
                        </li>

                        <hr></hr>

                        <li >
                            <p onClick={handleToggle9}>Skin Type <i className="fa-solid fa-chevron-down"></i></p>
                            {(toggleKey9) && <div>
                                <li>
                                    <label>
                                        <input type="checkbox" />
                                        All Skin Types
                                    </label>
                                </li>

                            </div>}
                        </li>

                        <hr></hr>

                        <li>
                            <p onClick={handleToggle10}> Claims<i className="fa-solid fa-chevron-down"></i></p>
                            {(toggleKey10) && <div>
                                <li>
                                    <label>
                                        <input type="checkbox" />
                                        Curelty Free
                                    </label>
                                </li>

                                <li>
                                    <label>
                                        <input type="checkbox" />
                                        Vegetarian
                                    </label>
                                </li>

                                <li>
                                    <label>
                                        <input type="checkbox" />
                                        natural
                                    </label>
                                </li>
                            </div>}
                        </li>

                        <hr></hr>

                        <li>
                            <p onClick={handleToggle11}>Occasion/Mood <i className="fa-solid fa-chevron-down"></i></p>
                            {(toggleKey11) && <div>
                                <li>
                                    <label>
                                        <input type="checkbox" />
                                        Bold
                                    </label>
                                </li>

                                <li>
                                    <label>
                                        <input type="checkbox" />
                                        Festive
                                    </label>
                                </li>

                                <li>
                                    <label>
                                        <input type="checkbox" />
                                        Party
                                    </label>
                                </li>

                                <li>
                                    <label>
                                        <input type="checkbox" />
                                        Everyday
                                    </label>
                                </li>

                                <li>
                                    <label>
                                        <input type="checkbox" />
                                        Work
                                    </label>
                                </li>
                            </div>}
                        </li>

                        <hr></hr>

                        <li>
                            <p onClick={handleToggle12}>By Usage <i className="fa-solid fa-chevron-down"></i></p>
                            {(toggleKey12) && <div>
                                <li>
                                    <label>
                                        <input type="checkbox" />
                                        Exfoliating
                                    </label>
                                </li>

                            </div>}
                        </li>

                        <hr></hr>

                        <li>
                            <p onClick={handleToggle13}> Hero Ingredient <i className="fa-solid fa-chevron-down"></i></p>
                            {(toggleKey13) && <div>
                                <li>
                                    <label>
                                        <input type="checkbox" />
                                        Vitamin A
                                    </label>
                                </li>

                                <li>
                                    <label>
                                        <input type="checkbox" />
                                        Vitamin B
                                    </label>
                                </li>

                                <li>
                                    <label>
                                        <input type="checkbox" />
                                        Vitamin C
                                    </label>
                                </li>

                                <li>
                                    <label>
                                        <input type="checkbox" />
                                        Vitamin E
                                    </label>
                                </li>
                            </div>}
                        </li>
                    </ul>

                </div>

            </div>
        </>
    );
}

export default PagesPanel;
