export const delay = (seconds = 1) => {
    return new Promise((resolve, reject)=> {
        setTimeout(() => resolve(), seconds * 1000);
    })
}