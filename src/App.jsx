import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1>Welcome to My React App</h1>
      <p>Yeh mera pehla interactive React project hai.</p>
      
      <div className="card">
        <button onClick={() => setCount(count + 1)}>
          Count is: {count}
        </button>
      </div>
    </div>
  );
}

export default App;