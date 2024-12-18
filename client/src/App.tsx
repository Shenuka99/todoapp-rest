import React, { useState, useEffect } from "react";
import { ITodoItem } from "./types";
import AddTodo from "./models/AddTodo";
import TodoSection from "./components/TodoSection";
import Sidebar from "./components/Sidebar";
import Pomodoro from "./components/Pomodoro";

const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodoItem[]>([]);
  const [formOpen, setFormOpen] = useState<boolean>(false);
  const [filterTag, setFilterTag] = useState<string | null>(null);
  const [filteredTodos, setFilteredTodos] = useState<ITodoItem[]>([]);

  // Use useEffect to call filterTodos whenever todos or filterTag changes
  useEffect(() => {
    filterTodos(filterTag);
  }, [todos, filterTag]);

  const filterTodos = (tag: string | null) => {
    const results = tag ? todos.filter((todo) => todo.tag === tag) : todos;

    console.log(filterTag, results);
    setFilteredTodos(results);
  };

  return (
    <div className="min-h-screen flex bg-purple-200 basis-full">
      <Sidebar
        todos={todos}
        setFilteredTodos={setFilteredTodos}
        setFormOpen={setFormOpen}
        setFilterTag={setFilterTag}
      />

      <TodoSection filteredTodos={filteredTodos} setTodos={setTodos} />

      <Pomodoro/>

      <AddTodo
        formOpen={formOpen}
        setTodos={setTodos}
        filterTodos={filterTodos}
        filterTag={filterTag}
        setFormOpen={setFormOpen}
      />

      
    </div>
  );
};

export default App;
