import React from "react";
import StepOne from "./stepone.js";
import StepTwo from "./steptwo.js";
import StepThree from "./stepthree.js";
class Adopt extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            myAnimals: [
                {
                    name: "Molly",
                    type: "cat",
                    age: 3,
                    imagePath: "/Shelter-updated/Images/1.jpg"
                },
                {
                    name: "Goofy",
                    type: "dog",
                    age: 7,
                    imagePath: "/Shelter-updated/Images/2.jpg"
                },
                {
                    name: "Benji",
                    type: "dog",
                    age: 6,
                    imagePath: "/Shelter-updated/Images/3.jpg"
                },
                {
                    name: "Boo",
                    type: "dog",
                    age: 9,
                    imagePath: "/Shelter-updated/Images/4.jpg"
                },
                {
                    name: "Max",
                    type: "dog",
                    age: 10,
                    imagePath: "/Shelter-updated/Images/5.jpg"
                },
                {
                    name: "Charlie",
                    type: "dog",
                    age: 13,
                    imagePath: "/Shelter-updated/Images/6.jpg"
                },
                {
                    name: "Barry",
                    type: "dog",
                    age: 7,
                    imagePath: "/Shelter-updated/Images/7.jpg"
                },
                {
                    name: "Ruby",
                    type: "cat",
                    age: 4,
                    imagePath: "/Shelter-updated/Images/8.jpg"
                },
                {
                    name: "Jack",
                    type: "cat",
                    age: 9,
                    imagePath: "/Shelter-updated/Images/9.jpg"
                },
                {
                    name: "Bailey",
                    type: "cat",
                    age: 3,
                    imagePath: "/Shelter-updated/Images/10.jpg"
                },
                {
                    name: "Toby",
                    type: "cat",
                    age: 1,
                    imagePath: "/Shelter-updated/Images/11.jpg"
                },
                {
                    name: "Chloe",
                    type: "cat",
                    age: 2,
                    imagePath: "/Shelter-updated/Images/12.jpg"
                }
            ],
            dogChecked: true,
            catChecked: true,
            searches: [],
            chosenAnimal: "",
            fromAge: 0,
            toAge: 14,
            fName: "",
            lastName: "",
            phoneNumber: "",
            city: "",
            address: "",
            arrival: ""
        };
    }
    componentWillMount() {
        if (this.state.searches.length === 0) {
            this.handleFilter();
        }
    }
    handleFilter() {
        this.state.myAnimals.forEach(animal => {
            const isProperType = (this.state.catChecked && animal.type === "cat") || (this.state.dogChecked && animal.type === "dog");
            const properFromAge = parseInt(this.state.fromAge);
            const properToAge = parseInt(this.state.toAge);
            const minAge = (isNaN(properFromAge) || properFromAge <= animal.age);
            const maxAge = (isNaN(properToAge) || properToAge >= animal.age);
            const isAgeRight = (properFromAge.length === 0 && properToAge.length === 0) || (minAge && maxAge);
            if (isProperType && isAgeRight) {
                this.setState(prevState => ({
                    searches: [...prevState.searches, animal]
                }))
            }
        });
    }
    handleAnimalName = (event) => {
        this.setState({
            chosenAnimal: event.target.id
        })
    }
    handleInputChange = async (event) => {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        if (target.type === "checkbox") {
            if (name === "catChecked") {
                await this.setState({
                    catChecked: !this.state.catChecked
                });
            }
            else {
                await this.setState({
                    dogChecked: !this.state.dogChecked
                });
            }
        } else {
            await this.setState({
                [name]: value
            });
        }
        this.setState({ searches: [] });
        this.handleFilter();
    }
    render() {
        return (
            <div id="adopt-wrap">
                <div className="adopt">
                    <div className="adopt-header">
                        <h1>Adopcja online</h1>
                        <h2>w trzech krokach.</h2>
                    </div>
                    <div className="adopt-steps-wrap">
                        <div className="steps-buttons">
                            <button data-target="#carouselExampleIndicators" data-slide-to="0" className="active">Krok I</button>
                            <button data-target="#carouselExampleIndicators" data-slide-to="1">Krok II</button>
                            <button data-target="#carouselExampleIndicators" data-slide-to="2">Krok III</button>
                        </div>
                        <div className="adopt-steps">
                            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" data-interval="false">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <StepOne handleInputChange={this.handleInputChange}
                                            handleAnimalName={this.handleAnimalName}
                                            handleFilter={this.handleFilter}
                                            dogChecked={this.state.dogChecked}
                                            catChecked={this.state.catChecked}
                                            fromAge={this.state.fromAge}
                                            toAge={this.state.toAge}
                                            searches={this.state.searches}
                                            myAnimals={this.state.myAnimals}
                                            chosenAnimal={this.state.chosenAnimal}
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <StepTwo
                                            handleInputChange={this.handleInputChange}
                                            handleFilter={this.handleFilter}
                                            supposedAge={this.state.supposedAge}
                                            fName={this.state.fName}
                                            lastName={this.state.lastName}
                                            phoneNumber={this.state.phoneNumber}
                                            city={this.state.city}
                                            address={this.state.address}
                                            arrival={this.state.arrival}
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <StepThree
                                            chosenAnimal={this.state.chosenAnimal}
                                            fName={this.state.fName}
                                            lastName={this.state.lastName}
                                            phoneNumber={this.state.phoneNumber}
                                            city={this.state.city}
                                            address={this.state.address}
                                            arrival={this.state.arrival}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Adopt