import React, { useState } from 'react'

export const CounterPages = () => {
    
    const [count, setCount] = useState<number>(10)


    const addTwoNumber = (a:number, b:number) : number => {
        return (a + b)
    }

    const increaseBy = ( value:number ) => {
        setCount( count + value);
    }
    const desicraseBy = ( value:number ) => {
        setCount( count - value);
    }        
  
    return (
    <>
        <h3>Funciones para probar</h3>
        <span>El resultado de la funcion es: {
                addTwoNumber(1,2)
            }</span>

        <h3>Contador: <small>{count} </small></h3>

        <div>
            <button onClick={() => increaseBy(1)}>+1</button>
            &nbsp;
            <button onClick={() => desicraseBy(1)}>-1</button>


        </div>
    </>
  )
}
