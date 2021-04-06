// https://reactjs.org/docs/testing-recipes.html#rendering
import React, { useState } from "react";

export default function Button(props) {
  const [buttonColor, setButtonColor] = useState('red');
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';
  return (
    <button 
      style={{backgroundColor: buttonColor}}
      onClick={() => setButtonColor(newButtonColor)}>
        Change to {newButtonColor} 
    </button>
  );
}