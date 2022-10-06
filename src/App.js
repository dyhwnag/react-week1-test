import react, { useState } from 'react'
import './App.css'

const App = () => {
  const [todos, setTodos] = useState(['리엑트를공부하자'])

  const [title, setTitle] = useState('')

  const onClick = () => {
    setTodos([...todos, title])
  }

  return (
    <div className='app'>
      <div>
        <input type='text' value={title} onChange={(e) => {
          setTitle(e.target.value)
        }} />
        <button onClick={onClick}>추가하기</button>
      </div>

      <Header todos={todos} />

    </div>
  )
}
const Header = ({ todos }) => {

  return (
    <div className='header'>
      <h1 class="todo">Todo List</h1>
      {todos.map((item) => <Body key={item} item={item} />)}
    </div>
  )
}

const Body = ({ item }) => {
  console.log(item)


  return (
    <div className='body'>
      <div className='squareStyle'>{item}</div>
    </div>
  )

}

export default App
