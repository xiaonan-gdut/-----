Function.prototype.myBind = function (context, ...args) {
  context = context || globalThis;
    const fn = Symbol();
    const that = this;
    return function (...newArgs) {
        context[fn] = that;
        const result = context[fn](...args, ...newArgs);
        delete context[fn];
        return result;
    };
};
//call
Function.prototype.myBind1 = function (context, ...args) {
    const that = this;
    return function (...newArgs) {
        return that.call(context, ...args, ...newArgs);
    }
}
//apply
Function.prototype.myBind2 = function (context, ...args) {
    const that = this;  
    return function(...newArgs){
        return that.apply(context,[...args, ...newArgs])
    }
}
