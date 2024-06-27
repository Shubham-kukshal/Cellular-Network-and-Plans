import React, { useState, useEffect } from 'react';

const AutoCounter = ({targetNumber}) => {
  const [count, setCount] = useState(0);
 

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < targetNumber) {
        setCount(prevCount => prevCount + 1);
      } else {
        clearInterval(interval); 
      }
    }, 20);

    return () => clearInterval(interval); 
  }, [count, targetNumber]);

  return (
    <div className='counter'>
       {count}
    </div>
  );
};

export default AutoCounter;
