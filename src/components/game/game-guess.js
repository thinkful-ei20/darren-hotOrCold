import React from 'react';

import GuessSpan from './guessSpan'
import './game-guess-form.css'

export default function GameGuess() {

return(

<div>
  <form className='game-guess-form'>
    <input className='guessinput' type='text' placeholder='Enter your guess'/>
    <input className='guesssubmit' type='submit' placeholder='Submit Guess'></input>
  </form>
  <GuessSpan />
</div> 

);

}