import React from "react";
import "./bootstrap-style.css";
import Introduction from "./introduction";
import Process from "./process";
import Adopt from "./adopt";
import Footer from "./footer";
import Contact from "./contact";
import Title from "./title";

function MainPage() {
    return (
        <div id="mainPageWrap">
            <Introduction />
            <Title />
            <Process />
            <Title />
            <Adopt />
            <Title />
            <Contact />
            <Footer />
        </div>
    )
}

export default MainPage;