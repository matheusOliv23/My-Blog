var btn = document.querySelector('.show')
var card1 = document.querySelector('#artigo1')

function showCard() {
  if (card1.style.display === 'block') {
    card1.style.display = 'none'
  } else {
    card1.style.display = 'block'
  }
}
btn.addEventListener('click', showCard)
