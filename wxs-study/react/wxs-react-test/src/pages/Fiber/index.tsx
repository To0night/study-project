import React, { useEffect, useLayoutEffect, useState, useRef, memo } from "react"



function SonFn() {
    return (<>我是一个函数子节点</>)
}

function Fiber() {
    const fatherFiber = <div id='father'>
        <div>这是父节点的第一个子节点(dom节点)</div>
        <SonFn />
    </div>

    console.log('我来看看父元素的fiber', fatherFiber)


    return fatherFiber
}



export default Fiber
