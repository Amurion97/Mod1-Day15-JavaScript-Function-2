function reverseArray(arr) {
    let length = arr.length;
    for (let i = 0; i < length / 2; i++) {
        let temp = arr[i];
        arr[i] = arr[length - 1 - i];
        arr[length - 1 - i] = temp;
    }
    return arr;
}
const arr = [10, 2, 3, 8, 6];
// const arr1 = [1, 2, 3, 4, 5];
// console.log(arr1);
console.log(arr);
reverseArray(arr);
// console.log(arr[0])
// console.log(arr);