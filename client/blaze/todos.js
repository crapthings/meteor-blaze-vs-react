// subscribe data before render

Template.todos.onCreated(function () {
  this.subscribe('todos')
})

// this helper return all todos for blaze template

Template.todos.helpers({
  todos () {
    return Todos.find({}, Config.defaultCursorOptions)
  }
})

// when we click a todo item, we toggle its completed status

Template.todo.events({
  click () {
    Meteor.call('todos:toggle', this._id)
  }
})
