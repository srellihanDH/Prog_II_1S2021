module.exports = (t) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Pasaron ${t} segundos.`);
        }, t*1000)
    })
};
