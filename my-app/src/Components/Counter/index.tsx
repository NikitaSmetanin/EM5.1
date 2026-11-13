import { useState } from 'react';
import './style.css';

const MIN = 0;
const MAX = 100;

export const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div className='Counter'>
            <button onClick={() => setCount(count - 1)} disabled={count <= MIN} className='CounterButton'> - </button>
            <h1 className='CounterValue'>{count}</h1>
            <button onClick={() => setCount(count + 1)} disabled={count >= MAX} className='CounterButton'> + </button>
        </div>
    );
};