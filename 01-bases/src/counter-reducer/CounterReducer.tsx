import { useReducer, useState } from 'react'
import { INITIAL_STATE, counterReducer } from './state/counterReducer';
import * as actions from './actions/actions';


export const CounterReducerComponent = () => {

    const [counterState, dispatch] = useReducer(counterReducer, INITIAL_STATE);

    const reset = (): void => {
        dispatch(actions.doReset());
    }

    const increment = (value : number = 1): void => {
        dispatch(actions.doIncreaseBy(value));
    }

    return (
        <>
            <h1>Counter Reducer Segmentado</h1>
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
