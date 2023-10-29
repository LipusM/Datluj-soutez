const c = console.log.bind(document)

import React, { useState, useEffect } from 'react';
import Wordbox from '../Wordbox';
import wordList from '../../word-list';

import { NavLink } from 'react-router-dom';

import './style.scss'

const generateWord = (size) => {
    const sizeIndex = size === undefined
      ? Math.floor(Math.random() * wordList.length)
      : size - 3;
    
    if (sizeIndex < 0 || sizeIndex >= wordList.length) {
      return null;
    }
    
    const words = wordList[sizeIndex];
    const wordIndex = Math.floor(Math.random() * words.length);
    return words[wordIndex];
  };
  
  const Stage = () => {
    const [words, setWords] = useState(["jahoda", "klavesnice", "kolac"])

    const [evaluation, setEvaluation] = useState({
      mistakes: 0,
      writtenWords: 0
    })
    const {mistakes, writtenWords} = evaluation

    const handleFinish = () => {
      const copy = [...words]
      copy.splice(0,1) //Odstranění prvního elementu pole
      copy.splice(2, 0, generateWord().slice(0, 6)) //Generování nového elementu na poslední místo pole

      setWords(copy)
    }

    const onEvaluation = (mistake, word) => {
      setEvaluation({...evaluation, mistakes: mistakes + mistake, writtenWords: writtenWords + word})
    }
  
    return (
      <div className="stage-no-time">
        <div className="stage__mistakes">Chyb: {mistakes} | Napsaná slova: {writtenWords}</div>
        <div className="stage__words">
          {words.map((word, index) => <Wordbox key={word} word={word} onFinish={handleFinish} 
          active={index === 0 && true} evaluate={onEvaluation} firstWord={index === 0 ? "active-word" : "non-active-word"}/>)}
        </div>

        <nav id="nav-panel">
          <NavLink className="navigation" to="/hra/pravidla">Pravidla</NavLink>
        </nav>
      </div>
    );
  };
  
  export default Stage;