var color = generateRandomColor(6)
var square = document.querySelectorAll('#square')
var displayCode = document.getElementById('colorCode')
var pickedColor = pickColor()
var h1 = document.querySelector('h1')
displayCode.textContent = pickedColor
var messsageDisplay = document.querySelector('#message')
for (var i = 0; i < square.length; i++) {
  square[i].style.background = color[i]
  square[i].addEventListener('click', function () {
    var clickColor = this.style.background
    if (clickColor === pickedColor) {
      changeColor(clickColor)
      h1.style.background = clickColor
      messsageDisplay.textContent = 'Correct!!'
    } else {
      this.style.background = '#232323'
      messsageDisplay.textContent = 'Try Again!!'
    }
  })
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
