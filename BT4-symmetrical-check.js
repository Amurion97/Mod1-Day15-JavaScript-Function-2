let str = "AcA";
let str2 = "AABBAA";
function checkSymmetric(word){
    if (word.length < 1){
        return true;
    } else if (word[0] !== word[word.length-1]) {
        return false;
    } else {
        return checkSymmetric(word.slice(1, word.length-1));
    }
}

console.log(checkSymmetric(str))
console.log(checkSymmetric(str2))
alert(checkSymmetric(prompt("Nhap chuoi can kiem tra tinh doi xung: ")))