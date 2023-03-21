console.log(1);

setTimeout(() => {
    console.log(2);
}, 0);

new Promise((res, rej) => {
    console.log(10);
    res(2);
})
.then((n) => console.log(n))

console.log(3);

// Promise.all()



function fillPromises (n) {
    const promises = [];

    for(let i = 0; i < n; i++) {
        const promise = new Promise((resolve, reject) => {
            const timeOfExecution = (i + 1) * 1000;
            console.log(timeOfExecution);
            setTimeout(() => {
                resolve(timeOfExecution);
            }, timeOfExecution)
        });

        promises.push(promise);
    }

    return promises;
}

// Promise.all(fillPromises(3))
// .then(() => console.log("We are done!!!"))
// .catch(() => console.log("Error"))

Promise.race(fillPromises(4))
.then((timeOfExecution) => console.log(`Time:`, timeOfExecution))


// 1.  Змінити логіку функціх так, щоб час виконання промісу залежав від номеру ітерації вашого циклу