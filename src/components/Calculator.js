import Tiles from './ButtonsUI';

const Calculator = () => (
  <div className="calculator-outer">
    <div className="calculator-input">
      <input type="text" placeholder="0" id="variable" required />
    </div>
    <Tiles />
  </div>
);

export default Calculator;
