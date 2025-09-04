function myNew(constructor, ...args) {
    let obj = {}
    Object.setPrototypeOf(obj, constructor.prototype)
    const result = constructor.call(obj, ...args)
    return result instanceof 'object' ? result : obj
}