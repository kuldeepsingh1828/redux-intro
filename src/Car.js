import React from 'react'

export default function Car({ data, changeHandler, submitHandler }) {
    const { name, model, qty } = data;
    return (
        <div>
            <input onChange={changeHandler} value={name} name="name" />
            <input onChange={changeHandler} value={model} name="model" />
            <input onChange={changeHandler} value={qty} name="qty" />
            <input onClick={submitHandler} type="submit" />
        </div>
    )
}
// Step 1
// Create a component to add a car into a list of cars.
// fields that are required as attributes of a car are name, model and qty.

// Step 2
// Create another component which will display the list of cars.

// Step 3
// On adding the car of same brand and model, quantity 
// should be added in existing car object instead of creating a new car object in the list.