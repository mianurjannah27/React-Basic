import React,{ useState } from 'react'
import '../App.css'
const Increment = () => {
    const [ count, setCount ] = useState(0);
   
    const increment = () =>{
      setCount(count + 1);
    };
    const decrement = () =>{
      setCount(count - 1);
    };
    return (
        <div>
            <p style={{
                fontSize: '34px',
                fontWeight: '600',
                color: 'red'
            }}>Count:{count}</p>
            <button type="button" className="btn" onClick={() => increment()}>Increment</button>
            <button type="button" className="btn" onClick={() => decrement()}>Decrement</button>
        </div>
    )
}

export default Increment
