import { CounterAction } from "../actions/actions";
import { CounterState } from "../interfaces/interfaces";

export const INITIAL_STATE : CounterState = { 
    counter: 0,
    previous: 0,
    changes: 0,
}


export const counterReducer = (state: CounterState, action: CounterAction) : CounterState => { 

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