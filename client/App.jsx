import React, { Component, useState } from 'react';
import { render } from 'react-dom';

//ADDPET
//require json data from another page???
//const petsData = require('..... abc.json');

//custom hook for input boxes => does this go here?
const useInput = initial => {
  //
  const [ petName, setPetName ] = useState(initial);
  //this is already in my Pets class?
  const handleChange = e => setValue(e.target.value); 
  return [ value, handleChange ];
}

//individually set each piece of state
//or learn react hooks**


class Pets extends Component {
  constructor() {
    super();

    this.state = {
      petName: '',
      petBreed: '',
      checkIn: '',
      checkOut: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  componentDidMount() {
    fetch(this.props.SOMETHING)
      .then((data) => data.json())
      // .then(data => console.log(data))
      .then((data) =>  
        this.setState({
          ...state,
          petName,
          petBreed,
          checkIn,
          checkOut,
        }))
      .catch((err => console.log('Error fetching data.  Check componentDidMount. Error: ', err)));    
  }
  
  // handleChange(e){
  //   //will send the inputs to req.body for queries
  //   this.setState({
  //     petName: e.target.value,
  //     petBreed: e.target.value,
  //     checkIn: e.target.value,
  //     checkOut: e.target.value,
  //   }); 
  // }

  handleAdd(e){
    //for button submission 
    console.log(e)
    // alert('New pet was added!');
  }

  render(){
    return (
      <form onSubmit={this.handleAdd}>
        <div>
          <label>
            Pet's Name:
            <input
              name="petsName" 
              type="text" 
              value={this.state.petName} 
              //invoke hook here instead
              onChange={setPetName} />
          </label>
        </div>

        <div>
          <label>
            Pet's Breed:
            <input 
              name="petsBreed"
              type="text" 
              value={this.state.petBreed} 
              onChange={this.handleChange} />
          </label>
        </div>

        <div>
          <label>
            Check In Date:
            <input 
              name="checkIn"
              type="text" 
              value={this.state.checkIn} 
              onChange={this.handleChange} />
          </label>
        </div>

        <div>
          <label>
            Check Out Date:
            <input 
              name="checkOut"
              type="text" 
              value={this.state.checkOut} 
              onChange={this.handleChange} />
          </label>
        </div>
        <input type="submit" value="Submit" />
      </form>
    )
  }  

};


// export default Pets;



// import React, { Component } from 'react';
// import { render } from 'react-dom';
// //import things
// import petInfo from './petInfo';

// //create App class that will hold 
// class App extends Component {
//   render() {
//     return (
//       <div>
//       <h2>Check your pet in!</h2>
//       <getPetInfo />
//       </div>
//     )
//   }
// };




// //this is a div id in index.html folder in frontend assessment
// ReactDOM.render(<App />, document.getElementById('app'));