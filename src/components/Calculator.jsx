import React, { useState } from 'react';
import LabelInput from './LabelInput';

const Calculator = () => {
  const [startCapital, setStartCapital] = useState(0);
  const [monthSavings, setMonthSavings] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [years, setYears] = useState(0);
  const [result, setResult] = useState();

  const calcResult = () => {
    const capital = startCapital + (monthSavings * 12 * years);
    const res = (capital * interestRate).toFixed(2);
    setResult(res);
  }

  return (
    <form className="text-center">
      <LabelInput text="Starting Capital" value={startCapital} setter={setStartCapital} />
      <LabelInput text="Monthly Savings" value={monthSavings} setter={setMonthSavings} />
      <LabelInput text="Years" value={years} setter={setYears} />
      <LabelInput text="Interest Rate" value={interestRate} setter={setInterestRate} />
      <button type="button" className="rounded bg-indigo-700 py-2 px-4 text-lg font-bold text-white shadow my-4" onClick={() => calcResult()}>Calculate</button>
      <div className="text-lg py-2"> 
        <span>Result:</span>
        <span className="font-bold text-indigo-900 ml-2">{result}</span>
      </div>
    </form>
  );
};

export default Calculator;
