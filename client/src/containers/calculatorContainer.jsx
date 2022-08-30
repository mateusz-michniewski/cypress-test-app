import React from 'react';
import axios from 'axios';
import PrimeCalculator from '../components/calculator';
import './calculatorContainer.css';


export default class CalculatorContainer extends React.Component {
    state = {
        numbers: [],
        inputValue: 0
    };

    handleChange = (event) => {
        this.setState({ inputValue: event.target.value })
    }

    handleSubmit = (event) => {
        axios.get(`http://localhost:5000/${this.state.inputValue}`)
            .then(res => {
                const numbers = res.data;
                this.setState({ numbers });
            })
    }

    handleResetInputValue = (event) => {
        this.setState({ inputValue: 0 });
    }

    render() {
        return (
            <div className='main-container' >
                <div className='header-container' >
                    <h1>Prime Numbers Calculator</h1>
                </div>
                <PrimeCalculator
                    numbers={this.state.numbers}
                    inputValue={this.state.inputValue}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                /> 
            </div>
        )
    }
}



