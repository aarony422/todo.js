$(document).ready(function(){
  var todoList = {
    todos: [],
    displayTodos: function() {
      //var ul = document.getElementById("todosDisplay");
      //var li = document.createElement("li");
      //li.appendChild(document.createTextNode("Four"));
      //li.setAttribute("id", "element4"); // added line
      //ul.appendChild(li);
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

  // Event handlers
  // displayTodos:
  $("#displayTodos").click(function() {
    todoList.displayTodos();
  });

  // toggleAll
  $("#toggleAll").click(function() {
    todoList.toggleAll();
  });

  // Add todos
  $("#addTodoBtn").click(function() {
    var addTodoTextInput = $("#addTodoTextInput");
    todoList.addTodo(addTodoTextInput.val());
    addTodoTextInput.val('');
  });

  // changeTodo
  $("#changeTodo").click(function() {
    var changeTodoPositionInput = $("#changeTodoPositionInput");
    var changeTodoTextInput = $("#changeTodoTextInput");
    todoList.changeTodo(parseInt(changeTodoPositionInput.val(), 10), changeTodoTextInput.val());
    changeTodoPositionInput.val('');
    changeTodoTextInput.val('');
  });

  // deleteTodo
  $("#deleteTodo").click(function() {
    var deleteTodoPositionInput = $("#deleteTodoPositionInput");
    todoList.deleteTodo(parseInt(deleteTodoPositionInput.val(), 10));
    deleteTodoPositionInput.val('');
  });

  // toggleCompleted
  $("#toggleCompleted").click(function() {
    var toggleCompletedInput = $('#toggleCompletedInput');
    todoList.toggleCompleted(parseInt(toggleCompletedInput.val(),10));
    toggleCompletedInput.val('');
  });
});
