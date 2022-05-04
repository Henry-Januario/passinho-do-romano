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


function codificar(){
    if (select.value == "2") {
        codificarEDecodificarBase()
    } else if (select.value == "3"){
        codificarEDecodificarCesar()
    }

}


/* Essa função está sem chamar no html */
function codificarEDecodificarBase() {
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

function codificarEDecodificarCesar() {
    var codificar = document.querySelector('#codificar')
    var decodificar = document.querySelector('#decodificar')
    var entrada = document.querySelector("#entrada").value.toLowerCase()
    var passo = document.querySelector('#passo').value
    var numInt = parseInt(passo)
    var res = ''
    var alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", " ",]

    if (select.value == "3" && codificar.checked) {
        for (var i = 0; i < entrada.length; i++) {
            if (entrada[i] != '') {
                for (let j = 0; j < alfabeto.length; j++) {
                    if (entrada[i] == alfabeto[j]) {
                        res += alfabeto[(j + numInt) % alfabeto.length]
                    }

                }
            } else {
                res += ''
            }
        } 
        document.querySelector('#saida').innerHTML = `${res}`;
        return res

    } else if (select.value == "3" && decodificar.checked){
        for (let i = 0; i < entrada.length; i++) {
            if (entrada[i] != " ") {
                for (let j = 0; j < alfabeto.length; j++) {
                    if (entrada[i] == alfabeto[j] && (j - numInt) % 26 >= 0) {
                        res += alfabeto[(j - numInt) % alfabeto.length]
                    }
                    else if (entrada[i] == alfabeto[j] && (j - numInt) % 26 < 0) {
                        res += alfabeto[alfabeto.length + (j - numInt) % alfabeto.length]
                    }
                }
            }
            else {
                res += " ";
            }
        }
        document.querySelector('#saida').innerHTML = `${res}`
        return res
    }
    
}
