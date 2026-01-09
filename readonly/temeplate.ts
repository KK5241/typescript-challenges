type MyReadonly<T> = {
    readonly [P in keyof T]: T[P];
}

// 类型声明时可以指定只读