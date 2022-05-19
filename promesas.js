// Fuente: https://levelup.gitconnected.com/a-friendly-guide-to-promise-all-68e7cd57b65d

// Map vs For - https://medium.com/@ExplosionPills/map-vs-for-loop-2b4ce659fb03

console.time('Duracion del Ciclo');

const getUser = (id) => new Promise(
    (resolve) => setTimeout(() => resolve({id}), 1000)
);

const specificIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const JoseMap = specificIds.map((CadaElementoArray) => {
    return CadaElementoArray;
});
console.log(JoseMap);

const loop = async () => {
    const users = [];
    for (let i = 0; i < specificIds.length; i++) {
      const user = getUser(i);
      users.push(user);
    }
    console.log('loop done');
    console.log(users);
};

const all = async () => {
    const promises = specificIds.map((id) => getUser(id));
    const users = await Promise.all(promises);
    console.log('.all done');
    console.log(users);
    console.timeEnd('Duracion del Ciclo');
};

loop();
all();