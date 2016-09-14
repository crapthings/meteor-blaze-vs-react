Todos = new Mongo.Collection('todos')

// method is sorta like restapi

Meteor.methods({
  'todos:toggle' (_id) {
    const todo = Todos.findOne(_id)
    Todos.update(_id, {
      $set: {
        completed: !todo.completed
      }
    })
  }
})

// publish all todos from mongodb

Meteor.isServer && Meteor.publish('todos', function () {
  // sending delay
  Meteor._sleepForMs(1000)
  return Todos.find({}, Config.defaultCursorOptions)
})
