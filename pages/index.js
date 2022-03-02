import React, { useState } from 'react';
export default function Home() {
  const [textInput, setTextInput] = useState('');
  const [changedText, setChangedText] = useState('');
  const [textTransformation, setTextTransformation] = useState('none');
  const [caracterCount, setCaracterCount] = useState(0);
  // const [wordCount, setWordCount] = useState(0);

  const onCaps = (text) => {
    setTextTransformation('uppercase');
    setChangedText(text);
  };

  const onLower = (text) => {
    setTextTransformation('lowercase');
    setChangedText(text);
  };

  const capitalize = (text) => {
    setTextTransformation('capitalize');
    setChangedText(text);
  }

  // const wordCountTreated = (text) => {
  //   const textTrimed = text.trim();
  //   console.log(textTrimed);
    
  //   return textTrimed.length;
  // }

  const onTextInputChange = ({target: { value }}) => {
    setTextInput(value);
    setCaracterCount(value.length);
    // setWordCount(wordCountTreated(value));
  }

  const copytText = (text) => {
    const changedTextP = document.querySelector('.changed-text');
    navigator.clipboard.writeText(changedTextP.innerText);
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
          onChange={ onTextInputChange }
        />
      </label>
      <button onClick={() => onCaps(textInput)}>UpperCase</button>
      <button onClick={() => onLower(textInput)}>LowerCase</button>
      <button onClick={() => capitalize(textInput)}>Capitalize</button>
      <button onClick={() => copytText(changedText)}>Copiar texto</button>
      <p className="changed-text" style={{ textTransform: textTransformation} }>{changedText}</p>
      <p>
        {'Quantidade de caracteres '}
        {caracterCount}
      </p>
      {/* <p>
        {'Quantidade de palavras '}
        {wordCount}
      </p> */}
    </div>
  );
}
