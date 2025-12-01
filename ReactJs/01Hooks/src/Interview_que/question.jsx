//What if we declare setCount more than 1 eg

import { useState } from 'react';

function Question() {
    let [counter, setCount] = useState(0);
    let [cnt, setCnt] = useState(0);

    const increment = () => {
        setCount(counter + 1);
        setCount(counter + 1);
        setCount(counter + 1);
    }

    //   React will batch these updates in the same event cycle 
    // — meaning instead of increasing 3 times, the value will update only once.
    // So if counter = 0, after running this function, the final value will be 1, not 3.

    function increment_without_batched() {
        setCnt(prevCount => prevCount + 1);
        setCnt(prevCount => prevCount + 1);
        setCnt(prevCount => prevCount + 1);
    }

    //This will add previous+current val eg- 0+1=1,1+1=2,2+1=3 final value after clicking single time is 3
    return (
        <>
            <h1>Value using setCount(counter+1): {counter}</h1>
            <br />
            <button onClick={increment}>Increment Counter</button>
            <br />
            <h1>Value after using prevCount: {cnt}</h1>
            <br />
            <button onClick={increment_without_batched}>Increment without batched</button>
        </>
    )
}

export default Question