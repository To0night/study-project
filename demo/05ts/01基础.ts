// tsc 文件目录  通过ts生成js文件
// 基本类型
let isActive: boolean = false;
let age: number = 18;
let firstName: string = "wzp";

// 数组与元组
let numbers: number[] = [1, 2, 3];
let strings: Array<string> = ["a", "b", "c"];
// 元组（Tuple）：允许在数组中存储不同的数据类型的数据
let person: [number, string, number, number] = [1, "a", 3, 4];

// 接口 (Interface)
// 用于定义对象的结构，强制约束对象的形状，常用于扩展（extends）和声明合并
interface Person {
  name: string;
  age: number;
}
interface Person {
  sex: string;
}
interface Student extends Person {
  grade: string;
  subject: string;
  achievement: string;
  fraction: number;
}

const user: Student = {
  name: "zzz",
  age: 18,
  sex: "男",
  grade: "一年级",
  subject: "数学",
  achievement: "中等",
  fraction: 78,
};

// 类型别名 type
type ID = string | number;
let userId: ID;
userId = 123;
userId = "abc";

// 联合类型 |
let value: string | number;
value = 123;
value = "abc";

// 交叉类型 &
type aaa = {
  name: string;
  age: number;
};
type bbb = {
  grade: string;
  fraction: number;
};
let ccc: aaa & bbb = {
  name: "www",
  age: 18,
  grade: "一年级",
  fraction: 88,
};

// 字面量类型
let change: "change" = "change";
let abc: "hello" | "world";
abc = "hello";
abc = "world";

// 类型推导
let name1 = "Alice"; // 自动推导为 string
let count1 = 10; // 自动推导为 number

// 类型断言 as 知道某个值的类型，但是 TypeScript 不能自动推导时，可以使用类型断言来告诉 TypeScript 变量的具体类型
let someValue: any = "sss";
let strLength: number = (someValue as string).length;

// 泛型 (Generics) 在定义函数、类或接口时，使用类型占位符
// 允许在声明时使用类型参数，从而使得函数能够接受和返回不同类型的值
// T 是一个类型参数，它代表了传递给函数的 value 的类型。T 的类型由函数调用时传递的参数类型来推断。
function identity<T>(value: T): T {
  return value;
}
let identity1 = identity("hello"); // strings
let identity2 = identity(123); // number

// 枚举 (Enum) 用于定义一组命名常数
enum Direction {
  up = 1,
  down = 2,
  left = "aa",
  right = "bb",
}
let dir1: Direction = Direction.up; // 1
let dir2: Direction = Direction.left; // 'aa'

// 配置 TypeScript (tsconfig.json)
/*
tsconfig.json 
{
  "compilerOptions": {
    "target": "es5",  // 编译为 ES5 代码
    "module": "commonjs",  // 模块系统
    "strict": true  // 启用严格模式
  }
}
*/
