import React from 'react';
import axios from 'axios';


export default class CalculatorContainer extends React.Component {
    state = {
        numbers: [],
        inputValue: 100
    };



    componentDidMount() {
        axios.get(`http://localhost:5000/${this.state.inputValue}`)
            .then(res => {
                console.log('this is the response:', res);
                console.log('this is res.data:', res.data);
                const numbers = res.data;
                this.setState({ numbers });
            })
    }



    render() {
        return (
            <div>
                
                <input type='text' name='name' value={this.state.inputValue} ></input>
                <button>Show prime numbers!</button>
                <p>this is the array with primes{this.state.numbers}</p>
            </div>
        )
    }
}



