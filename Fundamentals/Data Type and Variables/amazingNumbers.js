function amazingNumbers(num) {

    let numText = num.toString();
    let sum = 0

    for (let i = 0; i < numText.length; i++) {
        sum += Number(numText[i]);
    }

    let result = sum.toString().includes('9');
    console.log(result ? `${num} Amazing? True` : `${num} Amazing? False`);

}