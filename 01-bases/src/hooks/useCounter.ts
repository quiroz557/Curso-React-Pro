import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from 'gsap';

export const useCounter  = ({maxCount = 1}) => { 
    const [counter, setCounter] = useState(5);
    const counterElement = useRef<HTMLHeadingElement>(null);

    const tl = useRef(gsap.timeline());

    const increment = (): void => {
        setCounter(prev => Math.min(prev + 1, maxCount));
    }

    useLayoutEffect(() => { 

        if(!counterElement.current) return;
        
        tl.current.to(counterElement.current, {y: -10, duration: 0.2, ease: 'ease.out'})
                .to(counterElement.current, {y: 0, duration: 1, ease: 'bounce.out'})
                .pause();
    }, []);

    useEffect(() => {
        if( counter < maxCount ) tl.current.play(0);
        
        return;
    }, [counter])

    return {
        counter,
        increment,
        counterElement
    }
}