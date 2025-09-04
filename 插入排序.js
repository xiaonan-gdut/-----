function insertSort(arr) {
    for(let i = 1; i < length - 1; i++){
        let j = i
        let target = arr[j]
        while(j > 0 && target < arr[j-1])
        {
            arr[j] = arr[j - 1]
            j--
        }
        arr[j] = target

    }
    return arr
}