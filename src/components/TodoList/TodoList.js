import React from 'react'
import TodoListItem from '../TodoListItem';
import "./styles.css"

const TodoList = ({ list, onDeleteItem, onDoneItem, onActiveItem }) => {

    //const [inputValue, setInputValue] = useState("")

    const renderTodoList = () => {
        const content = list.map((element, index) => {
            const { name, done, active } = element
           
            return (
                <TodoListItem
                    name={name}
                    done={done}
                    active={active}
                    id={index}
                    key={index}
                    onDeleteItem={onDeleteItem}
                    onDoneItem={onDoneItem}
                    onActiveItem={onActiveItem}
                />
            )
        })

        return content
    }

    return (
        <div className="todo-list">
            {renderTodoList()}
        </div>

    );
}

export default TodoList;