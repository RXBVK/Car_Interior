import React from "react";
import { labels } from "./labels";
class Process extends React.Component {
    render() {
        return (
            <div id="process-wrap">
                <div className="process">
                    <h1>{labels.process.h1}</h1>
                    <div className="process-steps">
                        {labels.process.cards.map(card => (
                            <div className={"steps-" + card.id} key={card.id}>
                                <h3>{card.title}</h3>
                                <p>{card.content}</p>
                                <i className={card.icon}></i>
                                <button>{card.buttonContent}</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}


export default Process