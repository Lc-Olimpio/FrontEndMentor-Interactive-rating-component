
const scoreButtons = document.querySelectorAll('.score')
const mainDiv = document.querySelector('.main')
const forms = document.forms.formulario

let valor

scoreButtons.forEach( button => {  
  button.onclick = () => {

   scoreButtons.forEach(button => {
    button.classList.remove('selected')
   })
    
   button.classList.add('selected')
   valor = button.value
  } 
})

forms.onsubmit = e => {
  e.preventDefault()

  mainDiv.innerHTML=`
    <img src="images/illustration-thank-you.svg" alt="thanks for the rating img" class="thanksimg">
    <span>You selected ${valor} out of 5</span>
    <h2>Thank you!</h2>
    <p class="thankyoutext">
      We appreciate you taking the time to give us a rating. If you ever need more support, don't hesitate to get in touch!
    </p>
  `
}
