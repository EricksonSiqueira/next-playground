import React, { useState } from 'react';
export default function Home() {
  const [textInput, setTextInput] = useState('');

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

      <p>{textInput}</p>
    </div>
  );
}
