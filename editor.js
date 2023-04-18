import React, { useState } from 'react';
import './index.css';

function TextEditor() {
  const [content, setContent] = useState('');
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isCentered, setIsCentered] = useState(false);
  const [isRightAligned, setIsRightAligned] = useState(false);
  const [isLeftAligned, setIsLeftAligned] = useState(false);
  const [isLowerCase, setIsLowerCase] = useState(false);
  const [isUpperCase, setIsUpperCase] = useState(false);

  const handleInputChange = (e) => {
    setContent(e.target.value);
  };

  const handleBoldClick = () => {
    setIsBold(!isBold);
  };

  const handleItalicClick = () => {
    setIsItalic(!isItalic);
  };

  const handleLowercaseClick = () => {
    setIsLowerCase(!isLowerCase);
  };

  const handleUppercaseClick = () => {
    setIsUpperCase(!isUpperCase);
  };

  const handleAlignCenterClick = () => {
    setIsCentered(!isCentered);
  };

  const handleAlignRightClick = () => {
    setIsRightAligned(!isRightAligned);
  };

  const handleAlignLeftClick = () => {
    setIsLeftAligned(!isLeftAligned);
  };

  const getStyle = () => {
    let style = {};
    if (isBold) {
      style.fontWeight = 'bold';
    }
    if (isItalic) {
      style.fontStyle = 'italic';
    }
    if (isCentered) {
      style.textAlign = 'center';
    }
    if (isRightAligned) {
      style.textAlign = 'right';
    }
    if (isLeftAligned) {
      style.textAlign = 'left';
    }
    if (isLowerCase) {
      return { ...style, textTransform: 'lowercase' };
    }
    if (isUpperCase) {
      return { ...style, textTransform: 'uppercase' };
    }
    return style;
  };

  return (
    <div className="App">
      <input
        type="text"
        className = "text-editor"
        value={content}
        onChange={handleInputChange}
        style={getStyle()}
      />
      <div className = "grid-container">
        <button className = "btn" onClick={handleBoldClick}>{isBold ? 'Unbold' : 'Bold'}</button>
        <button className = "btn" onClick={handleItalicClick}>
          {isItalic ? 'Unitalicize' : 'Italicize'}
        </button>
        <button className = "btn" onClick={handleLowercaseClick}>
          {isLowerCase ? 'Normal case' : 'Lowercase'}
        </button>
        <button className = "btn" onClick={handleUppercaseClick}>
          {isUpperCase ? 'Normal case' : 'Uppercase'}
        </button>
        <button className = "btn" onClick={handleAlignCenterClick}>
          {isCentered ? 'Uncenter' : 'Center'}
        </button>
        <button className = "btn" onClick={handleAlignRightClick}>
          {isRightAligned ? 'Unright align' : 'Right align'}
        </button>
        <button className = "btn" onClick={handleAlignLeftClick}>
          {isLeftAligned ? 'Unleft align' : 'Left align'}
        </button>
      </div>
    </div>
  );
}

export default TextEditor;