import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import gato0 from  './assets/gato0.jpeg'
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

const cards = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5];
const imgCards= [gato0,gato1,gato2,gato3,gato4,gato5];



function CardsOriginal({ shuffledCards }) {
  // const [reversedCard, setReversedCars] = useState(false);

  // function click({ sendClick }) {

  //   setReversedCars(true);

  // }

 

  return ( 
  //    {/* <div className='bigSquare'>
  // <img className='square' src={imgCards[card]} alt="" />
  // </div> */}
    
  
    <div className='squares grid grid-cols-4 gap-4 p-4  ' >

      {shuffledCards.map((card, i) => (

        <div key={i} className='square moves'>
          card{shuffledCards[i]}
        

          {/* <div onClick={click} >
            {reversedCard? 'reversed':'square'}
          </div> */}

        </div>

      ))}

    </div>
  )
}

// function reversedCard( ){
//   const [reversedCard , setReversedCars] = useState(false);

//   reversedCard(false);
//   let reversed:



// }


function MemoryGame() {
  const [gameStart, setGameStart] = useState(false);
  const [shuffledCardsNew, setShuffledCardsNew] = useState([]);

  const startGame = () => {





    setGameStart(true);
    
    



    let shuffledCards = [];
    // let shuffledCardsNew = [];
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
    game = <button className='buttonStart' onClick={startGame}>Comenzamos</button>;
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
