import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

window.onload = function () {
    ReactDOM.createRoot(document.getElementById('root')).render(<App />, document.getElementById('root'));
};