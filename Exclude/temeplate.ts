type MyExclude<T, U> = T extends U ? never : T;

/* extends 关键字的两种语境
  1. 泛型约束里的 extends  
    - 用来判断泛型是否符合某种条件
    - 例子： 
      function fn<T extends string>(x: T) {}
      T 必须是 string 或 string 的子类型（字面量）
  2. 条件类型里的 extends（类型判断）
    - 用来判断左边的类型是否可以赋值给右边的类型，返回 true or false
    - 例子： 
      type A = string extends number ? true : false // false


      特别：如果左边满足三个条件：
      1. 在条件类型中 
      2. 左边是 裸类型参数（是范型参数 不能包在数组/对象/元组里）
      3. 该类型参数实际是联合类型 
      会进行分发（即遍历判断）
      type Test<T> = T extends string ? 'yes' : 'no'
      type R = Test<'a' | 1 | true>
      实际对比过程：
      Test<'a'>   // 'yes'
      Test<1>     // 'no'
      Test<true>  // 'no'

      再合并：
      type R = 'yes' | 'no'
 */
