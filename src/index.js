import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

import './styles/main.scss';

if( process.env.NODE_ENV === 'production' ) {
   console.log('Production Mode');
} else if ( process.env.NODE_ENV === 'development' ) {
   console.log('Development Mode');
}

createRoot(document.querySelector("#root")).render(<React.StrictMode><App /></React.StrictMode>)

// Warning: You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. 
// Instead, call root.render() on the existing root instead if you want to update it.
// Solution to the warning :  Comment the below LOC
// if(module.hot) { module.hot.accept() }