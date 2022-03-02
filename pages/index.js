import React, { useState } from 'react';
export default function Home() {
  const [textInput, setTextInput] = useState('');
  const [changedText, setChangedText] = useState('');

  const onCaps = (text) => {
    const capsText = text.toUpperCase();

    setChangedText(capsText);
  };

  const onLower = (text) => {
    const capsText = text.toLowerCase();

    setChangedText(capsText);
  };

  const capitalize = (text) => {
    const capitalizedText = text && text[0].toUpperCase() + text.slice(1);
    console.log(capitalizedText);

    setChangedText(capitalizedText);
  }

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
      <button onClick={() => capitalize(textInput)}>Capitalize</button>
      <p>{changedText}</p>
    </div>
  );
}
