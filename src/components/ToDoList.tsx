import React from 'react'
import styles from "./ToDoList.module.scss"
import { Todo } from '../model'
import SingleToDo from './SingleToDo';

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}


const ToDoList: React.FC<Props> = ({todos, setTodos}) => {
  return (
    <div className={styles.todos}>
        {todos.map(todo => (
            <SingleToDo 
            todo={todo} 
            key={todo.id} 
            todos={todos}
            setTodos={setTodos}
            />
          ))}
    </div>
  )
}

export default ToDoList