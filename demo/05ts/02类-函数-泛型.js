var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 函数类型
function fun(num, str) {
    return "asd";
}
// class类和继承
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.move = function () {
        console.log(this.name + "is moving");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this; // 调用父类构造函数
    }
    Dog.prototype.bark = function () {
        console.log("Woof!");
    };
    return Dog;
}(Animal));
var dog = new Dog("Rex");
dog.bark(); // Woof!
dog.move(); // Rex is moving.
// 泛型 (Generics) 在定义函数、类或接口时，使用类型占位符
// 允许在声明时使用类型参数，从而使得函数能够接受和返回不同类型的值
// T 是一个类型参数，它代表了传递给函数的 value 的类型。T 的类型由函数调用时传递的参数类型来推断。
// 泛型函数
function fun1(value) {
    return value;
}
var num1 = fun1(111); // 推断 T 为 number
var str1 = fun1("aaa"); // 推断 T 为 string
// 泛型类
var Box = /** @class */ (function () {
    function Box(value) {
        this.value = value;
    }
    Box.prototype.getValue = function () {
        return this.value;
    };
    Box.prototype.setValue = function (value) {
        this.value = value;
    };
    return Box;
}());
var strBox = new Box("hello");
var numBoc = new Box(123);
var num2 = {
    value: 123,
};
var str2 = {
    value: "aaa",
};
function getLength(val) {
    return val.length;
}
console.log(getLength([1, 2, 3]), getLength("abcde"));
// implements 关键字用于实现接口（interface），它指定一个类必须遵循某个接口的结构，确保类包含接口中定义的所有属性和方法
var abc = /** @class */ (function () {
    function abc() {
    }
    abc.prototype.func = function (input) {
        return parseFloat(input);
    };
    return abc;
}());
var pairNum = [1, 2, 3];
// 内置泛型类型，如Array<T>、Promise<T> 
fucntion;
fetchDate(url, string);
Promise < T > {
    return: new Promise(function (resolve, reject) {
        resolve(url);
    })
};
fetchData("https://api.example.com/user")
    .then(function (data) {
    console.log(data.name);
});
