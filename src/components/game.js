
import React from 'react';

import GameGuess from './game-guess';
import GuessResults from './guess-results';
import GameHintHeader from './game-hint-header';



export default function Game() {
return(
  <div className='game-div'>

    <h1>HOT or COLD</h1>
    
    <div className='gameBoard'>

      <GameHintHeader />

      <GameGuess />
      
      <GuessResults />

    </div>
  </div>
);

}