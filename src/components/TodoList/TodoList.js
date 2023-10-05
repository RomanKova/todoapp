import React from 'react'
import TodoListItem from '../TodoListItem';

const TodoList = ({ list }) => {

    //const [inputValue, setInputValue] = useState("")

    const renderTodoList = () => {
        const content = list.map((element, index) => {
            return (
                <TodoListItem name={element} id={index} />
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