import { useReducer, useState } from 'react'

interface CounterState {
    counter: number;
    previous: number;
    changes: number;
}

const INITIAL_STATE : CounterState = { 
    counter: 0,
    previous: 0,
    changes: 0,
}

type CounterAction = 
    | {type: 'increaseBy',payload: { value : number; }}
    | {type: 'reset' }


const counterReducer = (state: CounterState, action: CounterAction) : CounterState => { 

    const { counter, changes } = state;

    switch (action.type) {
        case 'reset':
            return INITIAL_STATE
            break;
        case 'increaseBy':
            return {
                changes: changes + 1,
                counter: counter + action.payload.value,
                previous: state.counter,
            }
        default:
            return state;
    }
}

export const CounterReducerComponent = () => {

    const [counterState, dispatch] = useReducer(counterReducer, INITIAL_STATE);

    const reset = (): void => {
        dispatch({type: 'reset'});
    }

    const increment = (value : number = 1): void => {
        dispatch({type: 'increaseBy', payload: {value}});
    }

    return (
        <>
            <h1>CounterReducer</h1>
            <pre>
                {JSON.stringify(counterState, null, 2)}
            </pre>
            <button
                className="btn btn-primary"
                onClick={() => increment(1)}
            >
               +1
            </button>

            <button
                className="btn btn-primary"
                onClick={() => increment(5)}
            >
               +5
            </button>

            <button
                className="btn btn-primary"
                onClick={() => increment(10)}
            >
               +10
            </button>

            <button
                className="btn btn-primary"
                onClick={reset}
            >
               Reset
            </button>
        </>
    )
}
