import React from 'react';
import PropTypes from 'prop-types';

// handleClick - prop from the parent component (Calculator)
const Tiles = ({ handleClick }) => (
  <div className="calculator-buttons">
    <button className="tiles" type="button" onClick={handleClick}>AC</button>
    <button className="tiles" type="button" onClick={handleClick}>+/-</button>
    <button className="tiles" type="button" onClick={handleClick}>%</button>
    <button className="tiles operations" type="button" onClick={handleClick}>÷</button>
    <button className="tiles" type="button" onClick={handleClick}>7</button>
    <button className="tiles" type="button" onClick={handleClick}>8</button>
    <button className="tiles" type="button" onClick={handleClick}>9</button>
    <button className="tiles operations" type="button" onClick={handleClick}>x</button>
    <button className="tiles" type="button" onClick={handleClick}>4</button>
    <button className="tiles" type="button" onClick={handleClick}>5</button>
    <button className="tiles" type="button" onClick={handleClick}>6</button>
    <button className="tiles operations" type="button" onClick={handleClick}>-</button>
    <button className="tiles" type="button" onClick={handleClick}>1</button>
    <button className="tiles" type="button" onClick={handleClick}>2</button>
    <button className="tiles" type="button" onClick={handleClick}>3</button>
    <button className="tiles operations" type="button" onClick={handleClick}>+</button>
    <button className="tiles" type="button" onClick={handleClick}>0</button>
    <button className="tiles" type="button" onClick={handleClick}>.</button>
    <button className="tiles operations" type="button" onClick={handleClick}>=</button>
  </div>
);

Tiles.propTypes = {
  handleClick: PropTypes.func.isRequired, // Validate that handleClick is a required function
};

export default Tiles;
