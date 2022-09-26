
const scoreButtons = document.querySelectorAll('.score')

let valor


scoreButtons.forEach( button => {  
  button.onclick = () => {

    
    valor = button.value
    console.log(valor)
    }

})