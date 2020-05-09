import React from "react";
import "./style.css";
import Desc from "./desc";
import { labels } from "./labels";
var classNames = require('classnames');

class ImageClickInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            descHeadline: labels.defHeadline,
            descText: labels.defDesc,
            openedDesc: -1,
            shouldBeActive: false,
        }
    }
    changeActivePoint = (direction) => {
        const { points } = this.props;
        let properId = this.state.openedDesc + direction;
        const noOfPts = points.length;
        if (properId < 0) {
            properId = noOfPts - 1;
        } else if (properId > noOfPts - 1) {
            properId = 0;
        }
        this.setState({
            descHeadline: points[properId].fields.headline,
            descText: points[properId].fields.description,
            openedDesc: properId,
            shouldBeActive: true,
        })
    }
    closeDesc = () => {
        this.setState({
            descHeadline: labels.defHeadline,
            descText: labels.defDesc,
            openedDesc: -1,
            shouldBeActive: false,
        })
    }
    render() {
        var carImageWrap = classNames({
            'car-image-points-wrap': true,
            'active': this.state.shouldBeActive,
        })
        return (
            <div className="section-wrap">
                <div className="image-desc-wrap">
                    <div className="car-image">
                        <img src={this.props.image} alt="lexus-interior" id="car-background" draggable="false" />
                        <div className={carImageWrap}>
                            {this.props.points.map((point, index) =>
                                <div className="car-image-point-wrap" key={`point-wrap ${index}`}>
                                    <p
                                        className={`point-title ${index === this.state.openedDesc ? 'active-point-title' : ''}`}
                                        key={`title ${index}`}
                                        style={{
                                            top: point.fields.coords.split('x')[0],
                                            left: point.fields.coords.split('x')[1],
                                        }}
                                    >{point.fields.headline}</p>
                                    <span className={`car-image-point ${index === this.state.openedDesc ? 'active-point' : ''}`}
                                        key={`point ${index}`}
                                        onClick={(e) => this.setState({
                                            descHeadline: point.fields.headline,
                                            descText: point.fields.description,
                                            openedDesc: index,
                                            shouldBeActive: true,
                                        })}
                                        style={{
                                            top: point.fields.coords.split('x')[0],
                                            left: point.fields.coords.split('x')[1]
                                        }}
                                    >
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>
                    <Desc
                        headline={this.state.descHeadline}
                        text={this.state.descText}
                        openedDesc={this.state.openedDesc}
                        changeActivePoint={this.changeActivePoint}
                        shouldBeActive={this.state.shouldBeActive}
                        closeDesc={this.closeDesc}
                    />
                </div>
            </div>
        )
    }
}
export default ImageClickInfo;