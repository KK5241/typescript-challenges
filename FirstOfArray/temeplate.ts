// 解法1. 利用indexed 
// type First<T extends any[]> = T['length'] extends 0 ? never : T[0] 
// 解法2. 利用extends
type First<T extends any[]> = T extends [] ? never : T[0]

type arr = [11,23,4,4]
type a = arr[number]
