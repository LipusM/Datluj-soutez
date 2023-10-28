const c = console.log.bind(document)

import React, { useState, useEffect } from 'react';
import WordboxTime from '../WordboxTime';
import TimeShow from '../TimeShow';
import TimeButtons from '../TimeButtons';
import PlayerName from '../PlayerName';

import wordList from '../../word-list';

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
  
  /**********Fce nastavující slova, počítající chyby a počet nap. slov, generující nová slova**********/
  const StageTime = () => {
    //Iniciální nastavení slov
    const [words, setWords] = useState([generateWord().slice(0, 6), generateWord().slice(0, 6), generateWord().slice(0, 6)])

    //Ukládá počet chyb, napsaných slov, zbývající čas, zda-li tlačítka jsou/nejsou aktivní
    const [evaluation, setEvaluation] = useState({
      mistakes: 0,
      writtenWords: 0,
      remaningTime: 0,
      activeButton: true,
    })
    const {mistakes, writtenWords, remaningTime, activeButton} = evaluation

    //Zobrazení a skrytí boxu s jménem hráče. Při prvním načtení komponenty skryto,
    const [submission, setSubmission] = useState(false)

    //Hodnoty času, na základě kterých bude vznikat tlačítko
    const chosenTime = [
      {
        textTime: "1 minuta",
        realTime: 60,
        },
        {
        textTime: "2 minuty",
        realTime: 120,
        },
        {
        textTime: "3 minuty",
        realTime: 180,
        }
    ]

    //Stav pro jméno hráče
    const [playerValue, setPlayerValue] = useState("")

    //Stav pro statisku her
    const [stats, setStats] = useState([]);

    //Stav určující vybraný čas hry
    const [selectedTime, setSelectedTime] = useState(0);

    //Stav pro ukládání her, které se poté ukládájí do local storage
    const [displayedGames, setDisplayedGames] = useState([]);


    /***** Fce pro odstranění prvíno slova po napsání a generování nového na konec *****/
    const handleFinish = () => {
      const copy = [...words]
      copy.splice(0,1) //Odstranění prvního elementu pole
      copy.splice(2, 0, generateWord().slice(0, 6)) //Generování nového elementu na poslední místo pole

      setWords(copy)
    }

    /*****Fce vyhodnocující počet chyb a napsaných slov*****/
    const onEvaluation = (mistake, word) => {
      setEvaluation(prev => ({...prev, mistakes: mistakes + mistake, writtenWords: writtenWords + word}))
    }

    /*****Fce deaktivující tlačítka času po jeho spuštění, nastavující čas a upravující hodnoty napsaných slov a chyb*****/
    const startTimer = (yourTime) => {
      setEvaluation({...evaluation, remaningTime: yourTime, activeButton: false})

      setEvaluation(prev => ({...prev, mistakes: 0, writtenWords: 0})) /********** **********/

      setSelectedTime(yourTime/60) //Update vybraného času
    }

    /*****Fce resetující čas (resp. vrací do původního stavu)*****/
    const restartTimer = () => {
      setEvaluation(prev => ({...prev, remaningTime: 0, activeButton: true}))
    }

    /*****Fce skrývající box pro jméno hráče poté, co se jméno uloží*****/
    /* const playerName = (yourName) => {
      setSubmission(prev => !prev)
      setPlayerValue(yourName)
      c(yourName)
      c(`Mistakes: ${mistakes}, written words: ${writtenWords} and chosen time: ${remaningTime}`)
    } */

    /* const updateSelectedTime = (time) => {
      setSelectedTime(time)
    } */

    const games = (yourName) => {
      const newStat = {
        name: yourName,
        mistakes: mistakes,
        writtenWords: writtenWords,
        /* selectedTime: remaningTime, */
        selectedTime: selectedTime,
      };
      setStats(prevStats => [...prevStats, newStat]);
      setSubmission(prev => !prev);
      setPlayerValue(yourName);
    }




    /*****Fce procházející hry*****/
    const showStats = (games) => {

      games.map(game => {
        if (game && game.name && game.name.length > 0 && game.selectedTime > 0) { //Ať proměnná game existuje, jestli má klíč name, délka klíče name. Vybraný čas nad 0s
          if (!displayedGames.some(displayedGame => displayedGame.name === game.name)) { //Existuje-li hra se stejným jménem, nebude uložena.
            setDisplayedGames(prevGames => [...prevGames, game])
          }
        }
      })

    }
    
    

    //Ať je celková statistika vždy aktuální
    useEffect(() => {
      c(displayedGames)
    },[displayedGames])
    

    //Ať je průběžná statistika vždy aktuální
    useEffect(() => {
      showStats(stats)
    }, [stats])


    /*****Fce spouštějící časovač hry, znovu generování slov, ukládání napsaných slov a chyb*****/
    useEffect(() => {
      let interval
          
      if(remaningTime > 0){
        interval = setInterval(() => {
          setEvaluation(prevEvaluation => ({...prevEvaluation, remaningTime: remaningTime - 1}));
        }, 1000);
      } else {
        setWords([generateWord().slice(0, 6), generateWord().slice(0, 6), generateWord().slice(0, 6)])
        setEvaluation(prevEvaluation => ({...prevEvaluation, activeButton: true}));
        games()
      }
    
      return () => clearInterval(interval); // Odpojení časovače
    }, [remaningTime, setEvaluation]);
  
    return (
      <div className="stage">
        <TimeButtons theTime={chosenTime} setYourTime={startTimer} makeActive={activeButton}/>

        <TimeShow timeLeft={remaningTime} restartTime={restartTimer}/>

        {/* <div className="stage__mistakes">Chyb: {mistakes} | Napsaná slova: {writtenWords}</div> */}

        {submission && <PlayerName selectName={games}/>}
        <div className="stage__words">
          {words.map((word, index) => <WordboxTime key={word} word={word} onFinish={handleFinish} 
          active={index === 0 && remaningTime !==0 && true} evaluate={onEvaluation} 
          firstWord={index === 0 && remaningTime > 0 ? "active-word" : "non-active-word"} timeLeft={remaningTime}/>)}
        </div>
      </div>
    );
  };
  
  export default StageTime