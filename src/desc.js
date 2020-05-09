import React from "react";
import "./style.css";
var classNames = require('classnames');

class Desc extends React.Component {
    render() {
        var desc = classNames({
            'car-desc-wrap': true,
            'active-desc': this.props.shouldBeActive,
        })
        return (
            <div className={desc}>
                <div className="close-button" onClick={this.props.closeDesc}>
                    <div id="line1"></div>
                    <div id="line2"></div>
                </div>
                <div id="car-desc">
                    <div id="car-desc-content">
                        <p id="car-desc-gen">Interior</p>
                        <h1 id="car-desc-header">{this.props.headline}</h1>
                        <p>{this.props.text}</p>
                    </div>
                    <div className="control-buttons">
                        <p id="previous" onClick={() => { this.props.changeActivePoint(-1) }}>Previous</p>
                        <p id="next" onClick={() => { this.props.changeActivePoint(1) }}>Next</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default Desc;