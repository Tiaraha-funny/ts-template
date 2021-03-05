import { type } from 'os';
import React, { useReducer, useRef } from 'react'
import { useClickOutside } from './useClickOutside';

const initialState = { rValue: true };

type State = {
    rValue: boolean;
}

//type Action = {
//    type: string;
//}
type Action = {type: 'one' | 'two' | 'three'};

// type Action = {type: 'one'} | {type: 'two'} 

function reducer(state: State, action: Action) {

    switch (action.type) {
        case "one":
            return { rValue: true }
        case "two":
            return { rValue: false }
        default:
            return state;
    }
}

const ReducersButtons = () => {

    const [state, dispatch] = useReducer(reducer, initialState)
    // const ref = useRef(null);
    const ref = useRef<HTMLDivElement>(null!) //read only
    useClickOutside(ref, () => {
        console.log("you can click out side of the div");
        
    })

    return (
        <div ref={ref}>
            {state && state?.rValue && <h1>Visible</h1>}
            <button onClick={() => dispatch({type: "one"})}>Action one</button>
            <button onClick={() => dispatch({type: "two"})}>Action two</button>
            <button onClick={() => dispatch({type: "three"})}>Action three</button>
        </div>
    )
}

export default ReducersButtons
