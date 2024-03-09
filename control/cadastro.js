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
        console.log(nome.value)
        console.log(celular.value)
        console.log(dica.value)
        console.log(email.value)
     }
}) 


    

  
