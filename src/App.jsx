import { useState } from 'react';

export default function App() {
  const [clicked, setClicked] = useState(false);

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Black Cat Data</h1>
      <p>Advocating Data Integrity & Accuracy</p>
      <button onClick={() => setClicked(true)}>
        Click Me
      </button>
      {clicked && <p>Thanks for clicking! 🐾</p>}
    </div>
  );
}
