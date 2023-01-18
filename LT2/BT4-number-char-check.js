function checkIfNumber(char) {
    if (char.length !== 1) {
        return "Not a letter";
    } else if ((char[0]<"0") || (char[0] > "9")) {
        return false;
    } else {
        return true;
    }
}
alert(checkIfNumber(prompt("Nhap 1 ki tu")))