import { useState } from 'react';
import calculate from '../logic/calculate';
import Tiles from './ButtonsUI';

const Calculator = () => {
  // Set Initial state
  const [state, setState] = useState({ total: 0, next: null, operation: null });
  const clickEvent = (e) => {
    const TILEVALUE = e.target.innerText;
    const RESULT = calculate(state, TILEVALUE);

    // Update the state with the calculate component operation result
    setState(RESULT);
  };
  // displaying the keys after the click event fired
  const { total, operation, next } = state;
  return (
    <div className="calculator-outer">
      <div className="calculator-input">
        <span>{total}</span>
        <span>{operation}</span>
        <span>{next}</span>
      </div>
      { /* give handleClick prop with clickEvent function as value */}
      <Tiles handleClick={clickEvent} />
    </div>
  );
};

export default Calculator;
