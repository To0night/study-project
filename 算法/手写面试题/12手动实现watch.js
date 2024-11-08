/* 
通过观察者模式来观察对象的变化
创建数据源：使用 Object.defineProperty 或 Proxy 来使对象可观察。
实现 watch 函数：当被观察的属性变化时，调用相应的回调函数。

Vue 类：构造函数接受一个数据对象，并使用 Proxy 代理这个对象，以便拦截对属性的设置操作。
observe 方法：使用 Proxy 来监听对数据的设置。当属性被设置时，如果有对应的 watcher，就会调用它。
watch 方法：用于注册一个回调函数，当被观察的属性变化时，回调函数会被触发。
*/

class Vue {
  constructor(data) {
    this.data = data;
    this.watchers = {};
    // 使用proxy来观察对象
    this.observe(data);
  }
  // 观察数据变化
  observe(data) {
    const self = this;
    this.data = new Proxy(data, {
      set(target, property, value) {
        target[property] = value;
        // 如果有对应的watcher，调用它
        if (self.watchers[property]) {
          self.watchers[property](value);
        }
        return true;
      },
    });
  }
  watch(property, callback) {
    this.watchers[property] = callback;
  }
}

const vm = new Vue({
  name: "jack",
  age: 18,
});

vm.watch("name", (newValue) => {
  console.log("newValue change: ", newValue);
});

vm.data.name = "danial";
