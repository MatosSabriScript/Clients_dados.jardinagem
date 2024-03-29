const main = document.getElementsByClassName("main")[0]
const botaoSalvar= document.getElementById("botaosalvar")
// console.log("r")

botaoSalvar.addEventListener('click',function(e){
    const nome= document.getElementById("nome")
    const dica= document.getElementById("textarea")
    const email= document.getElementById("email")
    const celular= document.getElementById("celular")

     if(nome.value.length >=3 && dica.value.length >=30 && celular.value.length>=11 && email.value.length>=11){
        e.preventDefault()
        criarDica(nome.value,dica.value,email.value,celular.value)
        apagarInputs()
     }
}) 

function apagarInputs(){
    const nome= document.getElementById("nome")
    const dica= document.getElementById("textarea")
    const email= document.getElementById("email")
    const celular= document.getElementById("celular")
    nome.value=''
    dica.value=''
    email.value=''
    celular.value=''

}

class Dica {
    constructor(nome,dica,email,celular){
        this.nome=nome
        this.dica=dica
        this.email=email
        this.celular=celular
    }
}
    
var dicasSalvas=[]

function criarDica(nome,dica,email,celular){
    const novaDica= new Dica (nome,dica,email,celular)
    dicasSalvas.push(novaDica)
    criarElemento(novaDica)
}

function criarElemento(dica){
    const div= document.createElement("div")
    div.classList.add("card-adicionar")

    const elementoNome= document.createElement("p")
    elementoNome.innerHTML=dica.nome
    elementoNome.classList.add("quebra")

    const elementoDica= document.createElement("p")
    elementoDica.textContent=dica.dica
    elementoDica.classList.add("quebra")
    
    const elementoDiv = document.createElement("div")
    elementoDiv.appendChild(elementoDica)
    elementoDiv.classList.add("paragrafo")

    const elementoEmail= document.createElement("p")
    elementoEmail.innerHTML=dica.email
    elementoEmail.classList.add("quebra")

    const elementoCelular= document.createElement("p")
    elementoCelular.innerHTML=dica.celular
    elementoCelular.classList.add("quebra")

    div.appendChild(elementoNome)
    div.appendChild(elementoDiv)
    div.appendChild(elementoEmail)
    div.appendChild(elementoCelular)
    
   
    const botaoApagar= document.createElement('button')
    botaoApagar.innerHTML= "Apagar"
    botaoApagar.addEventListener('click',function(){
        main.removeChild(div)
        const index = dicasSalvas.findIndex(dicaIndex => {
            return dicaIndex.nome === dica.nome &&
            dicaIndex.dica === dica.dica &&
            dicaIndex.email === dica.email &&
            dicaIndex.celular === dica.celular 
        })
        dicasSalvas.splice(index, 1)
    })

    div.appendChild(botaoApagar)

    const botaoEditar= document.createElement('button')
    botaoEditar.innerHTML= "Editar"
    botaoEditar.addEventListener('click',function(){
        const nomeElemento= document.getElementById("nome")
        const dicaElemento= document.getElementById("textarea")
        const emailElemento= document.getElementById("email")
        const celularElemento= document.getElementById("celular")
        nomeElemento.value=dica.nome
        dicaElemento.value=dica.dica
        emailElemento.value=dica.email
        celularElemento.value=dica.celular


        main.removeChild(div)
        

        const index = dicasSalvas.findIndex(dicaIndex => {
            return dicaIndex.nome === dica.nome &&
            dicaIndex.dica === dica.dica &&
            dicaIndex.email === dica.email &&
            dicaIndex.celular === dica.celular 
        })
        dicasSalvas.splice(index, 1)
    })

    div.appendChild(botaoEditar)

    main.appendChild(div)
}
