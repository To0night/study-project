/* 

类的基本使用 
class studentClass {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

类的继承 注意子类继承父类必须要使用super调用父类的构造方法继承父类的this,因为子类并没有自己的this
class PersonClass {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class StudentClass extends PersonClass {
  age: number;
  constructor(name: string, age: number) {
    super(name);
    this.age = age;
  }
}

类的修饰符 
private 仅在类内部使用 ,外部和子类均不可使用 
protect 仅在类和子类中使用  外部不能使用
public  类 子类 外部 均可使用
static  类的静态属性 仅可以通过类来调用

class PersonClass {
  public name: string;
  protected age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class StudentClass extends PersonClass {
  private grades: number;
  constructor(name: string, age: number, grades: number) {
    super(name, age);
    this.grades = grades;
  }
}


抽象类 作为其他类的基类使用 规定了其子类必须要实现的函数

*/

// enum   {
//   "chinese" = "中文",
//   "japanese" = "日文",
//   "english" = "英语",
// }

// abstract class PersonClass {
//   constructor(public name: string, public age: number) {}
//   abstract say(params_1: languageMap): void;
// }

// class StudentClass extends PersonClass {
//   constructor(name: string, age: number) {
//     super(name, age);
//   }
//   say(language: languageMap): void {
//     console.log(`我叫${this.name},我今年${this.age}岁了，我使用${language}`);
//   }
// }

// let student = new StudentClass("王鑫晟", 24);
// student.say(languageMap.chinese);
