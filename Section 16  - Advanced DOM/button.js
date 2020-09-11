var button = document.querySelector('button')
/* var purple = false */
button.addEventListener('click', function () {
  /* if (purple) {
    document.body.style.background = 'white'
  } else {
    document.body.style.background = 'Green'
  }
  purple = !purple */
  document.body.classList.toggle("purple")
})
