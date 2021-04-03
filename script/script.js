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
    if(res >= 9 && res <=15 && sexoF==true){
        parag.innerHTML = `<strong>Detectamos Mulher com ${res} anos</strong>`
        img.src = "/imagens/menina12.jpg"
    }else if (res <=15 && sexoM==true){
        parag.innerHTML = `<strong>Detectamos homem com ${res} anos </strong>`
        img.src = "/imagens/menino13.jpg"
    }else if(res >=16 && res <= 39 && sexoF==true){
        parag.innerHTML =`<strong>Detectamos Mulher com ${res} anos</strong>`
        img.src = "/imagens/adulta26.jpg"
    }
    else if(res >=16 && res <= 39 && sexoM==true){
       parag.innerHTML= `<strong>Detectamos homem com ${res} anos </strong>`
       img.src = "/imagens/adulto25.jpg"
    }
    else if(res >= 40 && res <= 59 && sexoF==true){
        parag.innerHTML =`<strong>Detectamos Mulher com ${res} anos</strong>`
        img.src = "/imagens/Mmeiaidade51.jpg"
    }
    else if(res >= 40 && res <= 59 && sexoM==true){
        parag.innerHTML = `<strong>Detectamos homem com ${res} anos </strong>`
        img.src = "/imagens/Hmeiaidade50.jpg"
    }else if(res >= 60 && sexoM==true){
        parag.innerHTML = `<strong>Detectamos homem com ${res} anos </strong>`
        img.src = "/imagens/velho70.jpg"
    }
    else if(res >=60 && sexoF==true){
        parag.innerHTML =`<strong>Detectamos Mulher com ${res} anos</strong>`
        img.src = "/imagens/velha71.jpg"
    }
    
}
