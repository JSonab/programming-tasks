const multiplicationTable = (num) => {
    if (num < 1){
        console.log("Введите число больше 0")
        return
    }

    for(let i = 1; i <= num; i++){
        let row = "";
        for (let j = 1; j <= num; j++){
            row += `${i*j} `
        }
        console.log(row)
    }
}

multiplicationTable(5)