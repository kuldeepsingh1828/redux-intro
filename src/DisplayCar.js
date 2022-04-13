import React, { useState } from 'react'
import Car from './Car'
const carsData = [{
    name: 'Car 1',
    model: 'Brezza',
    qty: 10
}, {
    name: 'Car 2',
    model: 'Astor',
    qty: 11
}, {
    name: 'Car 3',
    model: 'Swift',
    qty: 15
}]

export default function DisplayCar() {
    let [cars, setCars] = useState(carsData);
    const [car, setCar] = useState({ name: 'ee', model: 'model', qty: '10' });
    const changeHandler = (event) => {
        const { name, value } = event.target;
        setCar({ ...car, [name]: value });
    }
    const submitHandler = (event) => {
        event.preventDefault();
        console.log("ff");
        let index = cars.findIndex(e => e.model == car.model);
        if (index != -1) {
            let newqty = parseInt(cars[index].qty) + parseInt(car.qty);
            console.log(newqty)
            cars[index] = { ...cars[index], qty: newqty };
            setCars([...cars]);
            console.log("erere")
        } else {
            // cars.push(car);
            setCars([...cars, car]);
            console.log("crsd....")
        }
    }
    return (
        <div>
            <Car data={car} changeHandler={changeHandler} submitHandler={submitHandler} />
            {cars.map(car => (
                <>
                    <h1>{car.name}</h1>
                    <h3>{car.model}</h3>
                    <p>{car.qty}</p>
                </>
            ))}
        </div>
    )
}