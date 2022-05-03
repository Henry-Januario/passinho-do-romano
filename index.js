/* ■ Um botão que, com "codificar" selecionado exibe o texto "Codificar
Mensagem!" e com "decodificar" selecionado exibe "Decodificar
Mensagem!" */

function mudaBtn() {

    var cod = document.getElementById('codificar')
    var decod = document.getElementById('decodificar')
    var btn = document.getElementById('btn')

    cod.addEventListener('change', function () {
        btn.value = 'Codificar Mensagem!'
    }
    )

    decod.addEventListener('change', function () {
        btn.value = 'Decodificar Mensagem!'
    })
}

/* 
■ Com "cifra de césar" ativo na seleção, um novo campo deve surgir
no formulário para que seja possível fornecer o incremento
utilizado na cifra

 */

/* 

//tentativa de criar um input através da seleção

function abrePasso() {
    var metodo = document.getElementById('metodo')
    var input = document.createElement("input");
    input.setAttribute("type", "number");


    function abre(){
        document.p.appendChild(input)

    }
    metodo.addEventListener('change', abre)
}

 */
/* tentativa de criar um display que suma
function abrePassos() {
    var passos = document.getElementById('passos')
    var base = document.getElementById('metodoBase')
    var cifra = document.getElementById('metodoCifra')

    if (cifra.checked == true) {
        passos.style.display = "inline";

    }else{
        passos.style.display = "none";

    }
}
 */

function abrePassos() {
    var passos = document.getElementById('passos')
    var select = document.querySelector('#select')

    select.addEventListener('click', function () {
        if (select.value == "3") {
            passos.style.display = 'inline'
        } else {
            passos.style.display = 'none'
        }
    })
}





/* Essa função está sem chamar no html */
function codificarBase() {
    var codificar = document.querySelector('#codificar')
    var decodificar = document.querySelector('#decodificar')
    var entrada = document.querySelector('#entrada')
    var saida = document.querySelector('#saida')

    if (select.value == "2" && codificar.checked) {
        saida.value = btoa(entrada.value)
    } else if (select.value = "2" && decodificar.checked) {
        saida.value = atob(entrada.value)
    }

}

