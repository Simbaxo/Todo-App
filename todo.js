// 1. Convert array to array of objects -> text, completed
const todos = [{
  text: 'Order Cat Food',
  completed: true
}, {
  text: 'Clean Kitchen',
  completed: false
}, {
  text: 'Buy Food',
  completed: true
}, {
  text: 'Do Work',
  completed: false
}, {
  text: 'Exercise',
  completed: true
}]

// 2. Create function to remove a todo by text value
const deleteTodo = function (todos, todoText) {
  const index = todos.findIndex(function (todo) {
    return todo.text.toLowerCase() === todoText.toLowerCase()
  })
  if (index > -1) {
    todos.splice(index, 1)
  }
}

// Find Uncompleted Todos
const getThingsToDo = function (todos) {
  return todos.filter(function (todo) {
    return !todo.completed
  })
}

console.log(getThingsToDo(todos))
// deleteTodo(todos, 'buy food')
// console.log(todos)