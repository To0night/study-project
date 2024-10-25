import React, { useEffect, useLayoutEffect, useState, useRef, memo } from "react"

function App() {
  const [data, setData] = useState(1)


  useEffect(() => {
    // 两秒后变成2
    setTimeout(() => {
      setData(2)
    }, 2000);
    setTimeout(() => {
      btnRef.current.click()
    }, 2040);
  }, [])

  const btnRef = useRef(null)

  const clickHandle = () => {
    setData(3)
  }

  return (
    <>
      {data}
      <button ref={btnRef} onClick={clickHandle}>btn按钮</button>
    </>
  )
}



export default App
