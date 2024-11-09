// 函数类型
function fun(num: number, str: string): string {
  return "asd";
}

// class类和继承
class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  move() {
    console.log(this.name + "is moving");
  }
}
class Dog extends Animal {
  constructor(name: string) {
    super(name); // 调用父类构造函数
  }
  bark() {
    console.log("Woof!");
  }
}
const dog = new Dog("Rex");
dog.bark(); // Woof!
dog.move(); // Rex is moving.

// 泛型 (Generics) 在定义函数、类或接口时，使用类型占位符
// 允许在声明时使用类型参数，从而使得函数能够接受和返回不同类型的值
// T 是一个类型参数，它代表了传递给函数的 value 的类型。T 的类型由函数调用时传递的参数类型来推断。
// 泛型函数
function fun1<T>(value: T): T {
  return value;
}

let num1 = fun1<number>(111); // 推断 T 为 number
let str1 = fun1<string>("aaa"); // 推断 T 为 string

// 泛型类
class Box<T> {
  value: T;
  constructor(value: T) {
    this.value = value;
  }
  getValue(): T {
    return this.value;
  }
  setValue(value: T) {
    this.value = value;
  }
}
let strBox = new Box<string>("hello");
let numBoc = new Box(123);

// 泛型接口 适用于不同类型的接口
// 两个类型参数T和U，用于定义输入类型和输出类型。
interface aaa<Type> {
  value: Type;
}
let num2: aaa<number> = {
  value: 123,
};
let str2: aaa<string> = {
  value: "aaa",
};

// 泛型约束 确保属性存在
interface HasLength {
  length: number;
}
function getLength<Type extends HasLength>(val: Type): number {
  return val.length;
}
console.log(getLength([1, 2, 3]), getLength("abcde"));

// 检查对象key： 多重泛型，两个泛型参数T和U
interface bbb<T, U> {
  func(input: T): U;
}
// implements 关键字用于实现接口（interface），它指定一个类必须遵循某个接口的结构，确保类包含接口中定义的所有属性和方法
class abc implements bbb<string, number> {
  func(input: string): number {
    return parseFloat(input);
  }
}

// 泛型类型别名
type Pair<T> = [T, T, T];
let pairNum: Pair<number> = [1, 2, 3];

// 内置泛型类型，如Array<T>、Promise<T> 
/*
function fetchData<T>(url: string): Promise<T> {
  return fetch(url).then(response => response.json());
}
fetchData<{ name: string }>("https://api.example.com/user")
  .then(data => {
    console.log(data.name);
  });

*/