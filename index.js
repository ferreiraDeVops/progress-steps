const progress = document.getElementById(`progress`)
const retornar = document.getElementById(`prev`)
const avancar = document.getElementById(`next`)
const elementos = document.querySelectorAll(`.circle`)

let contador = 1
//  1
avancar.addEventListener(`click`,()=>{
        contador ++
        //  2
        // se o contador for maior que o cumprimento de elemento
        // então contador sera igual ao cumprimento do elemento
        if (contador > elementos.lenght){
                contador = elementos.lenght
                console.log(`Entrou no if do avançar!`)
        }
        atualizar()
        console.log(elementos)
        console.log(`Numero do contador: `+ contador)

})

retornar.addEventListener(`click`,()=>{
        contador --
        if(contador < 1){
                contador = 1
        }
        atualizar()
        console.log(elementos)
        console.log(`Numero do contador: `+ contador)
})
console.log(contador)
console.log(elementos)
function atualizar(){
        elementos.forEach((elemento,indiceElement)=>{
                // se o indice do elemento for menor que o contador
                if(indiceElement < contador ){
                        elemento.classList.add(`active`)
                }else{
                        elemento.classList.remove(`active`)
                }
        })

        const gren = document.querySelectorAll(`.colorGreen`)
        gren.forEach((elementoAtual,numero)=>{
                numero =  numero + 1
                if(contador === numero){
                        elementoAtual.style.borderColor = "green"
                        progress.style.background ="#3498db"
                }else{
                        elementoAtual.style.borderColor =`#383838`
                }
        })

        const ativar = document.querySelectorAll(`.active`)
        // Aqui voce ajusta o comportamento da barra
        progress.style.width = (ativar.length -1)  /  (elementos.length -1)  * 98 + "%"
        if(contador ===4){
                progress.style.background = "green"
        }else{
                progress.style.background ="#3498db"
        }


        if(contador === 1){
                retornar.disabled = true
        }else if (contador === elementos.length){
                avancar.disabled = true
        }else{
                avancar.disabled = false
                retornar.disabled = false
        }

}



