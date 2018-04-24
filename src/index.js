import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// let humanName = document.getElementById("humanName");
// console.log(humanName);
//
// function uppercase(str)
// {
//   var array1 = str.split(' ');
//   var newarray1 = [];
//
//   for(var x = 0; x < array1.length; x++){
//       newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//   }
//   return newarray1.join(' ');
// }
// console.log(uppercase("the quick brown fox"));

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
