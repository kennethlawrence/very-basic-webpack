/* Component spec lives alongside code */
import Calculator from './component.js';
const calculator = new Calculator();

describe('Calculator Component', () => {
  it('should add two variables', () => {
    expect(calculator.add(1, 8)).toEqual(9);
  });

  it('should subtract two variable', () => {
    expect(calculator.subtract(5, 1)).toEqual(4);
  });

  it('should multiply two variables', () => {
    expect(calculator.multiply(2, 4)).toEqual(8);
  });

  it('should divide two variables', () => {
    expect(calculator.divide(10, 2)).toEqual(5);
  });
});
