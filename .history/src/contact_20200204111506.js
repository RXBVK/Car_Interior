import React from "react";
class Contact extends React.Component {
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };
    render() {
        return (
            <div id="contact-wrap">
                <div className="contact">
                    <h1>Kontakt</h1>
                    <div className="contact-info">
                        <div className="part">
                            <div className="contact-address">
                                <h3>Towarzystwo Opieki nad Zwierzętami w Polsce Schronisko dla Bezdomnych Zwierząt we Wrocławiu </h3>
                                <p>ul. Ślazowa 2</p>
                                <p>51-007 Wrocław</p>
                                <p>NIP 8992318978</p>
                                <p>KRS 0000154454</p>
                            </div>
                            <div className="contact-mail">
                                <p>biuro@schroniskowroclaw.pl</p>
                                <p>+48 71 362 56 74</p>
                                <p>+ 48 501 334 268 - kierowca pogotowia</p>
                            </div>
                        </div>
                        <div className="part">
                            <div className="contact-emergency">
                                <p><strong>Pogotowie działa od 8:00 do 22:00</strong></p>
                                <p>W godzinach nocnych kierowca zabiera tylko zwierzęta potrzebujące natychmiastowej pomocy (ranne)</p>
                            </div>
                            <div className="contact-hours">
                                <p><strong>Uwaga!</strong></p>
                                <p><strong>Od listopada 2017 r. zmiana:</strong></p>
                                <p>pon: 9:00 - 16:30</p>
                                <p>wt: 9:00 - 18:30</p>
                                <p>śr - pt: 9:00 - 16:30</p>
                                <p>sob - nd: 9:00 - 15:00</p>
                            </div>
                            <div className="contact-media">
                                <p>Kontakt dla mediów oraz w sprawie współpracy:
                            RZECZNIK SCHRONISKA  Aleksandra Cukier, e-mail: schronisko.ola@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div >
            </div>
        )
    }
}

export default Contact