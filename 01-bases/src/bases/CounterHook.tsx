import { useCounter } from '../hooks/useCounter';

export const CounterHook = () => {

    const { counter, counterElement, increment  } = useCounter({
        maxCount: 10
    });

    return (
        <>
            <h1>CounterHook:</h1>
            <h2 ref={counterElement}>{counter}</h2>

            <button
                className="btn btn-primary"
                onClick={increment}
            >
                +1
            </button>
        </>
    )
}
