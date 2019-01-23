import { getFilters, setFilters } from './filters'
import { getTodos, createTodo } from './todos'

console.log(getTodos())
createTodo('Finish another video')
console.log(getTodos())