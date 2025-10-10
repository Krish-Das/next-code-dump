/* eslint-disable no-console */
function countReorder(start: number, end: number) {
  let edge = end
  let count = 0

  while (start !== edge) {
    const middle = (start + edge) / 2
    count++
    edge = middle
    end = middle
  }
  return count
}

console.clear()
console.log(countReorder(3, 6))
