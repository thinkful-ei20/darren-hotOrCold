
import React from 'react';

import GameGuess from './game-guess';
import GuessResults from './guess-results';
import GuessHintHeader from './guess-hint-header';

import './game.css'



export default function Game() {
return(
  <div className='game'>
      <h1 className='game-title'>HOT or COLD</h1>
      <div className='game-div'>  
        
        <div className='gameBoard'>
          <GuessHintHeader />

          <GameGuess />     

          <GuessResults />
        </div>

      </div>
  </div>
  
);

}