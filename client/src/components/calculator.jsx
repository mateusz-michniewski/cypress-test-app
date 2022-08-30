import React from 'react';
import './calculator.css'

const PrimeCalculator = ({ numbers, inputValue, handleSubmit, handleChange, handleResetValue }) => {
    
    
  
    return (
        <div className='calculator-container' >
            <div className='input-wrapper' >
                { numbers.length > 0 ? 
                    <h2 className='heading' >Number {inputValue} contains {numbers.length} prime {numbers.length === 1 ? 'number' : 'numbers'}</h2>
                    : null
                }
                { numbers.length > 0 ? null : 
                    <input
                    type='number'
                    placeholder='input a number'
                    name='name'
                    onChange={handleChange}
                    defaultValue=''
                    className='input'
                    value={inputValue === 0 ? 'placeholder' : inputValue}
                    />
                    
                }
                { inputValue === 0 ? null :
                    <button
                        className='button'
                        onClick={numbers.length > 0 ? handleResetValue : handleSubmit}
                    >{numbers.length > 0 ? "Reset Primes!" : "Reveal Primes!"}
                    </button>
                }
            </div>
            
            <div className="prime-number-wrapper"  >
                {numbers.map((prime, i) =>
                    <div className="prime-number" key={i} >{prime}</div>)}
            </div>
        </div>
    )
}

export default PrimeCalculator;