import React from 'react';

import GuessSpan from './guessSpan'

export default function GameGuess() {

return(

<div>
  <input type='text' placeholder='Enter your guess'/>
  <button type='button'>Submit Guess</button>
  
  <GuessSpan />
</div> 

);

}