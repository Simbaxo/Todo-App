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

const sortTodos = function (todo) {
  todo.sort(function (a, b) {
    if (!a.completed && b.completed) {
      return -1
    } else if (!b.completed && a.completed) {
      return 1
    } else {
      return 0
    }
  })
}

// Create function to remove a todo by text value
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

sortTodos(todos)
console.log(todos)

// console.log(getThingsToDo(todos))

// deleteTodo(todos, 'buy food')
// console.log(todos)

// You have 2 todos left
// Add a p for each todo (use text value)

const incompleteTodos = todos.filter(function (todo) {
  return !todo.completed
})

const summary = document.createElement('h2')
summary.textContent = `You have ${incompleteTodos.length} left`
document.querySelector('body').appendChild(summary)

todos.forEach(function (todo) {
  const p = document.createElement('p')
  p.textContent = todo.text
  document.querySelector('body').appendChild(p)
})

document.querySelector('button').addEventListener('click', function (e) {
  console.log(e)
})