import React, {useState, useRef, useEffect} from 'react';
import { Todo } from '../model';
import styles from "./SingleToDo.module.scss";
import { AiFillEdit } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';

type Props = {
  index: number;
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleToDo = ({index, todo, todos, setTodos }: Props) => {
    const [edit, setEdit] = useState<boolean>(false); 
    const [editTodo, setEditTodo] = useState<string>(todo.todo);
    
 
 
    const handleDone = (id: number) => {
    setTodos(
      todos.map((todoItem) =>
        todoItem.id === id ? { ...todoItem, isDone: !todoItem.isDone } : todoItem
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
};

const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();

    setTodos(todos.map((todo) => (
        todo.id === id ? { ...todo, todo: editTodo } : todo
    )));
    setEdit(false);
}

useEffect(() => {
    inputRef.current?.focus();
},[edit])

const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
     className={styles.todos__single}
     onSubmit={(e) => {handleEdit(e, todo.id)}}
     >
      {edit ? (
        <input 
        value={editTodo}
        onChange={() => setEditTodo(editTodo)}
        className={styles['todos__single--text']}
        />
      ) : todo.isDone ? (
        <s className={styles['todos__single--text']}>{todo.todo}</s>
        ) : (
        <span className={styles['todos__single--text']}>{todo.todo}</span>
      )}

      <div>
        <span className={styles.icon}
        
        onClick={() =>{
            if (!edit && !todo.isDone){
            setEdit(!edit);
        }
    }}
        >
          <AiFillEdit />
        </span>
        <span className={styles.icon}>
          <AiFillEdit />
        </span>
        <span
          className={styles.icon}
          onClick={() => handleDone(todo.id)}
        >
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleToDo;
