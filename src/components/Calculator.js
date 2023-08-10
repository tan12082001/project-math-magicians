import { useState } from 'react';
import calculate from '../logic/calculate';

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
      <div className="calculator-buttons">
        <button className="tiles" type="button" onClick={clickEvent}>AC</button>
        <button className="tiles" type="button" onClick={clickEvent}>+/-</button>
        <button className="tiles" type="button" onClick={clickEvent}>%</button>
        <button className="tiles operations" type="button" onClick={clickEvent}>÷</button>
        <button className="tiles" type="button" onClick={clickEvent}>7</button>
        <button className="tiles" type="button" onClick={clickEvent}>8</button>
        <button className="tiles" type="button" onClick={clickEvent}>9</button>
        <button className="tiles operations" type="button" onClick={clickEvent}>x</button>
        <button className="tiles" type="button" onClick={clickEvent}>4</button>
        <button className="tiles" type="button" onClick={clickEvent}>5</button>
        <button className="tiles" type="button" onClick={clickEvent}>6</button>
        <button className="tiles operations" type="button" onClick={clickEvent}>-</button>
        <button className="tiles" type="button" onClick={clickEvent}>1</button>
        <button className="tiles" type="button" onClick={clickEvent}>2</button>
        <button className="tiles" type="button" onClick={clickEvent}>3</button>
        <button className="tiles operations" type="button" onClick={clickEvent}>+</button>
        <button className="tiles" type="button" onClick={clickEvent}>0</button>
        <button className="tiles" type="button" onClick={clickEvent}>.</button>
        <button className="tiles operations" type="button" onClick={clickEvent}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
