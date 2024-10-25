// 普通接口使用示例 使用该接口实现的对象必须含有接口内的属性
// interface studentInterface {
//   name: string;
//   age: number;
// }

// let student: studentInterface = { name: "wxs", age: 14 };
// console.log(student);

// 可选接口使用示例 使用该接口实现的对象可以不包括可选参数的属性
// interface studentInterface {
//   name: string;
//   age?: number;
// }

// // 只读属性接口实例 仅可在初始化时 设置初始值
// interface studentInterface {
//   readonly name: string;
// }

// // 函数类型接口 校验函数参数及返回值 以下示例为函数参数1，2必须为string类型 返回值必须为boolean类型
// interface fnInterface {
//   (params_1: string, params_2: string): boolean;
// }

// // 可索引类型接口 校验具有索引的数据结构的接口（就是数组）
// interface indexInterface {
//   [index: number]: string;
// }

// // 类类型接口 校验类的接口

interface studentInterface {
  name: string;
  age: number;
}

class StudentClass implements studentInterface {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

// // 需要注意的是类接口仅校验类的实例属性及方法，并不校验其静态属性及方法 构造函数属于静态方法，并不能直接校验
// // 所以需要校验类的构造函数时需要另外的接口（重点理解并记忆）
// interface studentInterface {
//   name: string;
//   age: number;
// }

// interface studentConstructor {
//   new (params_1: string, params_2: number): studentInterface;
// }

// function studentFactory(
//   studentFn: studentConstructor,
//   name: string,
//   age: number
// ) {
//   return new studentFn(name, age);
// }

// class studentClass {
//   name: string;
//   age: number;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }
// const student = studentFactory(studentClass, "wxs", 24);

// // 接口继承接口  有利于大型项目的工程化开发 继承方法和类相似
// interface personInterface {
//   name: string;
// }
// interface studentInterface extends personInterface {
//   grades: number;
// }

// 接口继承类 需要特别注意的是  如果接口继承的类中含有protect和private标明的字段 那么此接口只能被该类的子类所实现
