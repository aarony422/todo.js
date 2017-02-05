var todos = ['item 1', 'item 2', 'item 3'];

// function to display todos on console
function displayTodos() {
  console.log("My todos:", todos);
}

// function to add an item to todos
function addTodo(item) {
  todos.push(item);
  displayTodos();
}

// function to modify item based on position in todo
function changeTodo(position, newItem) {
  todos[position] = newItem;
  displayTodos();
}

// function to delete item based on position in todos
function deleteTodo(position) {
  todos.splice(position, 1);
  displayTodos();
}
