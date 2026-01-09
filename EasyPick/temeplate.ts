type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

/* 
  in 关键字的两个使用场景
  1. 用于检查某个类型是否在联合类型中 比如： 'name' in 'name' | 'age' // true
  2. 用于映射类型的遍历 比如上面的例子 [P in K]: T[P] 


  keyof 操作符
  用于获取某个类型的所有键，返回一个联合类型
  比如：
    interface Person {
      name: string;
      age: number;
    }
    type PersonKeys = keyof Person; // 'name' | 'age'

  k extends keyof T 的作用
  用于约束泛型 K 必须是 T 的键的子集
  比如：
    interface Person {
      name: string;
      age: number;
    }

    // 下面的类型定义是合法的
    type PickName = MyPick<Person, 'name'>; // { name: string }
    type PickAge = MyPick<Person, 'age'>;   // { age: number }

    // 下面的类型定义会报错，因为 InvalidKey 不是 Person 的键
    type PickInvalid = MyPick<Person, 'gender'>; // Error
*/