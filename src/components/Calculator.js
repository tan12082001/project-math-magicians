import { useState } from 'react';
import calculate from '../logic/calculate';
import Tiles from './ButtonsUI';

const Calculator = () => {
  const [state, setState] = useState({ total: 0, next: null, operation: null });
  const clickEvent = (e) => {
    const TILEVALUE = e.target.innerText;
    const RESULT = calculate(state, TILEVALUE);
    setState(RESULT);
  };
  const { total, operation, next } = state;
  return (
    <div className="calculator-outer">
      <div className="calculator-input">
        <span>{total}</span>
        <span>{operation}</span>
        <span>{next}</span>
      </div>
      <Tiles handleClick={clickEvent} />
    </div>
  );
};

export default Calculator;
