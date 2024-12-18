import { FC } from "react";
import "../styles/todoitem.scss";
import { ITodoItem, ITodoItemProps } from "../types";
import { getTagColor } from "../util/GetTagColor";
import {
  Checkbox,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import {
  PencilIcon,
  TrashIcon,
  EllipsisVerticalIcon,
  CheckIcon,
} from "@heroicons/react/16/solid";

const TodoItem: FC<ITodoItemProps> = ({
  filteredTodos,
  toggleCompletion,
  deleteTodo,
  checked,
  setChecked,
  editTodo
}) => {




  return (
    <ul className="w-full">
      {filteredTodos.map((todo: ITodoItem) => (
        <li
          key={todo.id}
          className="w-full flex items-center justify-start mb-4 p-2 rounded-lg shadow-md bg-white"
        >
          <span
            className={`w-3 max-w-[5%] h-3 mr-1 mb-[-2px] rounded-full ${getTagColor(todo.tag)}`}
          ></span>

          <h2
            className={`text-md min-w-[75%] max-w-[75%] font-semibold cursor-pointer text-ellipsis overflow-hidden whitespace-nowrap ${
              todo.completed ? "line-through text-gray-500" : "text-gray-800"
            }`}
            onClick={() => toggleCompletion(todo.id)}
          >
            {todo.title}
          </h2>
          
          
          <p className="text-sm text-gray-500 w-[10%] whitespace-nowrap overflow-hidden text-ellipsis">
            {todo.dueTime}
          </p>


          <div className="lg:w-[5%] min-w-3 flex justify-center">
            <Checkbox
              checked={checked}
              onChange={setChecked}
              onClick={() => toggleCompletion(todo.id)}
              className=" group size-5 rounded-xl bg-white p-[0.25rem] ring-1 ring-purple ring-inset data-[checked]:bg-gray-200"
            >
              <CheckIcon className="hidden size-3 fill-black group-data-[checked]:block" />
            </Checkbox>
          </div>

          <div className="w-[5%] min-w-[10px]">
            <Menu>
              <MenuButton className="inline-flex items-center gap-2 rounded-md bg-white py-1.5 px-3 transition duration-300 ease-out focus:outline-none data-[hover]:bg-gray-100 data-[open]:bg-gray-100 data-[focus]:outline-1 data-[focus]:outline-white">
                <EllipsisVerticalIcon className="size-4 fill-black/60" />
              </MenuButton>

              <MenuItems
                transition
                anchor="bottom end"
                className="w-52 origin-top-right rounded-xl border border-white/5 bg-gray-100 p-1 text-sm/6 text-black/60 transition duration-100 ease-out"
              >
                <MenuItem>
                  <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3  hover:bg-blue-100 transition duration-300"
                   onClick={() => editTodo(todo.id)}
                  >
                    <PencilIcon className="size-4 fill-black/60" />
                    Edit
                  </button>
                </MenuItem>
                <MenuItem>
                  <button
                    className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3  hover:bg-red-400 transition duration-300"
                    onClick={() => deleteTodo(todo.id)}
                  >
                    <TrashIcon className="size-4 fill-black/60" />
                    Delete
                  </button>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>

        </li>
      ))}
    </ul>
  );
};

export default TodoItem;
