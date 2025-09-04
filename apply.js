Function.prototype.myCall(context, ...args){
    context = context || globalThis
    let fn = Symbol()
    const result = context[fn](...args)
    delete context[fn]
    return result
}