import React from 'react'
import { useSelector } from 'react-redux'

export default function App2() {
    const state = useSelector(state => state)
    return (
        <div>
            {state}
        </div>
    )
}
