const todos = ['Order cat food', 'Clean kitchen', 'Buy food', 'Do work', 'Exercise']

// Delete the 3rd item
todos.splice(2, 1)
// Add a new item onto the end
todos.push('This is a new todo')
// Remove the first item from the list
todos.shift()

console.log(`You have ${todos.length} todos!`)
console.log(todos)