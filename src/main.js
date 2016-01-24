/* This is the main entry point into the application */
import './main.scss';
import Calculator from './Component/component';

const calculator = new Calculator();
console.log('Application Started');
console.log(`Four plus five equals: ${calculator.add(4, 5)}`);
