import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            step: 1,
            location: '',
            area: '',
            parkingInfo: '',
            cuisine: '',
            kitchenType: '',
            fixedCapital: '',
            variableCapital: '',
            franchiseInfo: '',
            showConfirmation: false,
        };
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    nextStep = () => {
        this.setState((prevState) => ({
            step: prevState.step + 1,
        }));
    };

    prevStep = () => {
        this.setState((prevState) => ({
            step: prevState.step - 1,
        }));
    };

    submitForm = () => {
        this.setState({ showConfirmation: true });
    };

    handleLogout = () => {
        localStorage.clear();
        window.location.href = '/';
        console.log('User logged out');
    };

    render() {
        const {
            step,
            location,
            area,
            parkingInfo,
            cuisine,
            kitchenType,
            fixedCapital,
            variableCapital,
            franchiseInfo,
            showConfirmation,
        } = this.state;

        if (showConfirmation) {
            return (
                <div className='confirmation'>
                    <h1 className='hHeader'>Confirmation</h1>
                    <p>Location: {location}</p>
                    <p>Area: {area}</p>
                    <p>Parking Info: {parkingInfo}</p>
                    <p>Cuisine: {cuisine}</p>
                    <p>Kitchen Type: {kitchenType}</p>
                    <p>Fixed Capital: {fixedCapital}</p>
                    <p>Variable Capital: {variableCapital}</p>
                    <p>Franchise Info: {franchiseInfo}</p>
                    <button className='pButton' onClick={this.prevStep}>Previous</button>
                    <button className='logoutButton' onClick={this.handleLogout}>Logout</button>
                </div>
            );
        }

        switch (step) {
            case 1:
                return (
                    <div className='locInfo'>
                        <h1 className='hHeader'>Location</h1>
                        <div className='input'>
                            <input
                                type="text"
                                name="location"
                                placeholder="Location"
                                value={location}
                                onChange={this.handleChange}
                            />
                        </div>
                        <br />
                        <button className='nButton' onClick={this.nextStep}>Next</button>
                    </div>
                );

            case 2:
                return (
                    <div className='areaInfo'>
                        <h1 className='hHeader'>Area and Parking Info</h1>
                        <div className="inputs">
                            <div className="input">
                                <input
                                    type="text"
                                    name="area"
                                    placeholder="Area"
                                    value={area}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="input">
                                <input
                                    type="text"
                                    name="parkingInfo"
                                    placeholder="Parking Info"
                                    value={parkingInfo}
                                    onChange={this.handleChange}
                                />
                            </div>

                        </div>
                        <br />
                        <button className='pButton' onClick={this.prevStep}>Previous</button>
                        <button className='nButton' onClick={this.nextStep}>Next</button>
                    </div>
                );

            case 3:
                return (
                    <div className='cInfo'>
                        <h1 className='hHeader'>Cuisine and Kitchen Type</h1>
                        <div className="inputs">
                            <div className="input">
                                <input
                                    type="text"
                                    name="cuisine"
                                    placeholder="Cuisine"
                                    value={cuisine}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="input">
                                <input
                                    type="text"
                                    name="kitchenType"
                                    placeholder="Kitchen Type"
                                    value={kitchenType}
                                    onChange={this.handleChange}
                                />
                            </div>

                        </div>
                        <br />
                        <button className='pButton' onClick={this.prevStep}>Previous</button>
                        <button className='nButton' onClick={this.nextStep}>Next</button>
                    </div>
                );

            case 4:
                return (
                    <div className='capInfo'>
                        <h1 className='hHeader'>Capital and Franchise Info</h1>
                        <div className="inputs">
                            <div className="input">
                                <input
                                    type="text"
                                    name="fixedCapital"
                                    placeholder="Fixed Capital"
                                    value={fixedCapital}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="input">
                                <input
                                    type="text"
                                    name="variableCapital"
                                    placeholder="Variable Capital"
                                    value={variableCapital}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="input">
                                <input
                                    type="text"
                                    name="franchiseInfo"
                                    placeholder="Franchise Info"
                                    value={franchiseInfo}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <br />
                        <button className='pButton' onClick={this.prevStep}>Previous</button>
                        <button className='nButton' onClick={this.submitForm}>Submit</button>
                    </div>
                );

            default:
                return null;
        }
    }
}

export default Form;