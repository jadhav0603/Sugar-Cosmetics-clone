import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct import for ReactDOM
import { BrowserRouter } from 'react-router-dom'; // Correct import for BrowserRouter
import MainLogin from '../components/MainLogin';
import { SelectedOptionProvider } from '../components/SelectedOptionContext';


ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <SelectedOptionProvider>
            <MainLogin />
        </SelectedOptionProvider>
    </BrowserRouter>
);