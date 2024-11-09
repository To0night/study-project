// tsc 文件目录  通过ts生成js文件
// 基本类型
var isActive = false;
var age = 18;
var firstName = "wzp";
// 数组与元组
var numbers = [1, 2, 3];
var strings = ["a", "b", "c"];
// 元组（Tuple）：允许在数组中存储不同的数据类型的数据
var person = [1, "a", 3, 4];
var user = {
    name: "zzz",
    age: 18,
    sex: "男",
    grade: "一年级",
    subject: "数学",
    achievement: "中等",
    fraction: 78,
};
var userId;
userId = 123;
userId = "abc";
// 联合类型 |
var value;
value = 123;
value = "abc";
var ccc = {
    name: "www",
    age: 18,
    grade: "一年级",
    fraction: 88,
};
// 字面量类型
var change = "change";
var abc;
abc = "hello";
abc = "world";
// 类型推导
var name1 = "Alice"; // 自动推导为 string
var count1 = 10; // 自动推导为 number
// 类型断言 as 知道某个值的类型，但是 TypeScript 不能自动推导时，可以使用类型断言来告诉 TypeScript 变量的具体类型
var someValue = "sss";
var strLength = someValue.length;
// 泛型 (Generics) 在定义函数、类或接口时，使用类型占位符
function identity(value) {
    return value;
}
var identity1 = identity("hello"); // strings
var identity2 = identity(123); // number
// 枚举 (Enum) 用于定义一组命名常数
var Direction;
(function (Direction) {
    Direction[Direction["up"] = 1] = "up";
    Direction[Direction["down"] = 2] = "down";
    Direction["left"] = "aa";
    Direction["right"] = "bb";
})(Direction || (Direction = {}));
var dir1 = Direction.up; // 1
var dir2 = Direction.left; // 'aa'
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
