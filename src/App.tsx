import React from 'react';
import {BrowserRouter} from "react-router-dom";

import Routes from "./routes";
import Header from "./components/header";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes/>
        </BrowserRouter>
    );
}

export default App;
