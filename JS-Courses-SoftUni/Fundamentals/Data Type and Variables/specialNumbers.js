function specialNumbers(num){

    let sum = 0;
    let result = '';
    for(let i = 1; i <= num; i++){
        i = i.toString();
        for(let x = 0; x < i.length; x++){
            sum += Number (i[x])
        }
        result = sum === 5 || sum === 7 || sum === 11;
        console.log(result ? `${i} -> True` : `${i} -> False`);
        sum = 0
    }

}