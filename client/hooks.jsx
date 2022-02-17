import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
// import { getHooks } from 'html-webpack-plugin';
import render from 'react-dom';


function Pets() {
  // const [ petName, setPetName ] = useState('');
  // const [ petBreed, setPetBreed ] = useState('');
  // const [ checkIn, setCheckIn ] = useState('');
  // const [ checkOut, setCheckOut ] = useState('');

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log('DATA ', data.petName);
    fetch('http://localhost:3000/getpet', {
      method: "POST", 
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data),
    })
    .then(result => console.log(result))
    .then(data => {

    })
    .catch(err => console.log(err))

  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} method="POST">
        <p>Pet's Name</p>
        <input type="petName" name="petsName" {...register("petName")}/>
        <p>Pet's Breed</p>
        <input type="petBreed" name="petsBreed" {...register("petBreed")}/>
        <p>Check In Date</p>
        <input type="checkIn" name="checkInDate" {...register("checkIn")}/>
        <p>Check Out Date</p>
        <input type="checkOut" name="checkOutDate" {...register("checkOut")}/>
        <p>  </p>
        <input type="submit" />
      </form>
    </div>
    )
}


export default Pets;