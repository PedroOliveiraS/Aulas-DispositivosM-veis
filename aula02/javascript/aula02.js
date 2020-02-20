var languages = ['C', 'C++', 'C#', 'F#', 'Cobol', 'Fortran', 'Java', 'Ruby', 'Python'];
var indexes = [1, 5, 8, 10, 5, 78];

console.log('Tamanho do vetor languages: = ' + languages.length);


// Retorna o indice se encontrar, se não, retornará -1
var index = languages.findIndex(function(value){
    return value == 'Java';
})




function findInArray(array, valueToFind){
    var index = array.findIndex(function(value){
        return value === valueToFind;
    });

    if(index === -1){
        console.log('Não foi encontrado no vetor');
    } else{
        console.log('Foi encontrado no index ' + index);
    }
}

findInArray(languages, 'Java');
findInArray(languages, 'C#');
findInArray(languages, 'qweqweqwe');


var result = languages.find(function (value){
    return value === 'Java';
});

if(result){
    console.log('Encontrou o resultado', result);
} else{
    console.log('Não encontrou o resultado');
}

console.log(result);

var users = [
    { id: 7, name: 'João'},
    { id: 5, name: 'Maria'},
    { id: 781, name: 'Goku'},
    { id: 74, name: 'Uzumaki N.'},
];

var foundUser = users.find(function(user){
    return user.id === 781;
});

if(foundUser){
    console.log('Usuário encontrado: ' + foundUser.name);
}

// Adiciona um item no final do vertor
users.push({ id: 4, name: 'Blastoise'});
console.log(users);

// Remove o último elemento do vetor e retorna ele
var removedItem = users.pop();
console.log(users);
console.log('Elemento removido', removedItem);

// Remove o primeiro elemento do vetor
users.shift();
console.log(users);

//Adiciona um item no início do vetor
users.unshift({ id: 1, name: 'Primeiro'});