<script>
    // Declaração de variáveis
    var number = 5;
    var floatNumber = 1.9;
    var nam = 'My name';
    var name = 'João';
    var canShow = false;
            
    // Criar arrays
    var array = [1, 2, 3, 4, 5];
    var array2 = ['A', 'B', 'C'];
    var array3 = [1, "B", 5.6, false];


    //Criar Matriz
        var arrayMulti = [
            [1, 2,7],
            [3, 4],
            [5, 6]
        ];;

        <h1> h </h1>
    // Imprimindo Variáveis
    console.log('Hello Word');
        
    console.log(number);
    console.log('Number = ' + number);
    console.log('Name', name);
    console.log(number, floatNumber, name, canShow);


            console.log(array);
            console.log(array2);
            console.log(array3);

            console.log(arrayMulti);

            console.log(array.length);
            console.log(arrayMulti[0].length);

            // Operações aritméticas
            var n1 = 5;
            var n2 = 10;
            var resultado = n1 + n2;
            var resultado2 = n2 - n1;
            var resultado3 = n1 * n2;
            var resultado4 = n2 / n1;
            var resultado5 = n2 % n1; // Resto
            
            var rstring = "10" -3;

            console.log(resultado, resultado2, resultado3, resultado4, resultado5);
            console.log(rstring);  
            
            
            // Condições
            var age = 15;
            if(age == 15){
                console.log("Idade é 15");
            }

            var id = "10";

            // Com === verifica TIPO DA VARIÁVEL e DADO
            if(id === 10){
                console.log("ID é 10");
            }
            
            // !== Tipo e Dado
            if (id !== 10){
                console.log("ID é diferente de 10");
            }


            // Id maior ou igual a 10 e id menor ou igual a 20 ou idade igual a 1
            if (id >= 10 && id <= 20 || age === 1){
                console.log("ID está enre 10 e 20");
            }

            // 
            var myVar = false;
            var potato; // Se não definir, valor se torna undefined
            console.log(potato);
            var pudim = null; 
            console.log(pudim);
            var pimentinha = 0; 
            console.log(pimentinha);
            var var3 = false;

            if (pudim && potato){
                console.log("Verdade");
            } else if (!var3){
                console.log("Falso");
            } else {
                console.log("Outro caso");
            }


            // Condições ternárias
            var nome = "João";
            //             Condição  ?  Caso seja Verdadera  : Caso não seja
            var text = (name === "João") ? "João & Maria" : "Não tem João";
            console.log(text);

            var n1 = 5;
            var result = (n1 >= 10) ? 10 : 0;
            console.log(result);

            // Objeto
            var person = {
                name: "Maria",
                sexo: "feminino",
                idade: 27,
                endereco: {
                    rua: "Rua Vinte e Quatro",
                    numero: 123,
                    referencias: ["perto da antena", "Do lado da loja x"]
                },
                display: function(){
                    console.log("oi meus caros amiguitos");
                }
            };

            person.display();
            
            person.name = "Maria da Silva Ferreira";

            console.log(person.idade);
            console.log(person.endereco.rua);
            console.log(person);


            var nome = person["nome"];  // person.nome 
            var propriedade = "endereco";
            var rua = person[propriedade]["rua"]; // person.endereco.rua
            console.log(nome + "\n " + rua);
            console.log(person.endereco.referencias[1]);
            console.log(person["endereco"].referencias[1]);

            // Funções
            function printMessage(mensagem){
                if(!mensagem){
                    console.log("Sem mensagem");
                }else{
                    console.log(mensagem);
                }
            }

            printMessage();

            function calculate(n1, n2){
                return n1 * n2;
            }

            printMessage(calculate(20,30));


            // Criando fuções como variáveis

            var printMessage2 = function (message) {
                console.log("Texto: " + message);
            }

            printMessage2();

            var calculate2 = function (n1, n2){
                printMessage2("Olá, tudo bem?");
                var color = "azul";
                return n1 / n2;
            }

            // Cria uma função que recebe um valor (mensagem) como parametro,
            // e usa a função responsável por imprimir uma mensagem
            var print = function(value, printFunction, user){
            //    console.log(printFunction);
                printFunction(value);
                console.log(user);
                user.display();
            }

            print("Alohomora",printMessage2, person);

            var array = [1, 2, 3, 47, 90, -1];
            var count = 0;
            while(count <= 2){
                console.log("Count = " + count);
                count++; // count = count +1;
            }

            var count2 = 0;
            do{
                console.log("Count2 = " + count2);
                count2++;
            }while(count2 <= 2);

    for(var i = 0; i<4; i++){
        console.log("i = " + i);
    }
            
    console.log("For decrescente: ");
    for(var i =50; i>= 20;i -= 10){
        console.log("i = " + i);
    }

    //variavel++ -> primeiro usa o valor da variável e depois faz o acréscimo
    var linha = 1;
    console.log("Linha =", linha++);
    console.log("Lnha após = ", linha); 

    // ++variável -> primeiro faz o acréscimo e só depois usa a variável
    var coluna = 1;
    console.log("Coluna =", ++coluna);
    console.log("Coluna após = ", ++coluna); 
</script>