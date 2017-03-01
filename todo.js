/* Version 8
 * Refactored to use html onclick for event handling
*/
var todoList = {
  todos: [],
  displayTodos: function() {
    if (this.todos.length === 0) {
      console.log("Your Todos is empty!");
    } else {
      console.log("My Todos:");
      for (var i = 0; i < this.todos.length; i++) {
        var item = this.todos[i];
        if (item.completed === true) {
          console.log("[x]", item.todoText);
        } else {
          console.log("[ ]", item.todoText);
        }
      }
    }
  },
  // append a todo object to the todoList with todoText
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },
  // change todoText of todo object at a given position
  changeTodo: function(position, newTodoText) {
    this.todos[position].todoText = newTodoText;
    this.displayTodos();
  },
  // splice out the todo object at given position
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },
  // toggles completed for all todo objects
  // toggles all to false if all todos are completed
  // otherwise, toggle all to true
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  },
  toggleAll: function() {
    var totalTodos = this.todos.length;
    var completedTodos = 0;
    // Get number of completed todos
    for (var i = 0; i < totalTodos; i++) {
      if (this.todos[i].completed === true) {
        completedTodos++;
      }
    }
    // If everything is true, make everything false
    if (completedTodos === totalTodos) {
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = false;
      }
    } else {
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = true;
      }
    }
    this.displayTodos();
  }
};

// handlers for onclick events
var handlers = {
  displayTodos: function(){
    todoList.displayTodos();
  },
  toggleAll: function(){
    todoList.toggleAll();
  }
};
