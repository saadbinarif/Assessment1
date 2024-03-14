function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = 'Hello';
            resolve(data);
        }, 1000)
    })
}
function processData(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const processedData = data + ' World';
            resolve(processedData);
        }, 1000)
    })
}
function displayData(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(data);
            resolve();
        }, 1000)
    })
}
// async function display() {
//     try {
//         const data = await fetchData();
//         const processedData = await processData(data);
//         const display = await displayData(processedData);
//         console.log('Process complete');
//     }
//     catch (err) {
//         console.log(err);
//     }
// }

fetchData()
.then(res => {
    return processData(res)
})
.then(res => {
    return displayData(res)
})
.then(console.log("process Complete"))
