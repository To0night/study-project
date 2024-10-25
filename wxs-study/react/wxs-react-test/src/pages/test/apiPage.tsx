import { useEffect, useReducer, useState } from 'react'

interface operatorType { type: string, payload: number }

interface classType {
    name: string;
}

class student implements classType{
  name = '张三'
}


const reactApiPage = () => {

    const countReducer = (state:any, { type, payload }:any) => {
        console.log('enter this',state)
        switch (type) {
            case 'add':
                return state += payload;
            case 'reduce':
                return state -= 1;
        }
    }

    const [name,setName] = useState(0)


    useEffect(() => {
        console.log(111)
        // setName(name + 1)
    },[name])

    



    const [count, dispatch] = useReducer(countReducer, 0)
    
    return (
        <>
            <div>{count}</div>
            <button onClick={() => dispatch({ type:'add',payload:22 })}>点击我加1</button>
            
        </>
    )
}

export default reactApiPage