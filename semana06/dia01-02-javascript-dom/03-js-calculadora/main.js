let numeroActual='0'
let operador=''
let operando=''

//consultar un elemento 
const inputDisplay= document.querySelector('#inputDisplay')
console.log(inputDisplay)

//console.log({inputDisplay}) //propiedades

//consultar mutlitiples elementos
const buttons =document.querySelectorAll('.button')
console.log(buttons)



buttons.forEach(function(button){
    button.addEventListener('click' , function(event){ //
        //console.log('hice click' , event.target)

        const buttonText = event.target.textContent
        
        if ('*-+'.includes(buttonText)) {
            operador = buttonText
            operando = Number(numeroActual)
            numeroActual = '0'
        } else if (buttonText === '=') {
            
            if (operador === '+') {
                numeroActual = Number(operando) + Number(operando)
            }else if(operador === '-'){
                numeroActual = Number(operando) - Number(operando)
            }else if (operador === '*') {
                numeroActual = Number(operando)*Number(operando)

        } else if (buttonText === 'C') {
            numeroActual='0'
            operador=''
            operando=''
        } else {

            numeroActual = Number(numeroActual + buttonText)

        }
        
        inputDisplay.value= numeroActual
    })
})