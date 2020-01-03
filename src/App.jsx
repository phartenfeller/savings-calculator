import React from 'react';
import './css/tailwind.css';

const App = () => {
  return (
    <div className="App text-center">
      <header className="App-header">
        <p className="text-green-500 text-3xl font-bold mt-16">
          Edit src/App.js and save to reload.
        </p>
        <div className="text-gray-200 text-lg pt-16">
          <a
            className="block hover:text-gray-500"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <a
            className="block mt-8 hover:text-gray-500"
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn TailwindCSS
          </a>
        </div>
      </header>
    </div>
  );
};

export default App;
