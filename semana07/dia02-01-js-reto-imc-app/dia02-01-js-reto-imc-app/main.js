const peso=document.querySelector("#peso")
const altura=document.querySelector("#altura")
const boton =document.querySelector("button")
const resultado=document.querySelector("#resultado")

boton.addEventListener('click', function(){

    const pesovalor= parseFloat(peso.value)
    const alturavalor=parseFloat(altura.value)/100

    if (!isNaN(pesovalor) && alturavalor>0){     
        const IMC = pesovalor/(alturavalor*alturavalor)

        let mensaje = ""

        if (IMC <= 18.5) {
            mensaje = " BAJO PESO" 
        }else if (IMC <= 24.9) {
            mensaje = " NORMAL"
        }else if (IMC <= 29.9) {
            mensaje = " SOBREPESO"
        }else {
            mensaje = " OBESIDAD"
        }
            
        resultado.textContent= "TU Indice de Masa Corporal es " + mensaje
    }else {
        resultado.textContent = "ingrese valores válidos."
        console.log(resultado)
    }

})

