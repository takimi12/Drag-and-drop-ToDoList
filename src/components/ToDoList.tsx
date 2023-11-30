import React from "react";
import { Todo } from "../model";
import SingleTodo from "./SingleToDo";
import styles from "./ToDoList.module.scss";
import { Droppable } from "react-beautiful-dnd";

interface props {
  todos: Array<Todo>;
  setTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
  completedTodos: Todo[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;

}

const TodoList: React.FC<props> = ({
  todos,
  setTodos,
  completedTodos,
  setCompletedTodos,
}) => {
  return (
    <div className={styles.container}>
      <Droppable droppableId="TodosList">
        {

          (provided) => (
            <div 
            className={styles.todos}
            ref={provided.innerRef}
            {...provided.droppableProps}
            >
            <span className={styles.todos_heading}>Completed Tasks</span>
          
          {todos.map((todo, index) => (
            <SingleTodo
            index={index}
              key={todo.id}
              todo={todo}
              todos={completedTodos}
              setTodos={setCompletedTodos}
            />
          ))}
          </div>
          )
        }


     
      </Droppable>
      <Droppable droppableId="TodosRemove">
        {
         (provided) => (
          <div
           className={`${styles.todos} ${ styles.remove}`}
           ref={provided.innerRef}
           {...provided.droppableProps}
           >
          <span className={styles.todos__heading} >Active Tasks</span>
            
            {todos.map((todo, index) => (
              <SingleTodo
              index={index}
                key={todo.id}
                todo={todo}
                todos={todos}
                setTodos={setTodos}
              />
            ))}
             </div>
         ) 
        }
  
       </Droppable>
    </div>
  );
};

export default TodoList;