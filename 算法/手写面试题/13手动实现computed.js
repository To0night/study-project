/* 
实现 Vue 的 computed 属性，可以使用 getter 函数来计算依赖的值，并在依赖变化时自动更新计算结果
创建数据源：使用 Proxy 或者 Object.defineProperty 来观察数据变化。
实现 computed 方法：接受一个 getter 函数，返回计算出的值，并在依赖变化时更新

Vue 类：构造函数接受一个数据对象，并使用 Proxy 代理这个对象，拦截对属性的设置操作。
observe 方法：监听数据的变化。当属性被设置时，更新依赖的回调。
computed 方法：
接受一个 getter 函数，计算属性的值。
使用正则表达式分析 getter 中依赖的数据属性，并将它们存储在 dependencies 中。
在依赖变化时，自动重新计算计算属性的值。
立即计算初始值并返回一个函数，用于获取计算属性的当前值
*/

class Vue {
  constructor(data) {
    this.data = data;
    this.computedValues = {};
    this.dependencies = new Map();
    // 使用proxy来观察数据变化
    this.observe(data);
  }
  observe(data) {
    const self = this;
    this.data = new Proxy(data, {
      set(target, property, value) {
        target[property] = value;
        // 更新依赖
        if (self.dependencies.has(property)) {
          self.dependencies.get(property).forEach((callback) => {
            return callback();
          });
        }
        return true;
      },
    });
  }
  // getter传入的事computed内执行的getter方法
  computed(getter) {
    const computedKey = Symbol();
    const computedValue = () => {
      // 掉用getter，记录依赖
      const value = getter.call(this);
      // 将计算结果存储在computedValues中
      this.computedValues[computedKey] = value;
      return value;
    };
    // 记录依赖
    const dependencies = getter.toString().match(/this\.data\.(\w+)/g);
    if (dependencies) {
      dependencies.forEach((dep) => {
        const prop = dep.split(".")[2];
        if (!this.dependencies.has(prop)) {
          this.dependencies.set(prop, []);
        }
        this.dependencies.get(prop).push(computedValue);
      });
    }
    // 立即计算初始值
    computedValue();
    // 返回初始计算值 错误返回
    // return computedValue();
    // 需要形成闭包，每次都会重新掉用一次，返回缓存数组的对应值，每次更新会改变计算结果数组
    return () => this.computedValues[computedKey];
  }
}

const vm = new Vue({
  firstName: "aaa",
  lastName: "zzz",
});
const realName = vm.computed(function () {
  return `${this.data.firstName} ${this.data.lastName}`;
});
console.log(realName(), "--realName");

vm.data.firstName = "www";
console.log(realName(), "--realName change");
