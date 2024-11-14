
import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import gato0 from './assets/gato0.jpeg'
import gato1 from './assets/gato1.jpeg'
import gato2 from './assets/gato2.jpeg'
import gato3 from './assets/gato3.jpeg'
import gato4 from './assets/gato4.jpeg'
import gato5 from './assets/gato5.jpeg'

// pasos:
// 1-Creamos el tablero sencillo, una mesa de Madera---
// 2-Las cartas seran solo 5 pares por ahora donde se meten en un array y se lanzan
// de manera random,---
//Las cartas tiene que destacar en el fondo negro
// 3-Las cartas seran de manera border y colores por ahora,
// 4-metidas ennun cuadro, 
// 5-abra un tablero con los movimientos de los jugadores
// 6-Se dira quien acerto Mas
// 7-renderizar cada rato
//Falta mostrar el ganador


//Falta una imagen por cada carta distints
//falta que se quede la carga al voltear

const cards = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5];
const imgCards = [gato0, gato1, gato2, gato3, gato4, gato5];





function CardsOriginal({ shuffledCards }) {
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedCard2, setSelectedCard2] = useState(null);
  const [matchedCards, setMatchedCards] = useState([]);
  const [player1, setPlayer1] = useState(true);
  const [playerCount1, setPlayer1Count] = useState(0);
  const [playerCount2, setPlayer2Count] = useState(0);
  const [winner, setWinner] = useState(null);
  useEffect(() => {
    console.log('card1:', shuffledCards[selectedCard]);
  }, [selectedCard]);

  useEffect(() => {
    console.log('card2:', shuffledCards[selectedCard2]);
  }, [selectedCard2]);

  useEffect(() => {
    console.log('macth:', matchedCards);
  }, [matchedCards]);

  useEffect(() => {
    console.log('Player1:', playerCount1);
  }, [playerCount1]);

  useEffect(() => {
    console.log('Player2:', playerCount2);
  }, [playerCount2]);

  useEffect(() => {
    if (playerCount1 >= 4) {
      setWinner('El ganador es Jugador 1');
      console.log('Ganador: Jugador 1');
    } else if (playerCount2 >= 4) {
      setWinner('El ganador es Jugador 2');
      console.log('Ganador: Jugador 2');
    }
  }, [playerCount1, playerCount2]);
  function handleClick(index) {
    if (matchedCards.includes(index) || selectedCard === index){
      return;
    }   
    console.log(`card clicked : ${index}`);
    if (player1) {
      if (selectedCard === null) {

        setSelectedCard(index);
        console.log(`selectedcar1 : ${selectedCard}`)

      } else if (selectedCard2 === null) {
        
        setSelectedCard2(index);
        console.log(`selectedcar2 : ${selectedCard2}`)
        // console.log(`Card1: ${selectedCard} and card2: ${index}`);

        if (shuffledCards[selectedCard] === shuffledCards[index]) {

          console.log(`selectedcar : ${shuffledCards[selectedCard]} y ${shuffledCards[index]} `)


          console.log("son iguales");
          setMatchedCards((prev) => [...prev, selectedCard, index]);
          setPlayer1Count((prevCount) => prevCount + 1);
          setSelectedCard(null);
          setSelectedCard2(null);
        } else {
          setTimeout(() => {
            console.log("diferentes");
            setSelectedCard(null);
            setSelectedCard2(null);
            setPlayer1(false);
          }, 1000);
        }
      }
    } else {
      if (selectedCard === null) {
        setSelectedCard(index);
      } else if (selectedCard2 === null) {
        setSelectedCard2(index);

        if (shuffledCards[selectedCard] === shuffledCards[index]) {
          setMatchedCards((prev) => [...prev, selectedCard, index]);
          setPlayer2Count((prevCount) => prevCount + 1);
          setSelectedCard(null);
          setSelectedCard2(null);
        } else {
          setTimeout(() => {
            setSelectedCard(null);
            setSelectedCard2(null);
            setPlayer1(true);
          }, 1000);
        }
      }
    }

    if (playerCount1 >= 1 || playerCount2 >= 1) {
      console.log("contador player1: " + playerCount1);
      console.log("contador player2: " + playerCount2);
    }else{
    }

let ganador;
    if (playerCount1 >= 4){
      console.log(`Ganador player1 con ${playerCount1} aciertos`);
      SetWinner('El ganador es ' + 'Jugador 1');
      ganador: 'EL ganador es : ' + winner;

    }else if( playerCount2>=4){
      console.log(`Ganador player con ${playerCount2} aciertos`);
      SetWinner('El ganador es ' + 'Jugador 2');
      ganador: 'EL ganador es : ' + winner;
    }


  
  };
  
  return (
    <>
      <div className='squares grid grid-cols-4 gap-20 p-8'>
        {shuffledCards.map((card, i) => (
          <div
            key={i}
            className={`square moves ${
              selectedCard === i || selectedCard2 === i || matchedCards.includes(i) ? 'flipped' : ''
            }`}
            onClick={() => handleClick(i)}
            style={{ opacity: matchedCards.includes(i) ? '0' : '1' }}
          >
            <div className="cardFront">
              
            </div>
            <div className="cardBack">
              <img src={imgCards[card]} alt="gatos" />
            </div>
          </div>
        ))}
      </div>
      <div className="winner"><p>{winner}</p></div>
    </>
  );
}



function MemoryGame() {
  const [gameStart, setGameStart] = useState(false);
  const [shuffledCardsNew, setShuffledCardsNew] = useState([]);

  const startGame = () => {





    setGameStart(true);





    let shuffledCards = [];
    let newShuffledCards = [];
    for (let i = 0; i < cards.length; i++) {

      let index = Math.round(Math.random() * (cards[cards.length - 1] - cards[0]) + cards[0]);


      console.log("index " + index);

      const repeats = shuffledCards.filter(num => num === index).length;

      // console.log("repeats " + repeats);

      if (repeats === 2) {
        i--;
      } else {
        shuffledCards.unshift(index);
        newShuffledCards = shuffledCards.slice();
      }
    }
    console.log("cards  dentro" + cards);

    // {  // console.log("cards " + cards[0]);
    //   // console.log("cards " + cards);
    //   // shuffledCardsNew.sort();
    //   // console.log("Shuiffles " + shuffledCardsNew.length);
    //   // console.log("shuffled " + shuffledCardsNew);}


    setShuffledCardsNew(newShuffledCards);
    console.log("shuffled " + newShuffledCards);

  }

  let game;
  if (gameStart) {
    game = <CardsOriginal shuffledCards={shuffledCardsNew} />

  } else {
    game = <>


      <button className='buttonStart' onClick={startGame}>Comenzamos</button>

    </>;
  }


  return (
    <>

      <div className='tittle'>
        <img src={viteLogo} alt="vite logo" />
        <h1>Memory Game</h1>
        <img src={reactLogo} alt="React Logo" style={{ width: '50px', marginLeft: '10px' }} />
      </div>

      <div className='blackBoard '>
        {game}

       
      </div>

  


    </>
  )
};

export default MemoryGame;