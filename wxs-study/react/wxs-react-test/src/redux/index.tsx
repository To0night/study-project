



// createStore接受两个参数，一个初始值，一个action操作类型
export const createStore = (reducer) => {
    let currentState;
    let listeners = []
    const dispatch = (action) => {
        currentState = reducer(currentState, action)
        
        // 数据更新时通知订阅者们实施更新
        listeners.forEach(fn => fn())
    }
    dispatch({ type: new Date().getTime() + Math.random() })


    const subscribe = (fn) => {
        // 采用随机数作为唯一id
        fn.uid = Math.random() + new Date().getTime()
        listeners.push(fn)
        // subscribe需要返回一个函数，作为订阅的取消者
        return () => {
            // 把当前函数从订阅者数组里面移除
            listeners = listeners.filter(item => item.uid != fn.uid)
        }
    }

    return {
        getState: () => currentState,
        dispatch,
    }
}

