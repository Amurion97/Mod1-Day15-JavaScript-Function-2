function calculateFactorial(number){
    if ((number < 1)|| (isNaN(number))) {
        return 0;
    } else if (number === 1) {
        return 1;
    } else {
        return number*calculateFactorial(number-1);
    }
}
alert(calculateFactorial(parseInt(prompt("Nhap so can tinh giai thua: "))));