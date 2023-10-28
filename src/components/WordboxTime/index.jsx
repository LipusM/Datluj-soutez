const c = console.log.bind(document)

import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import './style.scss';

//Jednotlivá props
//word: Samotné slovo, které je vypsáno
//onFinish: Po napsání prvního slova se odstraní a na konec se přidá další
//active: Aby bylo pouze první slovo aktivní a tím pádem šlo psát
//evaluate: počítá chyby
//firstWord: zvýrazňuje první slovo
//timeLeft: zbývající čas hry

const WordboxTime = ({ word, onFinish, active, evaluate, firstWord, timeLeft}) => {

  const [lettersLeft, setLettersLeft] = useState(word)
  const [mistake, setMistake] = useState(false)

  //Fce smazavající písemna a nahrazující slovo po jeho napsání
  const handleWord = (e) => {
    if(active){
      if(e.key === lettersLeft){
        onFinish()
        evaluate(0, 1) //Počet napsaných slov se zvýšil o +1
  
        active = true
      }
      else if(e.key === lettersLeft[0]){
        setLettersLeft(prev => prev.slice(1))
        setMistake(false)
  
        active = true
      } else {
        setMistake(true)
  
        active = false
        evaluate(1, 0) //Počet chyb se zvýšil o +1
      }
    }
  }
  
  /**********Spouštení fce handleWord**********/
  useEffect(() => {
    if(active && timeLeft > 0){
      document.addEventListener("keyup", handleWord)
      
      return () => document.removeEventListener("keyup", handleWord) 
    }

    if(timeLeft === 0){ //Zbývající čas = 0, tak se deaktivuje možnost psaní
      setMistake(false)
    }

  }, [lettersLeft, active, evaluate, timeLeft])
  


  return (
    <div className={classnames("wordbox", firstWord, {"wordbox--mistake": mistake})} >
      {lettersLeft}
    </div>
  )

}

export default WordboxTime;