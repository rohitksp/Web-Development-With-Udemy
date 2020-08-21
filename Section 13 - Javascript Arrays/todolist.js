window.setTimeout(function () {
  var todo = ["Hello How are you, What's going on now!"]
  var type = window.prompt('Hello welcome to this game')
  while (todo !== 'quit') {
    if (type === 'list') {
      console.log(todo)
    } else if (type === 'new') {
      var add = window.prompt('Enter new todo')
      todo.push(add)
      console.log(todo)
    }
    todo = window.prompt('What would you like to do?')
  }
  console.log('Ok you are quit this app')
}, 500)
