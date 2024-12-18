import { FC, useState } from 'react'
import TodoItem from '../components/TodoItem'
import '../styles/todosection.scss'
import { ITodoSectionProps } from '../types';



const TodoSection : FC<ITodoSectionProps> = ({
  filteredTodos,
  setTodos,
  setFormOpen

}) => {

  const [checked, setChecked] = useState<boolean>(false)

  const toggleCompletion = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
    setChecked(!checked)
  };

  const deleteTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id: number) => {
    setFormOpen(true)
  }

  return (
    <div className="flex-col p-8 w-[45%] flex-none">
    <div className="flex justify-between items-center mb-6">
      <div>
        <h1 className="text-2xl font-bold">Today's Main Focus</h1>
        <p className="text-xl text-gray-600">Design team meeting</p>
      </div>
    </div>

    {/* <div className="bg-white p-4 rounded-lg shadow-lg"> */}
      {filteredTodos.length > 0 ? (
        <TodoItem
        filteredTodos={filteredTodos}
        toggleCompletion={toggleCompletion}
        deleteTodo={deleteTodo}
        checked={checked}
        setChecked={setChecked}
        editTodo={editTodo}
        />
      ) : (
        <p className="text-center text-gray-600">No tasks found.</p>
      )}
    </div>
  // </div>
  )
}

export default TodoSection