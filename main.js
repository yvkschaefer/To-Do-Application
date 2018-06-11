// Create a new list item when clicking on the "Add" button
function newToDo() {
  const li = document.createElement('li')
  const inputValue = document.getElementById('myInput').value
  const newToDoElement = document.createTextNode(inputValue)
  li.appendChild(newToDoElement)
  if (inputValue === '') {
    alert('You must write something!')
  } else {
    document.getElementById('myUl').appendChild(li)
  }
  // clear the input element when the Add button is clicked
  document.getElementById('myInput').value = ''
}
