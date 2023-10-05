import React, { useState } from 'react'
import Header from './components/Header';
import SearchFilter from './components/SearchFilter';
import TodoList from './components/TodoList';


const App = () => {
  const list = ["Drink Coffe", "Learn React", "Go to shop"]

  const [activeButton, setActiveButton] = useState("active")
  const [listItems, setListItems] = useState(list)
  

  const onSaveListItem = (text) => {
    const newListItems = [
      ...listItems,
      text
    ]

    setListItems(newListItems)
  }

  return (

    <div className="App" >
      <Header />
      <SearchFilter
        setActiveButton={setActiveButton}
        activeButton={activeButton}
        onSaveListItem={onSaveListItem} 
      />
      <TodoList list={listItems} />
    </div>


  );
}

export default App;
