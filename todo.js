const todos = ['Order cat food', 'Clean kitchen', 'Buy food', 'Do work', 'Exercise']

// Delete the 3rd item
todos.splice(2, 1)
// Add a new item onto the end
todos.push('Buy Coffee')
// Remove the first item from the list
todos.shift()

console.log(`You have ${todos.length} todos!`)

todos.forEach(function (todo, index) {
  const num = index + 1
  console.log(`${num}. ${todo}`)
})