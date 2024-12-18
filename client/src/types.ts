export interface ITodoItem {
    id: number;
    title: string;
    tag: 'Personal' | 'Freelance' | 'Work' | 'Other';
    dueDate: string;
    dueTime: string;
    completed: boolean;
  }

export interface IAddTodoProps {
    formOpen: boolean, 
    setTodos: React.Dispatch<React.SetStateAction<ITodoItem[]>>;
    filterTodos: (tag: string | null) => void
    filterTag: string | null
    setFormOpen: (formOpen : boolean) => void
}

export interface ITodoItemProps {
    filteredTodos: ITodoItem[],
    toggleCompletion: (id: number) => void
    deleteTodo: (id: number) => void
    checked: boolean
    setChecked: (checked: boolean) => void
}

export interface ITodoSectionProps {
    filteredTodos: ITodoItem[],
        setTodos: React.Dispatch<React.SetStateAction<ITodoItem[]>>;
    
}

export interface ISidebarProps {
    todos: ITodoItem[]
  setFilteredTodos: (todos: ITodoItem[]) => void
  setFormOpen: (formOpen: boolean) => void
  setFilterTag:  (filterTag: string | null) => void
}
  
  