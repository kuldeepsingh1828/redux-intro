import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { UP, DOWN } from './actions'
import App2 from './App2'
export default function App() {
    const state = useSelector(state => state)
    const dispatch = useDispatch();

    return (
        <>
            <div>
                <button
                    onClick={() => dispatch(UP())}
                    style={{ border: "2px solid red", borderRadius: '20px', padding: "12px", margin: "20px", width: "100px" }}> UP</button>
                {state}
                <button
                    onClick={() => dispatch(DOWN())}
                    style={{ border: "2px solid red", borderRadius: '20px', padding: "12px", margin: "20px", width: "100px" }}> Down</button>
            </div>
            <br /><hr />
            <App2 /></>
    )
}
