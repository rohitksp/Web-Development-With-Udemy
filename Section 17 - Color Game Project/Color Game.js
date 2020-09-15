var numSquare = 6
var color = generateRandomColor(numSquare)
var square = document.querySelectorAll('#square')
var displayCode = document.getElementById('colorCode')
var pickedColor = pickColor()
var h1 = document.querySelector('h1')
displayCode.textContent = pickedColor
var messsageDisplay = document.querySelector('#message')
var resetButton = document.getElementById('reset')
var easyBtn = document.getElementById('easyBtn')
var hardBtn = document.getElementById('hardBtn')

loopFuction()

easyBtn.addEventListener('click', function () {
  hardBtn.classList.remove('selected')
  easyBtn.classList.add('selected')
  numSquare = 3
  color = generateRandomColor(numSquare)
  pickedColor = pickColor()
  displayCode.textContent = pickedColor
  for (var i = 0; i < square.length; i++) {
    if (color[i]) {
      square[i].style.background = color[i]
    } else {
      square[i].style.display = 'none'
    }
  }
})
hardBtn.addEventListener('click', function () {
  hardBtn.classList.add('selected')
  easyBtn.classList.remove('selected')
  numSquare = 6
  color = generateRandomColor(numSquare)
  pickedColor = pickColor()
  displayCode.textContent = pickedColor
  for (var i = 0; i < square.length; i++) {
    square[i].style.background = color[i]
    square[i].style.display = 'block'
  }
})

resetButton.addEventListener('click', function () {
  color = generateRandomColor(numSquare)
  pickedColor = pickColor()
  displayCode.textContent = pickedColor

  for (var i = 0; i < square.length; i++) {
    square[i].style.background = color[i]
  }
  h1.style.background = '#232323'
})

function loopFuction () {
  for (var i = 0; i < square.length; i++) {
    square[i].style.background = color[i]
    square[i].addEventListener('click', function () {
      var clickColor = this.style.background
      if (clickColor === pickedColor) {
        changeColor(clickColor)
        h1.style.background = clickColor
        resetButton.textContent = 'Play Again?'
        messsageDisplay.textContent = 'Correct!!'
      } else {
        this.style.background = '#232323'
        messsageDisplay.textContent = 'Try Again!!'
      }
    })
  }
}

function changeColor (color) {
  for (var i = 0; i < square.length; i++) {
    square[i].style.background = color
  }
}

function pickColor () {
  var random = Math.floor(Math.random() * color.length)
  return color[random]
}

function generateRandomColor (num) {
  var arr = []
  for (var i = 0; i < num; i++) {
    arr.push(randomColor())
  }
  return arr
}

function randomColor () {
  var r = Math.floor(Math.random() * 256)
  var g = Math.floor(Math.random() * 256)
  var b = Math.floor(Math.random() * 256)
  return 'rgb(' + r + ', ' + g + ', ' + b + ')'
}
