import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const lottoCount = Array.from(Array(45).keys()).map((num) => num + 1);
  const lotto = lottoCount
    .sort((a, b) => Math.random() - Math.random())
    .slice(0, 6);

  return (
    <div className='App'>
      <header className='App-header'>
        <ul className='un-style'>
          {lotto
            .sort((a, b) => a - b)
            .map((number) => {
              return <li id={number}>{number}</li>;
            })}
        </ul>
      </header>
    </div>
  );
}

export default App;
