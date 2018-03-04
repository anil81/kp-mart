import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import KpMart from './kpmart/kpmart';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<KpMart />, document.getElementById('root'));
registerServiceWorker();
