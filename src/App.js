import React, { useState } from 'react'
import Header from './components/Header';
import SearchFilter from './components/SearchFilter';
import TodoList from './components/TodoList';


const App = () => {
  // const list = ["Drink Coffe", "Learn React", "Go to shop"]
  const list = [
    {
      name: "Drink Coffe",
      done: true
    },
    {
      name: "Learn React",
      done: true
    },
    {
      name: "Go to shop",
      done: false,
    }
  ]

  const [activeButton, setActiveButton] = useState("active")
  const [listItems, setListItems] = useState(list)


  const onSaveListItem = (text) => {
    const newListItems = [
      ...listItems,
      text
    ]

    setListItems(newListItems)
  }

  const onDeleteItem = (id) => {
    const newArr = [
      ...listItems.slice(0, id),
      ...listItems.slice(id + 1)
    ]
    setListItems(newArr)
  }

  const onDoneItem = (id) => {

    const oldItem = listItems[id];
    const newItem = { ...oldItem, done: !oldItem.done };

    const newListItem = [
      ...listItems.slice(0, id),
      newItem,
      ...listItems.slice(id + 1)
    ]

    setListItems(newListItem)

  }
  console.log("listItems", listItems)
  return (

    <div className="App" >
      <Header />
      <SearchFilter
        setActiveButton={setActiveButton}
        activeButton={activeButton}
        onSaveListItem={onSaveListItem}
      />
      <TodoList
        list={listItems}
        onDeleteItem={onDeleteItem}
        onDoneItem={onDoneItem}
      />
    </div>


  );
}

export default App;
