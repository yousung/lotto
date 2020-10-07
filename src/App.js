import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [lottos, setLoto] = useState([]);

  const randomLotto = () => {
    const lottoCount = Array.from(Array(45).keys()).map((num) => num + 1);
    const lotto = lottoCount
      .sort((a, b) => Math.random() - Math.random())
      .slice(0, 6);

    return lotto.sort((a, b) => a - b).join(', ');
  };

  const makeLotto = () => {
    const lotto = [randomLotto()];

    setLoto([...lottos, lotto]);
  };

  useEffect(() => {
    makeLotto();
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        <button onClick={makeLotto}>생성</button>
        <ul className='un-style'>
          {lottos.map((lotto, idx) => {
            return <li key={idx}>{lotto}</li>;
          })}
        </ul>
      </header>
    </div>
  );
}

export default App;
