import React,{useRef} from 'react'
import styles from './InputField.module.scss';


interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

export const InputField:React.FC<Props> = ({todo, setTodo,handleAdd}: Props) => {
 const inputRef = useRef<HTMLInputElement>(null);
 
 
  return (
    <form className={styles.input} 
    onSubmit={(e) => {
      handleAdd(e)
      inputRef.current?.blur()
    }}>
        <input 
        type="text"
         placeholder="Enter a task" 
         value={todo}
          onChange={(e) => setTodo (e.target.value)}
        className={styles.input__box}
        />
        <button className={styles.input__submit} type="submit">Add</button>
    </form>
  )
}
