import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';               //Disables browser-native CSS
import './index.css';               //Restores basic CSS
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
