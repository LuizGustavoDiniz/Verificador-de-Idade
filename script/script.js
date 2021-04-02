var anoN = document.querySelector('#dataN')
var fem = document.querySelector('#femi')
var mas = document.querySelector('#masc')
var buttn = document.querySelector('#btn')
var img = document.querySelector('#image')
var parag = document.querySelector('#para')

buttn.addEventListener('click', calcular)

function calcular(){
    var sexoF = fem.checked
    var sexoM = mas.checked
    var anoAtual = 2021
    var res = (anoAtual-anoN.value)
    if(res >= 1 && res <=14 && sexoF==true){
        parag.innerHTML = `Detectamos Mulher com ${res} anos`
        img.src = "/imagens/menina12.jpg"
    }else if (res <=14 && sexoM==true){
        parag.innerHTML = `Detectamos homem com ${res} anos`
        img.src = "/imagens/menino13.jpg"
    }

}
//ainda estou trabalhando nele