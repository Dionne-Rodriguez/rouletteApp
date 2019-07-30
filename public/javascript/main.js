//randomnize - we need to randomize the possibility of getting 1 out of 5 items in one reel

// document.getElementById('send').addEventListener('submit', () =>{
//   // let userMoney = document.getElementById('betMoney').value
//   console.log(userMoney)
//   // fetch('betmoney', {
//   //         method: 'put',
//   //         headers: {'Content-Type': 'application/json'},
//   //         body: JSON.stringify({
//   //         'Money': userMoney
//   //         })
//   //       })

//need to change this... add userMoney

document.getElementById('spin').addEventListener("click", function (){
    let ballResult = getBallResult()
    console.log(ballResult)
    // document.getElementById("reelOne").innerHTML= reelOne
})

//resets the game and deletes the docuement in mongodb
let reset = document.getElementById('reset')
reset.addEventListener('click', function() {
  console.log("client side called")
  fetch('bet', {
        method: 'delete',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'bet':parseInt(document.getElementById('userB').textContent)
        })
      }).then(function (response) {
        console.log(response)
        if(response.ok){
          return response.json()
        }else{
          console.log("could not delete")
        }
      }).then(function (data) {
        window.location.reload()
      })
})


// function bet50(){
//   console.log("50")
//   bet(50)
// }
//
// function bet5(){
//   console.log("5")
//   bet(5)
// }

function getBallResult(){
    let result = Math.ceil(Math.random()*38)
    console.log(result)
    if (result === 1) {
      return 0
    }
    else if (result === 2){
      return 00
    }
    else if (result === 3){
      return 1
    }
    else if (result === 4){
      return 2
    }
    else if (result === 5){
      return 3
    }
    else if (result === 6){
      return 4
    }
    else if (result === 7){
      return 5
    }
    else if (result === 8){
      return 6
    }
    else if (result === 9){
      return 7
    }
    else if (result === 10){
      return 8
    }
    else if (result === 11){
      return 9
    }
    else if (result === 12){
      return 10
    }
    else if (result === 13){
      return 11
    }
    else if (result === 14){
      return 12
    }
    else if (result === 15){
      return 13
    }
    else if (result === 16){
      return 14
    }
    else if (result === 17){
      return 15
    }
    else if (result === 18){
      return 16
    }
    else if (result === 19){
      return 17
    }
    else if (result === 20){
      return 18
    }
    else if (result === 21){
      return 19
    }
    else if (result === 22){
      return 20
    }
    else if (result === 23){
      return 21
    }
    else if (result === 24){
      return 22
    }
    else if (result === 25){
      return 23
    }
    else if (result === 26){
      return 24
    }
    else if (result === 27){
      return 25
    }
    else if (result === 28){
      return 26
    }
    else if (result === 29){
      return 27
    }
    else if (result === 30){
      return 28
    }
    else if (result === 31){
      return 29
    }
    else if (result === 32){
      return 30
    }
    else if (result === 33){
      return 31
    }
    else if (result === 34){
      return 32
    }
    else if (result === 35){
      return 33
    }
    else if (result === 36){
      return 34
    }
    else if (result === 37){
      return 35
    }
    else if (result === 38){
      return 36
    }
}


function checkWin (reelOne, reelTwo, reelThree) {
  if ((reelOne === reelTwo) && (reelOne == reelThree) ) {
    return true
  }
  else{
    return false
  }
}


function addMoneySubMoney(win, amount){

  console.log(win);
  if (win) {
    fetch('winBet', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'bet':parseInt(document.getElementById('userB').textContent),
        'amount': amount
      })
    }).then(response => {
      if (response.ok) return response.json()
    }).then(data => {
      console.log(data)
      window.location.reload(true)
    })
  }else{
    fetch('lossBet', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'amount': amount,
        'bet': parseInt(document.getElementById('userB').textContent)
      })
    }).then(response => {
      if (response.ok) return response.json()
    }).then(data => {
      console.log(data)
      window.location.reload(true)
    })
  }
}
// })



//- Create a function that choses a random throw of rock, paper, scissors, lizard, spock and alerts the random choice

// function getRandomInt(max) {
//   return Math.floor(Math.random() * Math.floor(max));
// }
//
// function chooseRandom() {
//   var randomInt = getRandomInt(4);
//
//   if (randomInt === 0) {
//     alert('rock');
//   }
//   else if (randomInt === 1) {
//     alert('scissors')
//   }
//   else if (randomInt === 2) {
//     alert('lizard')
//   }
//   else if (randomInt === 3) {
//     alert('spock')
//   }
//   else {
//     alert('paper')
//   }
// }
//
// chooseRandom();



// //count the score
// function score(){
//
// }
//
//
// //betting function
// function moneybet(minBet, maxBet){
// let minBet=document.getElementById('bet').value
// let maxBet=document.getElementById('bet').value
// }
// moneyBet(5,50)
// //
// //determineWinner
// function determineWinner(){
//  if (3 ducks = win){  //syntax will be improved
//
//  }
//  else if ( 2< ducks = lose)
// }
