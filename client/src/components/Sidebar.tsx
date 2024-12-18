import  { FC } from "react";
import { ISidebarProps, ITodoItem } from "../types";

const Sidebar: FC <ISidebarProps>= ({
  todos,
  setFilteredTodos,
  setFormOpen,
  setFilterTag

}) => {

  const showTodayTasks = () => {
    const today = new Date().toISOString().split("T")[0];
    const results = todos.filter((todo: ITodoItem) => todo.dueDate === today);
    setFilteredTodos(results);
  };

  return (
    <div className="flex w-[20%] bg-white shadow-lg p-4">
    <div className="mb-6">
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
        <div className="ml-3">
          <h2 className="text-lg font-semibold">Hamza mamri</h2>
          <p className="text-sm text-gray-500">Do-it</p>
        </div>
      </div>
      <nav>
        <ul>
          <li className="mb-2">
            <button
              className="bg-green-500 text-white rounded-lg px-4 py-2 hover:bg-green-600 transition duration-300"
              onClick={() => setFormOpen(true)}
            >
              Add New Task
            </button>
          </li>
          <li className="mb-2">
            <button
              className="flex items-center p-2 rounded-lg hover:bg-purple-100 w-full"
              onClick={() => setFilterTag(null)}
            >
              <span className="w-3 h-3 rounded-full bg-gray-300 mr-3"></span>
              Show All Tasks
            </button>
          </li>
          <li className="mb-2">
            <button
              className="flex items-center p-2 rounded-lg hover:bg-purple-100 w-full"
              onClick={showTodayTasks}
            >
              <span className="w-3 h-3 rounded-full bg-blue-300 mr-3"></span>
              Show Today Tasks
            </button>
          </li>
          <li className="mb-2">
            <button
              className="flex items-center p-2 rounded-lg hover:bg-purple-100 w-full"
              onClick={() => setFilterTag("Personal")}
            >
              <span className="text-purple-500 w-3 h-3 rounded-full bg-purple-500 mr-3"></span>
              Personal
            </button>
          </li>
          <li className="mb-2">
            <button
              className="flex items-center p-2 rounded-lg hover:bg-purple-100 w-full"
              onClick={() => setFilterTag("Freelance")}
            >
              <span className="text-yellow-500 w-3 h-3 rounded-full bg-yellow-500 mr-3"></span>
              Freelance
            </button>
          </li>
          <li className="mb-2">
            <button
              className="flex items-center p-2 rounded-lg hover:bg-purple-100 w-full"
              onClick={() => setFilterTag("Work")}
            >
              <span className="text-blue-500 w-3 h-3 rounded-full bg-blue-500 mr-3"></span>
              Work
            </button>
          </li>
          <li className="mb-2">
            <button
              className="flex items-center p-2 rounded-lg hover:bg-purple-100 w-full"
              onClick={() => setFilterTag("Other")}
            >
              <span className="text-gray-500 w-3 h-3 rounded-full bg-gray-500 mr-3"></span>
              Other
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </div>
  );
};

export default Sidebar;
