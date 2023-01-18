const arr = [10, 2, 2, 2, 2, 2, 3, 8, 6];
function count(number, arr){
    let location = arr.indexOf(number)
    // Su dung hoi quy
    if (location === - 1){
        return -1;
    } else {
        if (arr.slice(location+1).indexOf(number) === -1) {
            return 1;
        } else {
            return 1 + count(number, arr.slice(location+1));
        }
    }
}

console.log(count(1,arr));