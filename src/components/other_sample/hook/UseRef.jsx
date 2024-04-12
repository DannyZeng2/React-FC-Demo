import React, { useRef } from 'react';

const UseRef = () => {
  const inputRef = useRef();

  const handleClick = () => {
    alert(`${inputRef.current.scrollTop}`);
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Show Input Value</button>
    </div>
  );
};

export default UseRef;
