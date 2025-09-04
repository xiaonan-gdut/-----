//选择排序的核心思想是：每一轮都找出最小的元素，将其放到已排序部分的末尾。
function selectSort(arr){
    for(let i = 0; i < arr.length - 1; i++){
        let minIndex = i
        for(let j = i + 1 ; j < arr.length; j++){
            if(arr[minIndex] > arr[j])
            minIndex = j
        }
        //进行优化
        if(minIndex !== i){
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
        }
    }
    return arr
}