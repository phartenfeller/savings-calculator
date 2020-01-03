import React from 'react';
import './css/tailwind.css';
import Header from './components/Header';
import Calculator from './components/Calculator';

const App = () => {
  return (
    <div className="App text-center">
      <Header />
      <Calculator />
    </div>
  );
};

export default App;
