import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import GlobalApp from "./0-GlobalApp";
import Header from "./1-Header";
import Main from "./2-Main";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
    <GlobalApp>
        <BrowserRouter>
            <Header />
            <Main />
        </BrowserRouter>
    </GlobalApp>,
);
