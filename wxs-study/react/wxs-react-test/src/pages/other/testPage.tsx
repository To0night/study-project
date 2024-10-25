
import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react'

// 泛型函数
interface functionType {
    <T>(a: T, b: T): void
}

const transformName: functionType = (firstName, lastName) => {
    console.log('my name is aaaa')
}

transformName<number>(1)



// const SonComp = forwardRef((props: { checked: string, selectHandle: any }, ref) => {
//     const currentChecked = useRef(props.checked)

//     useEffect(() => {
//         currentChecked.current = props.checked
//     },[props.checked])

//     const list = useRef([{
//         title: "第一条新闻",
//         key: "1"
//     },
//     {
//         title: "第二条新闻",
//         key: "2"
//     },
//     {
//         title: "第三条新闻",
//         key: "3"
//     }])

//     const changeSelect = (key: any) => {
//         props.selectHandle(key)
//     }
//     return (
//         <>
//             我是一个子组件
//             <ul>
//                 {list.current.map((item:any) => (<li onClick={() => changeSelect(item.key)} style={{backgroundColor: currentChecked.current === item.key ? 'pink' : 'white'}} key={item.key}>{item.title}</li>))}
//             </ul>
//         </>)
// })

const fatherComp = () => {
    // const [number,setNumber] = useState<number>('1231231')

    return (
        <>
            测试
            {/* <SonComp checked={checked} selectHandle={selectHandle}></SonComp> */}
        </>)
}

export default fatherComp