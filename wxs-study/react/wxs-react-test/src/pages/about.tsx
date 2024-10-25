import style from "../styles/pages/about.module.css"
import { useRouter } from "next/router"
import PostItem from "./components/postItem"
import { useState, useCallback, useEffect, useDebugValue, useRef, useLayoutEffect } from "react"

export default function GetStaticProps({ testArray }) {
  const childList = JSON.parse(JSON.stringify(testArray))
  const [pageTitleIndex, setPageTitleIndex] = useState(1)
  const refList = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)]
  useEffect(() => {
    childList.forEach((item, index) => {
      item.ref = refList[index]
    })
    console.log(11111111111, childList)
    return () => {
      console.log("组件卸载了")
    }
  }, [])

  const router = useRouter()

  // 去post详情页面
  const move2post = useCallback((postId: any) => {
    console.log(11111)
    // router.push(`/posts/${postId}`);
  }, [])

  const changeTitle = async () => {
    setPageTitleIndex((oldValue) => oldValue + 1)
  }

  const move2test = () => {
    router.push("/test/testPage")
  }

  const checkChild = () => {
    console.log(childList[0].ref)
  }

  useLayoutEffect(() => {
    // 在组件渲染后异步执行
    // 这里可以进行异步计算或DOM操作
    // 注意：在此处进行的DOM操作不会阻塞浏览器渲染
    document.title = `Count: ${pageTitleIndex}`
  }, [pageTitleIndex]) // 仅在count变化时触发

  return (
    <div>
      <header>{pageTitleIndex}号标题</header>
      <button onClick={changeTitle}>点击我改变标题</button>
      <button onClick={move2test}>点击我进测试页面</button>
      <button onClick={checkChild}>点击我查看第一个子组件</button>
      <ul className={style.post_ul_style}>
        {childList.map((titleItem: any, index: number) => (
          <PostItem
            key={titleItem.id}
            move2post={move2post}
            index={index}
            title={`新闻${titleItem.id}`}
            p1={titleItem}
            // p2={refList[index]}
          />
        ))}
        {/* <PostItem
          ref={refList[0]}
          key={0}
          move2post={move2post}
          index={0}
          title={`我是一条新闻`}
        /> */}
      </ul>
    </div>
  )
}

const getAsyncData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          title: "这是第一条数据",
          id: 1,
        },
        {
          title: "这是第二条数据",
          id: 2,
        },
        {
          title: "这是第三条数据",
          id: 3,
        },
        {
          title: "这是第四条数据",
          id: 4,
        },
        {
          title: "这是第五条数据",
          id: 5,
        },
      ])
    }, 1000)
  })
}

export const getStaticProps = async () => {
  const res = await getAsyncData()
  const testArray = res
  return { props: { testArray } }
}
