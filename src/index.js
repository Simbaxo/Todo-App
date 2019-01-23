import { getFilters, setFilters } from './filters'

console.log(getFilters())
setFilters({
  searchText: 'Alexandria',
  hideCompleted: true
})
console.log(getFilters())