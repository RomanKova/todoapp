import React, { useState } from 'react'
import Header from './components/Header';
import SearchFilter from './components/SearchFilter';
import TodoList from './components/TodoList';


const App = () => {
  const [count, setCount] = useState(0)
  const [inputValue, setInputValue] = useState("999")

  const arr = [1, 2, 3, 4, 5, 6]

  const content = arr.map((i) => {
    return (
      <b>-{i}</b>
    )
  })

  return (

    <div className="App" >
     <Header />
     <SearchFilter />
     <TodoList />
    {/* <Task />
    <Task />
    <Task /> */}
      <h3>Счетчик: {count}</h3>

      <div>

        <button onClick={() => setCount(count + 1)}>Увеличить</button>
        <button onClick={() => setCount(count - 1)}>Уменьшить</button>

      </div>
      <br />
      <div>
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      </div>
      {content}
    </div>


  );
}

export default App;
