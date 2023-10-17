import React from 'react'
import TodoListItem from '../TodoListItem';

const TodoList = ({ list, onDeleteItem, onDoneItem }) => {

    //const [inputValue, setInputValue] = useState("")

    const renderTodoList = () => {
        const content = list.map((element, index) => {
            const { name, done } = element
           
            return (
                <TodoListItem
                    name={name}
                    done={done}
                    id={index}
                    onDeleteItem={onDeleteItem}
                    onDoneItem={onDoneItem}
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