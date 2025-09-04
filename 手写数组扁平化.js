//先转成字符串，在转成数组
function myFlat(arr) {
    return arr.toString().split(',').map(item => {
        return parseInt(item)
    });
};
//递归写法
function myFlat1(arr){
    let result = []
    arr.forEach(item => {
        if(Array.isArray(item)){
            result = result.concat(myFlat1(item))
        }
        else {
            result.push(item)
        }
    })
    return result
}