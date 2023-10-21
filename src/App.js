import React, { useState } from 'react'
import Header from './components/Header';
import SearchFilter from './components/SearchFilter';
import TodoList from './components/TodoList';


const App = () => {
  // const list = ["Drink Coffe", "Learn React", "Go to shop"]

  const createItem = (name, done = false, active = false) => {
    return {
      name: name,
      done: done,
      active: active
    }
    //return { name, done, active } это равнозначные записи
  }

  const listByDefault = [
    createItem("Drink Coffe"),
    createItem("Learn React"),
    createItem("Go to shop",),
  ]


  const [activeButton, setActiveButton] = useState("all")
  const [listItems, setListItems] = useState(listByDefault)


  const onSaveListItem = (text) => {
    const newListItems = [
      ...listItems,
      createItem(text),
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

  const onActiveItem = (id) => {

    const oldItem = listItems[id];
    const newItem = { ...oldItem, active: !oldItem.active };

    const activeListItem = [
      ...listItems.slice(0, id),
      newItem,
      ...listItems.slice(id + 1)
    ]

    setListItems(activeListItem)

  }

  const filteredItems = () => {
    let items

    switch (activeButton) {
      case "done":
        items = listItems.filter(el => el.done)
        break;

      case "active":
      items = listItems.filter(el => el.active)
      break;

      default:
        items = listItems // all
        break;
    }

    return items
  }

  const doneItems = listItems.filter(el => el.done).length
  const activeItems = listItems.filter(el => el.active).length

  const list = filteredItems()
  //const allDoneItems = listItems.filter( el => el.done ).length
  return (

    <div className="App" >
      <Header totalItems={listItems.length} doneItems={doneItems} />
      <SearchFilter
        setActiveButton={setActiveButton}
        activeButton={activeButton}
        onSaveListItem={onSaveListItem}
      />
      <TodoList
        list={list}
        onDeleteItem={onDeleteItem}
        onDoneItem={onDoneItem}
        onActiveItem={onActiveItem}
      />
    </div>


  );
}

export default App;
