import React, { useState } from 'react'



interface Options {
    initValue?:number
}

export const useCounter = ({initValue=1}: Options) => {
    const [count, setCount] = useState<number>(initValue)




    const increaseBy = ( value:number ) => {
        setCount( count + value);
    }
    const desicraseBy = ( value:number ) => {
        setCount( count - value);
    }     


    return {
        count,
        increaseBy,
        desicraseBy
  }
}
