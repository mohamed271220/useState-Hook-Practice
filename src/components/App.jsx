import React, { useState } from "react";

// console.log(time);

function App() {
  const time = new Date().toLocaleDateString();
  const [timer, setTimer] = useState(time);
  const setIt = () => setTimer(new Date().toLocaleTimeString());
  setInterval(setIt, 1000);
  return (
    <div className="container">
      <h1>{timer}</h1>
      <button onClick={setIt}>Get Time</button>
    </div>
  );
}

export default App;
