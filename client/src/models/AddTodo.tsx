import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { FC, useState } from "react";
import { IAddTodoProps, ITodoItem } from "../types";

const AddTodo: FC<IAddTodoProps> = ({
  formOpen,
  setTodos,
  filterTodos,
  filterTag,
  setFormOpen,
}) => {
  const [title, setTitle] = useState<string>("");
  const [tag, setTag] = useState<"Personal" | "Freelance" | "Work" | "Other">(
    "Personal"
  );
  const [dueDate, setDueDate] = useState<string>("");
  const [dueTime, setDueTime] = useState<string>("");

  const addTodo = () => {
    if (title.trim()) {
      const newTodo: ITodoItem = {
        id: Date.now(),
        title,
        tag,
        dueDate,
        dueTime,
        completed: false,
      };

      console.log(newTodo);

      setTodos((prevTodos: ITodoItem[]) => {
        const updatedTodos = [...prevTodos, newTodo];
        filterTodos(filterTag);
        return updatedTodos;
      });
      resetForm();
    }
  };

  const resetForm = () => {
    setTitle("");
    setTag("Personal");
    setDueDate("");
    setDueTime("");
    setFormOpen(false);
  };

  return (
    <Dialog
      open={formOpen}
      as="div"
      className="relative z-10 focus:outline-none"
      onClose={resetForm}
    >
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel
            transition
            className="w-full max-w-md rounded-xl bg-white p-6 shadow-lg"
          >
            <DialogTitle as="h3" className="text-lg font-medium text-gray-900">
              Add New Task
            </DialogTitle>

            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Title
              </label>
              <input
                type="text"
                className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:border-indigo-500 mb-4"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Tag
              </label>
              <select
                className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:border-indigo-500 mb-4"
                value={tag}
                onChange={(e) =>
                  setTag(
                    e.target.value as
                      | "Personal"
                      | "Freelance"
                      | "Work"
                      | "Other"
                  )
                }
              >
                <option value="Personal">Personal</option>
                <option value="Freelance">Freelance</option>
                <option value="Work">Work</option>
                <option value="Other">Other</option>
              </select>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Due Date
              </label>
              <input
                type="date"
                className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:border-indigo-500 mb-4"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
              />
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Due Time
              </label>
              <input
                type="time"
                className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:border-indigo-500 mb-4"
                value={dueTime}
                onChange={(e) => setDueTime(e.target.value)}
              />
              <button
                className="bg-green-500 text-white rounded-lg px-4 py-2 hover:bg-green-600 transition duration-300"
                onClick={addTodo}
              >
                Add Task
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default AddTodo;
