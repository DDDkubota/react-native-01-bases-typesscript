import React, { useState } from 'react'
import { useCounter } from '../hooks/useCounter';

export const CounterwithHook = () => {
    const {count,desicraseBy,increaseBy} = useCounter({});
      
  
    return (
    <>
   <h3>Funciones para probar</h3>
        <h3>Contador: <small>{count} </small></h3>

        <div>
            <button onClick={() => increaseBy(1)}>+1</button>
            &nbsp;
            <button onClick={() => desicraseBy(1)}>-1</button>


        </div>
    </>
  )
}
