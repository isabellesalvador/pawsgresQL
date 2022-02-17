// import React, { Component } from 'react';
// import { render } from 'react-dom';

// class Pets extends Component {
//   constructor() {
//     super();
//     this.state = {
//       petName: '',
//     };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleAdd = this.handleAdd.bind(this);

//     handleChange(e) {
//       //will send the inputs to req.body for queries
//       this.setState({petName: e.target.value}) //what is e.target.value? built in?
//     }

//     handleAdd(e) {
//       //for button submission 
//       alert('New pet was added!')
//     }

//     render() {
//       return (
//         <form onSubmit={this.handleAdd}>
//           <label>
//             Pet Name:
//             <input type="text" value={this.state.petName} onChange={this.handleChange} />
//           </label>
//           <input type="submit" value="Submit" />
//         </form>
        
//         //starwars
//         // <label htmlFor="name">Pet's Name: </label>
//         // <input name="name" placeholder="Luke Skywalker" value={name} onChange={nameOnChange} />
//       )
//     }  
//   }

// // class petInfo extends Component {}

// }
