var show1 = document.querySelector('.show')
var show2 = document.querySelector('.show2')
var show3 = document.querySelector('.show3')
var show4 = document.querySelector('.show4')
var show5 = document.querySelector('.show5')
var card1 = document.querySelector('#artigo1')
var card2 = document.querySelector('#artigo2')
var card3 = document.querySelector('#artigo3')
var card4 = document.querySelector('#artigo4')
var card5 = document.querySelector('#artigo5')

function showCard() {
  if (card1.style.display === 'block') {
    card1.style.display = 'none'
  } else {
    card1.style.display = 'block'
    card2.style.display = 'none'
    card3.style.display = 'none'
    card4.style.display = 'none'
    card5.style.display = 'none'
  }
}
function showCard2() {
  if (card2.style.display === 'block') {
    card2.style.display = 'none'
  } else {
    card2.style.display = 'block'
    card1.style.display = 'none'
    card3.style.display = 'none'
    card4.style.display = 'none'
    card5.style.display = 'none'
  }
}
function showCard3() {
  if (card3.style.display === 'block') {
    card3.style.display = 'none'
  } else {
    card3.style.display = 'block'
    card1.style.display = 'none'
    card2.style.display = 'none'
    card4.style.display = 'none'
    card5.style.display = 'none'
  }
}
function showCard4() {
  if (card4.style.display === 'block') {
    card4.style.display = 'none'
  } else {
    card4.style.display = 'block'
    card1.style.display = 'none'
    card2.style.display = 'none'
    card3.style.display = 'none'
    card5.style.display = 'none'
  }
}
function showCard5() {
  if (card5.style.display === 'block') {
    card5.style.display = 'none'
  } else {
    card5.style.display = 'block'
    card1.style.display = 'none'
    card2.style.display = 'none'
    card3.style.display = 'none'
    card4.style.display = 'none'
  }
}
show1.addEventListener('click', showCard)
show2.addEventListener('click', showCard2)
show3.addEventListener('click', showCard3)
show4.addEventListener('click', showCard4)
show5.addEventListener('click', showCard5)
