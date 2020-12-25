const randomNumber1 = Math.floor(Math.random()*3) + 1
const randomImage1 = 'Images/image' + randomNumber1 + '.png'
const newImage1 = document.querySelectorAll('img')[0]
const chooseItem1 = document.getElementsByClassName('object')[0]
const play1 = document.querySelector('.player1')

play1.addEventListener('click', function(){
    var k = document.getElementById('playerName1').value
    playerChoose1.innerHTML = (k + ' Choose Your Role')
    newImage1.setAttribute('src', randomImage1)
    if (randomNumber1 == 1){
        chooseItem1.innerHTML = k + ' ' + 'Has Chosen Paper'
    } else if (randomNumber1 == 2){
        chooseItem1.innerHTML = k + ' ' + 'Has Chosen Scissors'
    } else {
        chooseItem1.innerHTML = k + ' ' + 'Has Chosen Rock'
    }
})

var playerChoose1 = document.querySelector('.result1')
var playerChoose2 = document.querySelector('.result2')
function logIn(){
    var x = document.getElementById('playerName1').value
    var y = document.getElementById('playerName2').value
    playerChoose1.innerHTML = (x + ' Choose Your Role')
    playerChoose2.innerHTML = (y + ' Choose Your Role')
}

const randomNumber2 = Math.floor(Math.random()*3) + 1
const randomImage2 = 'Images/image' + randomNumber2 + '.png'
const newImage2 = document.querySelectorAll('img')[1]
const chooseItem2 = document.getElementsByClassName('object')[1]
const play2 = document.querySelector('.player2')
const result1 = document.querySelector('.result1')
const result2 = document.querySelector('.result2')

play2.addEventListener('click', function(){
    newImage2.setAttribute('src', randomImage2)
    var b = document.getElementById('playerName2').value
    var c = document.getElementById('playerName1').value

    if (randomNumber2 == 1){
        chooseItem2.innerHTML = b + ' ' + 'Has Chosen Paper'
    } else if (randomNumber1 == 2){
        chooseItem2.innerHTML = b + ' ' + 'Has Chosen Scissors'
    } else {
        chooseItem2.innerHTML = b + ' ' + 'Has Chosen Rock'
    }

    if (randomNumber1 == randomNumber2){
        result1.innerHTML = 'Draw'
        result2.innerHTML = ''
    } else if (randomNumber1 == 1 && randomNumber2 == 2){
        result1.innerHTML = c + ' ' + 'Lose'
        result2.innerHTML = b + ' ' + 'Win'
    } else if (randomNumber1 == 1 && randomNumber2 == 3){
        result1.innerHTML = c + ' ' + 'Win'
        result2.innerHTML = b + ' ' + 'Lose'
    } else if (randomNumber1 == 2 && randomNumber2 == 1){
        result1.innerHTML = c + ' ' + 'Win'
        result2.innerHTML = b + ' ' + 'Lose'
    } else if (randomNumber1 == 2 && randomNumber2 == 3){
        result1.innerHTML = c + ' ' + 'Lose'
        result2.innerHTML = b + ' ' + 'Win'
    } else if (randomNumber1 == 3 && randomNumber2 == 1){
        result1.innerHTML = c + ' ' + 'Lose'
        result2.innerHTML = b + ' ' + 'Win'
    } else{
        result1.innerHTML = c + ' ' + 'Win'
        result2.innerHTML = b + ' ' + 'Lose'
    }
})




