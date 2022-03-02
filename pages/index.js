import React, { useState } from 'react';
export default function Home() {
  const [textInput, setTextInput] = useState('');

  const onCaps = (text) => {
    const capsText = text.toUpperCase();

    setTextInput(capsText);
  };

  const onLower = (text) => {
    const capsText = text.toLowerCase();

    setTextInput(capsText);
  };

  return (
    <div>
      <h1>Converta seus textos</h1>
      <label htmlFor="textInput">
        Insira seu texto:
        <textarea 
          type="text" 
          id="textInput"
          value={ textInput }
          onChange={ ({ target }) => setTextInput(target.value) }
        />
      </label>
      <button onClick={() => onCaps(textInput)}>UpperCase</button>
      <button onClick={() => onLower(textInput)}>LowerCase</button>
      <p>{textInput}</p>
    </div>
  );
}
