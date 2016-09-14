const TodoList = ({ todos }) => <div>
  <h3>react</h3>
  {todos.map(todo => <p
      className='cursor-pointer unselectable'
      key={todo._id}
      onClick={() => Meteor.call('todos:toggle', todo._id)}
    >
    <input type='checkbox' checked={todo.completed} />
    {todo.completed ? <del>{todo.content}</del> : <span>{todo.content}</span>}
  </p>)}
</div>

function tracker (props, onData) {
  if (Meteor.subscribe('todos').ready()) {
    const todos = Todos.find({}, Config.defaultCursorOptions)
    onData(null, { todos })
  }
}

const App = Container(tracker)(TodoList)

Meteor.startup(renderReactTodos)

function renderReactTodos () {
  render(<App/>, document.getElementById('react-container'))
}
