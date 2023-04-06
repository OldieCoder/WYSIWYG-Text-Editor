import React, { useState } from 'react';

function Toolbar() {
  const [text, setText] = useState('');

  function makeBold() {
    const selObj=window.getSelection();
    const selectedText = selObj.toString();
    const boldText = {selectedText};
    const newText = text.replace(selectedText, boldText);
    setText(newText);
  }


  function makeItalic() {
    const selObj=window.getSelection();
    const selectedText = selObj.toString();
    const italicizeText = <italic>{selectedText}</italic>;
    const newText = text.replace(selectedText, italicizeText);
    setText(newText);
  }
  

  return (
    <>
    <h3 className="header"> What You See Is What You Get Rich Text Editor</h3>
    <div>
      <textarea className="text-editor" value={text} onChange={(e) => setText(e.target.value)} />
      </div>
      <div>
      <button class="btn" onClick={makeBold}>Make Bold</button>
      <button class="btn" onClick={makeItalic}>Make Italic</button>
    </div>
    </>
  );
}

export default Toolbar;