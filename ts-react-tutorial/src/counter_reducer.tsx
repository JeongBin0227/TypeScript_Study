import React,{useReducer} from 'react'

import { render } from '@testing-library/react';

type Action = {type:'INCRESE'} | {type:'DECREASE'}

function reducer(state: number, action: Action):number{
    switch(action.type){
        case 'INCRESE':
            return state+1;
        
        case 'DECREASE':
            return state-1;
        default:
            throw new Error('Unhandled action type')
    }
}

function Counter(){
    const [count, dispatch] = useReducer(reducer, 0)
    const onIncrease = () => dispatch({type:'INCRESE'})

    const onDecrease = () => dispatch({type:'DECREASE'})

    return(
        <div>
            <h1>{count}</h1>
            <div>
                <button onClick={onIncrease}>+1</button>
                <button onClick={onDecrease}>-1</button>
            </div>
        </div>
    )
}

export default Counter