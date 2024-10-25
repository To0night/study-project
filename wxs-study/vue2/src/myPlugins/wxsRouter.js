import("./router.css")

let _VueInstance = null

// 路由匹配中的comp数组
let matchedRouteList = []

class Router {
  constructor({ routes, base, mode = "history" }) {
    // 保存参数
    this.routes = this.platRoutesList(routes, [])
    this.base = base
    this.mode = mode

    //初始化全局组件
    this.initGlobalComp()
  }

  static install(Vue) {
    _VueInstance = Vue
    Vue.mixin({
      beforeCreate() {
        if (this.$options.router) {
          // 挂载全局的vue实例
          Vue.prototype.$router = this.$options.router
        }
      },
    })
  }

  // 扁平化处理所有数组
  platRoutesList(routes, resultList, linkLevel = 1) {
    routes.forEach((route) => {
      route.linkLevel = linkLevel
      resultList.push(route)
      if (route.children) {
        const deeperFlag = linkLevel + 1
        // 有嵌套路由配置
        this.platRoutesList(route.children, resultList, deeperFlag)
      }
    })
    return resultList
  }

  initGlobalComp() {
    // 初始化保存当前to的变量
    _VueInstance.util.defineReactive(this, "currentLink", "")
    _VueInstance.component("router-link", {
      props: {
        to: {
          type: String,
          required: true,
        },
      },
      methods: {
        linkClickHandle(to) {
          window.history.pushState({}, "", this.$router.base + to)
          // 清空匹配路由数组
          matchedRouteList = []
          this.$router.currentLink = to
        },
      },
      render() {
        return (
          <a
            class="router-link-class"
            onClick={() => this.linkClickHandle(this.to)}
          >
            {this.$slots.default}
          </a>
        )
      },
    }),
      _VueInstance.component("router-view", {
        data() {
          return {
            // 将routerview组件设置一个特殊标识
            routerViewFlag: true,
          }
        },
        methods: {
          getMatchedComp(path, depth) {
            const matchedPath = path.split("/")[depth] || ""
            const matchedRoute =
              this.$router.routes
                .filter((item) => item.linkLevel === depth)
                .find((route) => route.path === (depth > 1 ? `${matchedPath}` : `/${matchedPath}`))?.component || null
                matchedRouteList.push(matchedRoute)
          },
        },
        render(h) {
          
          console.log('执行render')
          // 默认当前router-view深度为1
          let depth = 1
          let parentComp = this.$parent
          // 当父组件不为空一直执行
          while (parentComp) {
            parentComp = parentComp.$parent
            if (parentComp.routerViewFlag) {
              depth++
            }
            parentComp = parentComp.$parent
          }

          // 获取匹配中的渲染组件进行显示
          this.getMatchedComp(this.$router.currentLink, depth)

          const currentMatchedComp = matchedRouteList[depth - 1]
          if (currentMatchedComp) return h(currentMatchedComp)
          else return null
        },
      })
  }
}

export default Router
