import React, { useState } from 'react';
export default function Home() {
  const [textInput, setTextInput] = useState('');
  const [changedText, setChangedText] = useState('');
  const [capitaze, setCapitalize] = useState(false);
  const [textTransformation, setTextTransformation] = useState('none');

  const onCaps = (text) => {
    setTextTransformation('uppercase');
    setChangedText(textInput);
  };

  const onLower = (text) => {
    setTextTransformation('lowercase');
    setChangedText(text);
  };

  const capitalize = (text) => {
    setTextTransformation('capitalize');
    setChangedText(text);
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
      <p style={{ textTransform: textTransformation} }>{changedText}</p>
    </div>
  );
}
