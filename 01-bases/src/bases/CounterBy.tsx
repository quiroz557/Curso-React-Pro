import { useState } from 'react'

interface Props {
    initialValue?: number;
}

interface CounterState {
    counter: number;
    clicks: number; 
}

export const CounterBy = ({ initialValue  = 0} : Props) => {
    const [{ counter, clicks  }, setState] = useState<CounterState>({
        counter: initialValue,
        clicks: 0,
    });
 
    const increment = (value : number): void => {
        setState({
            clicks: clicks + 1,
            counter: counter + value,
        });
    }

    return (
        <>1
            <h1>CounterBy: {counter}</h1>
            <h1>Clicks: {clicks}</h1>

            <button onClick={() => increment(1)}>+1</button>

            <button onClick={() => increment(5)}>+5</button>
        </>
    )
}
