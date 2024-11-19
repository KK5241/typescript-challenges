type MyPick<T, K extends keyof T> = {
  [p in K]: T[p];
};
 
//  K extends keyof T   对应到测试中   ['title' | 'complete'] extends ['title' | 'description' | 'completed']