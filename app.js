function addTodo (text) {
  const newItem = document.createElement('li');
  newItem.innerHTML = `${text}<input type="checkbox" />`;
  todoList.appendChild(newItem);
}

const todoList = document.getElementById('todos');
const addButton = document.getElementById('add-todo');
const newTodo = document.getElementById('new-todo');

addButton.addEventListener('click', function (e) {
  e.preventDefault();
  const todoText = newTodo.value;

  addTodo(todoText);
  newTodo.value = '';
});

function toggle (e) {
  const box = e.target;
  if (box.checked) {
    box.parentElement.classList.add('done');
    this.classList.add('done');
  } else {
    box.parentElement.classList.remove('done');
  }
}

const listItems = Array.from(document.getElementsByTagName('li'));

// listItems.forEach(function (li) {
  // li.addEventListener('change', toggle);
// });

const checkBoxTodo = document.getElementById('check-box-todo');
todoList.addEventListener('change', toggle.bind(checkBoxTodo));

