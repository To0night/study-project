
import { createStore } from "@/redux"
import { useEffect, useState } from "react";


const reducer = (state = 0, { type, data }) => {
    switch (type) {
        case 'add':
            return state += data;
        case 'reduce':
            return state -= data;
        default:
            return state
    }
}

const store = createStore(reducer)
const xRedux = () => {

    const [_, forceUpdate] = useState(0)

    const clickHandle = () => {
        store.dispatch({ type: 'add', data: 3 })
        console.log(store.getState())
        forceUpdate((value) => value + 1)
    }

    return (
        <>
            {store.getState()}
            <button onClick={clickHandle}>点击我改变状态</button>
        </>)
}

export default xRedux