
// import { getHooks } from 'html-webpack-plugin';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import Pets from './App';
import Pets from './hooks.jsx'

render(
  <div>
    <Pets />
  </div>,
  document.getElementById('app'),
  );
  
  
  
  // import React, { Component } from 'react';
  // import ReactDOM from 'react-dom';
  // //import components
  
  // class App extends Component {
  //   render(){
  //     return (
  //       <div>
  //         {/* might want to change the name? */}
  //         <getPetInfo />
  //       </div>
  //     );
  //   }
  // }