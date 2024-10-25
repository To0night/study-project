class xVue {
  constructor({ el, data }) {
    this.$renderDom = document.querySelector(el)
    this.$data = typeof data === "function" ? data() : data
    // 响应式数据
    this.observe(this.$data)
    // 代理数据到vue实例上
    this.proxyData(this.$data)
    // 渲染模板函数
    this.render()
  }

  observe(data) {
    Object.entries(data).forEach(([key, value]) => {
      this.defineReactive(data, key, value)
    })
  }

  // 覆盖数组方法
  reWriteArrayMethod(dep = null) {
    Array.prototype.push = function (...payload) {
      // 辅助copyList，和this指向同一片内存区域
      payload.forEach((pushItem) => {
        this[this.length] = pushItem
      })

      this.isVueData && dep && dep.notice(this)
      return this.length
    }
  }

  isXmodel(attributes) {
    return attributes.find((attr) => (attr.node = "x-model"))?.nodeValue
  }

  defineReactive(data, key, value) {
    const dep = new Dep()

    if (this.isArray(value)) {
      Object.defineProperty(value, "isVueData", {
        get() {
          return true
        },
      })
      this.reWriteArrayMethod(dep)
    }
    if (this.isObject(value)) this.observe(value)
    Object.defineProperty(data, key, {
      get() {
        if (Dep.currentWatch) dep.addWatcher(Dep.currentWatch)
        return value
      },
      set(newValue) {
        value = newValue
        dep.notice(newValue)
      },
    })
  }

  proxyData(data) {
    Object.keys(data).forEach((key) => {
      Object.defineProperty(this, key, {
        get() {
          return this.$data[key]
        },
        set(newValue) {
          this.$data[key] = newValue
        },
      })
    })
  }

  isObject(data) {
    return typeof data === "object" && !Array.isArray(data)
  }

  isArray(data) {
    return typeof data === "object" && Array.isArray(data)
  }

  xBindValue(node, reactiveKey) {
    new Watcher(this, reactiveKey, (newValue) => {
      node.value = newValue
    })
    node.value = this[reactiveKey]
  }

  onChange(node, reactiveKey) {
    console.log(node)
    node.addEventListener("input", (event) => {
      this[reactiveKey] = event.target.value
    })
  }

  render() {
    const childNodes = this.$renderDom.childNodes
    const TEMP_REG_EXP = /\{\{([\s\S]+)\}\}/
    Array.from(childNodes).forEach((node) => {
      if (node.nodeType === 3) {
        if (!node.originalHtml) node.originalHtml = node.nodeValue
        TEMP_REG_EXP.test(node.originalHtml)
        const keyValue = RegExp.$1
        new Watcher(this, keyValue.trim(), (newValue) => {
          this.renderTextNode(node, keyValue, newValue)
        })
        this.renderTextNode(node, keyValue, this[keyValue.trim()])
        Dep.currentWatch = null
      } else {
        // dom节点
        const attributes = Array.from(node.attributes)
        if (this.isXmodel(attributes)) {
          const xModelValue = this.isXmodel(attributes)
          // 执行双向绑定渲染 x-model实际上是x-bind和x-change的语法糖
          // 执行x-bind
          this.xBindValue(node, xModelValue)
          // 执行x-change
          this.onChange(node, xModelValue)
        } else {
          // 走普通渲染
          const TEMP_REG_EXP = /\{\{([\s\S]+)\}\}/
          if (!node.originalHtml) node.originalHtml = node.innerHTML
          TEMP_REG_EXP.test(node.originalHtml)
          const keyValue = RegExp.$1
          new Watcher(this, keyValue.trim(), (newValue) => {
            this.renderElementNode(node, keyValue, newValue)
          })
          this.renderElementNode(node, keyValue, this[keyValue.trim()])
          Dep.currentWatch = null
        }
      }
    })
  }

  renderTextNode(textNode, keyWord, newValue) {
    textNode.nodeValue = textNode.originalHtml.replace(`{{${keyWord}}}`, newValue)
  }

  renderElementNode(node, keyWord, value) {
    node.innerHTML = node.originalHtml.replace(`{{${keyWord}}}`, value)
  }
}

export default xVue

class Watcher {
  constructor(vm, key, callback) {
    this.vm = vm
    this.key = key
    this.callback = callback
    Dep.currentWatch = this
  }
}

class Dep {
  constructor() {
    this.dependencies = []
  }
  addWatcher(w) {
    this.dependencies.push(w)
  }
  notice(newValue) {
    this.dependencies.forEach((w) => {
      w.callback(newValue)
    })
  }
}
