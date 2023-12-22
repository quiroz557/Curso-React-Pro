import { useState } from 'react'

interface Props {
    initialValue?: number;
}

export const Counter = ({ initialValue  = 0} : Props) => {

    const [counter, setCounter] = useState(initialValue);

    const increment = (): void => {
        setCounter(prev => prev + 1);
    }

    return (
        <>
            <h1>Counter : {counter}</h1>

            <button
                className="btn btn-primary"
                onClick={increment}
            >
                +1
            </button>
        </>
    )
}
