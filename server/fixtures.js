Meteor.methods({ init })

Meteor.startup(init)

function init () {
  Todos.remove({})
  _.times(10, n => {
    Todos.insert({
      content: faker.lorem.sentence(),
      completed: false,
      createdAt: new Date()
    })
  })
}
