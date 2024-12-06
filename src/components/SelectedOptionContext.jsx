import { useState, useEffect, createContext } from "react";
import BagData from './BagData';

export const SelectedOptionContext = createContext();

export const SelectedOptionProvider = ({ children }) => {
    const [selectedOption, setSelectedOption] = useState("");
    const [login, setLogin] = useState("Login/Register");
    const [searchVal, setSearchVal] = useState("");
    const [favData, setFavData] = useState([]);
    const [BagData, setBagData] = useState([])

    // Load favData from localStorage on mount
    useEffect(() => {
        const storedFavData = JSON.parse(localStorage.getItem("favData")) || [];
        setFavData(storedFavData);

        const storedBagData = JSON.parse(localStorage.getItem("BagData")) || [];
        setBagData(storedBagData)
    }, []);

    // Save favData to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem("favData", JSON.stringify(favData));
        localStorage.setItem("BagData", JSON.stringify(BagData));
    }, [favData, BagData]);

    return (
        <SelectedOptionContext.Provider
            value={{ selectedOption, setSelectedOption, login, setLogin, searchVal, setSearchVal, favData, setFavData, BagData, setBagData }}
        >
            {children}
        </SelectedOptionContext.Provider>
    );
};