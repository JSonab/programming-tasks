const getDivisors = (numbers) => {
    const minNum = Math.min(...numbers)
    const commonDivisors = []

    for (let i = 1; i <= minNum; i++) {
        if (numbers.every(num => num % i === 0)) {
            commonDivisors.push(i);
        }
    }  

    return commonDivisors;
}

console.log(getDivisors([42, 12, 18]))