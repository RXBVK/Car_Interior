import React from "react";
import "./bootstrap-style.css";
import Introduction from "./introduction";
import Process from "./process";
import Adopt from "./adopt";
import Footer from "./footer";
import Contact from "./contact";

function MainPage() {
    return (
        <div id="mainPageWrap">
            <Introduction />
            <Process />
            <Adopt />
            <Contact />
            <Footer />
        </div>
    )
}

export default MainPage;