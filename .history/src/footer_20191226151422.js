import React from "react";
import { labels } from "./labels";

function Footer() {
    return (
        <div id="footer-wrap">
            <div className="footer">
                <img src="Images/logo.png" alt="logo" id="footer-logo"></img>
                <div className="footer-links">
                    {labels.footer.map(link =>
                        <span key={link}>{link}</span>
                    )}
                </div>
                <div className="sponsors-images">
                    <img src="Images/sponsorzy.png" alt="sponsor"></img>
                    <img src="Images/sponsorzy1.png" alt="sponsor"></img>
                    <img src="Images/sponsorzy2.png" alt="sponsor"></img>
                    <img src="Images/sponsorzy3.png" alt="sponsor"></img>
                </div>
            </div>
        </div>
    )
}

export default Footer