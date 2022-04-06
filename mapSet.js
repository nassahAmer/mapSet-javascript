console.log('Trabalhando com MAP:\n');

function getAdmins(map) {
    let admins = [];
    for([key, value] of map) {
        if(value === 'Admin') {
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Luiz', 'Admin');
usuarios.set('Leandro', 'Admin');
usuarios.set('Roger', 'Admin');
usuarios.set('Rogério', 'Admin');
usuarios.set('Marcos', 'User');

console.log(getAdmins(usuarios));

console.log('\nTrabalhando com SET:\n');

const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(arr) {
    const mySet = new Set(arr);
    // argumento spread (...mySet) retorna um novo array com os elementos do SET, sem repetições
    return [...mySet];
}
console.log(valoresUnicos(meuArray));