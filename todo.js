var todoList;
var view;
$(document).ready(function(){
  // Model
  todoList = {
    todos: [],
    // append a todo object to the todoList with todoText
    addTodo: function(todoText) {
      this.todos.push({
        todoText: todoText,
        completed: false
      });
    },
    // change todoText of todo object at a given position
    changeTodo: function(position, newTodoText) {
      this.todos[position].todoText = newTodoText;
    },
    // splice out the todo object at given position
    deleteTodo: function(position) {
      this.todos.splice(position, 1);
    },
    // toggles completed for all todo objects
    // toggles all to false if all todos are completed
    // otherwise, toggle all to true
    toggleCompleted: function(position) {
      var todo = this.todos[position];
      todo.completed = !todo.completed;
    },
    toggleAll: function() {
      var totalTodos = this.todos.length;
      var completedTodos = 0;
      // Get number of completed todos using forEach
      this.todos.forEach(function(todo) {
        if (todo.completed === true) {
          completedTodos++;
        }
      });

      // If everything is true, make everything false
      this.todos.forEach(function(todo) {
        if (completedTodos === totalTodos) {
          todo.completed = false;
        } else { // make everything true
          todo.completed = true;
        }
      });
    }
  };

  // View
  view = {
    displayTodos: function() {
      // clear todosDisplay
      var ul = $("#todosDisplay");
      ul.empty();

      if (todoList.todos.length !== 0) {
        todoList.todos.forEach(function(todo, position){
          if (todo.completed === true) {
            var listItem = $('<li/>')
                            .attr({id : position})
                            .text("[X] " + todo.todoText)
                            .append(this.createDeleteButton());
            ul.append(listItem);
          } else {
            var listItem = $('<li/>')
                            .attr({id: position})
                            .text("[ ] " + todo.todoText)
                            .append(this.createDeleteButton());
            ul.append(listItem);
          }
        }, this); // "this" from outer scope is passed in as the "this" inside
                  // the callback
      }
    },
    createDeleteButton: function() {
      return $('<button/>')
              .addClass('deleteBtn')
              .text('Delete');
    }
  };

  // Controller (Event handlers)

  // toggleAll
  $("#toggleAll").click(function() {
    todoList.toggleAll();
    view.displayTodos();
  });

  // Add todos
  function addTodo() {
    var addTodoTextInput = $("#addTodoTextInput");
    var todoText = addTodoTextInput.val();
    if (todoText) {
      todoList.addTodo(addTodoTextInput.val());
      addTodoTextInput.val('');
      view.displayTodos();
    }
  }
  // addTodoBtn pressed
  $("#addTodoBtn").click(addTodo);
  // Enter key pressed
  $('#addTodoTextInput').keypress(function (e) {
   var key = e.which;
   if(key == 13)  // the enter key code
    {
      addTodo();
      return false;
    }
  });

  // changeTodo
  $("#changeTodo").click(function() {
    var changeTodoPositionInput = $("#changeTodoPositionInput");
    var changeTodoTextInput = $("#changeTodoTextInput");
    todoList.changeTodo(parseInt(changeTodoPositionInput.val(), 10), changeTodoTextInput.val());
    changeTodoPositionInput.val('');
    changeTodoTextInput.val('');
    view.displayTodos();
  });

  // toggleCompleted
  $("#toggleCompleted").click(function() {
    var toggleCompletedInput = $('#toggleCompletedInput');
    todoList.toggleCompleted(parseInt(toggleCompletedInput.val(),10));
    toggleCompletedInput.val('');
    view.displayTodos();
  });

  // deleteBtn
  // event delegation
  $("ul").click(function(event) {
    if (event.target.className === 'deleteBtn'){
      todoList.deleteTodo(parseInt(event.target.parentNode.id));
    }
    view.displayTodos();
  });
});
