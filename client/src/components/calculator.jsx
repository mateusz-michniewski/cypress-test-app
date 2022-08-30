import React from 'react';
import './calculator.css'

const PrimeCalculator = ({ numbers, inputValue, handleSubmit, handleChange }) => {
    
    
  
    return (
        <div className='calculator-container' >
            <div className='input-wrapper' >
                <input
                    type='numbers'
                    placeholder='input a number'
                    name='name'
                    onChange={handleChange}
                    defaultValue=''
                    className='input'
                />
                <button className='button' onClick={handleSubmit} >Reveal Primes!</button>
                <h2>Number {inputValue} contains {numbers.length} prime { numbers.length === 1 ? 'number' : 'numbers'}</h2>
            </div>
            
            <div className="prime-number-wrapper"  >
                {numbers.map((prime, i) =>
                    <div className="prime-number" key={i} >{prime}</div>)}
            </div>
        </div>
    )
}

export default PrimeCalculator;