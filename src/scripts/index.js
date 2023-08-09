import _ from 'lodash';
import { printMe } from './print';

import '../styles/main.scss';

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');
 
   // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    btn.onclick = printMe;

    element.appendChild(btn);

    return element;
  }
 
  document.body.appendChild(component());

  if( process.env.NODE_ENV === 'production' ) {
    console.log('Production Mode');
  } else if ( process.env.NODE_ENV === 'development' ) {
    console.log('Development Mode');
  }

  if(module.hot) { 
    module.hot.accept('./print.js', function() {
      console.log('Accepting the updated printMe module!');
      printMe();
    })

  }