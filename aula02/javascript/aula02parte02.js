function explicacaoJson(){
    var users =[
        { name: 'Clodovil Cunha', age: 37},
        { name: 'Gretchen Poderosa', age: 60},
        { name: 'Inês Brasil', age: 50}
    ];
    
    var user = { name: 'Charmander', age: 1};
    console.log(users);
    
    //JSON.Stringify -> Converte um objeto/array para JSON (string)
    console.log(JSON.stringify(users));
    //JSON  Java Script Object Noation
    /* Padrão do JSON
    [{"name":"Clodovil Cunha","age":37},{"name":"Gretchen Poderosa","age":60},
    {"name":"Inês Brasil","age":50}]
    */
    
    //{"name":"Charmander","age":1}
    console.log(JSON.stringify(user));
    
    //JSON.parse -> Converte um json (string) em um objeto/array
    var pokemon = JSON.parse('{"name":"Charmander","age":1}');
    console.log(pokemon);
}

//explicacaoJson();

// Promises
var myPromise = function(username){
    return new Promise(function(resolve, reject){
        // resolve -> Função que será chamada se iver sucesso
        // reject -> Função que será chamada se houver erros
        
        //Requsiçao assíncrona
        var xhr = new XMLHttpRequest();

        // xhr.open(TIPO DA REQUISIÇÃO, URL)
        xhr.open('GET', 'https://api.github.com/users/' + username);

        //xhr.send(Parâmero da requisição)
        xhr.send(null);

        //Pegar a informação quando a requisição estiver pronta
        xhr.onreadystatechange = function (){
            // 4 -> Operação concluida (Pronta)
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                    //200 -> ID de sucesso
                    var response = JSON.parse(xhr.responseText);
                    resolve(response.id);
                } else{
                    reject('Erro na requisição');
                }
            }
        }
    });
}

myPromise('wladimirOSZ')
.then(function(response){
    console.log(response);
})
.catch(function(error){
    console.log(error);
});

axios.get('https://api.github.com/users/PedroOliveiraS')
.then(function(response){
    console.log("axios", response);
    console.log(response.data);
})
.catch(function(error){
    console.log("axios", error);
});

setInterval(function(){
    console.log('Código que será executado após 3s');
},3000); // 3 segundos -> 3000ms