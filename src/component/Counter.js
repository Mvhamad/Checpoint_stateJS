import { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
    setCount(seconds => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
    
  }, []);

  return (
    <div className="time">
      <h1> {count} Seconds </h1>
    </div>
  );
}

export default Counter