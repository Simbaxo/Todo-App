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

const filters = {
  searchText: ''
}

const renderTodos = function (todos, filters) {
  const filteredTodos = todos.filter(function (todo) {
    return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
  })

  const incompleteTodos = filteredTodos.filter(function (todo) {
    return !todo.completed
  })

  document.querySelector('#todos').innerHTML = ''

  const summary = document.createElement('h2')
  summary.textContent = `You have ${incompleteTodos.length} left`
  document.querySelector('#todos').appendChild(summary)

  filteredTodos.forEach(function (todo) {
    const p = document.createElement('p')
    p.textContent = todo.text
    document.querySelector('#todos').appendChild(p)
  })
}

renderTodos(todos, filters)

document.querySelector('#add-todo').addEventListener('click', function (e) {
  console.log('Add a new todo')
})

document.querySelector('#new-todo-text').addEventListener('input', function (e) {
  console.log(e.target.value)
})

document.querySelector('#search-text').addEventListener('input', function (e) {
  filters.searchText = e.target.value
  renderTodos(todos, filters)
})