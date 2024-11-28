const numPlusWord = (num) => {
    if (num % 10 === 1 && num !== 11){
        return num + " компьютер"
    }

    else if ((num % 10 === 2 || num % 10 === 3 || num % 10 === 4 ) && (num !== 12 && num !== 13 && num !== 14)){
        return num + " компьютера"
    }

    else {
        return num + " компьютеров"
    }
}

console.log(numPlusWord(1048))

