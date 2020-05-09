import React from "react";
import { labels } from "./labels";
class StepOne extends React.Component {
    render() {
        return (
            <div className="step-one step">
                <h1>{labels.stepOne.chooseAnimal}</h1>
                <div className="step-content">
                    <div className="inputs">
                        <div className="input-dog">
                            <input
                                name="dogChecked"
                                type="checkbox"
                                id="dogInput"
                                checked={this.props.dogChecked}
                                onClick={this.props.handleInputChange}
                            />
                            <label htmlFor="dogInput">{labels.stepOne.dog}</label>
                            <p>{labels.stepOne.dog}</p>
                        </div>
                        <div className="input-cat">
                            <input
                                name="catChecked"
                                type="checkbox"
                                id="catInput"
                                checked={this.props.catChecked}
                                onClick={this.props.handleInputChange}
                            />
                            <label htmlFor="catInput">{labels.stepOne.cat}</label>
                            <p>{labels.stepOne.cat}</p>
                        </div>
                    </div>
                    <h3>{labels.stepOne.age}</h3>
                    <div className="choose-age">
                        <input type="number"
                            placeholder="OD"
                            name="fromAge"
                            value={this.props.fromAge}
                            onChange={this.props.handleInputChange}
                        >
                        </input>
                        -
                        <input type="number"
                            placeholder="DO"
                            name="toAge"
                            value={this.props.toAge}
                            onChange={this.props.handleInputChange}
                        >
                        </input>
                    </div>
                    <div className="images-wrap">
                        {this.props.searches.map(animal => (
                            <div className="animal" key={animal.name}>
                                <img
                                    src={animal.imagePath}
                                    alt="Animals"
                                ></img>
                                <div className="animal-info"
                                    id={animal.name}
                                    onClick={this.props.handleAnimalName}>
                                    <p>Imię: {animal.name}</p>
                                    <p>Wiek: {animal.age}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div >
        )
    }
}

export default StepOne