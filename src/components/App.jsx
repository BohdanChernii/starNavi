import React, { useState, useEffect } from 'react';
import Square from './Square.jsx';
const App = () => {
  const [mode, setMode] = useState('');
  const [start, setStart] = useState(false);
  const [selectMode, setSelectMode] = useState(25);
  const [modes, setModes] = useState([]);

  useEffect(() => {
    fetch('https://demo1030918.mockable.io/')
      .then((response) => response.json())
      .then((result) => setModes(result));
  }, []);
  console.log(modes);

  const handleChange = (e) => {
    if (e.target.value === 'easy') {
      setSelectMode(modes.easyMode.field * modes.easyMode.field);
    }
    if (e.target.value === 'normal') {
      setSelectMode(modes.normalMode.field * modes.normalMode.field);
    }
    if (e.target.value === 'hard') {
      setSelectMode(modes.hardMode.field * modes.hardMode.field);
    }
    setMode(e.target.value);
  };
  const arr = Array.from({ length: selectMode });
  return (
    <div className="page">
      <select name="" id="" onChange={handleChange}>
        <option value="easy">easy</option>
        <option value="normal">normal</option>
        <option value="hard">hard</option>
      </select>
      <button className="button" onClick={() => setStart(!start)}>
        START
      </button>
      <div className="board" style={{ display: 'flex' }}>
        {arr.map((item, index) => (
          <Square key={index} start={start} mode={mode} />
        ))}
      </div>
    </div>
  );
};
export default App;
