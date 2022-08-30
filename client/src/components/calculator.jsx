import React from 'react';

const PrimeCalculator = ({ numbers, inputValue, handleSubmit, handleChange }) => {
    return (
        <div>
            <input
                type='numbers'
                name='name'
                onChange={handleChange}
                defaultValue=''
            />
            <button onClick={handleSubmit} >Reveal Prime numbers</button>
            <div className="prime-number-wrapper"  >
                {numbers.map((prime, i) =>
                    <p className="prime-number" key={i} >{prime}</p>)}
            </div>
        </div>
    )
}

export default PrimeCalculator;