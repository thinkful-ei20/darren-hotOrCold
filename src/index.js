import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainContainer from './components/main-container';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<MainContainer/>, document.getElementById('root'));
registerServiceWorker();
