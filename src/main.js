const React = require('react');
const ReactDOM = require('react-dom');
const App = require('./App.js');

ReactDOM.createRoot(document.getElementById('root')).render(
  React.createElement(
    React.StrictMode,
    null,
    React.createElement(App)
  )
);
