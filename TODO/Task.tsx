import {useState} from 'react'

interface TaskProps {
    todo: { title: string, done: boolean, id: number };
    onChange: (nextTodo: { title: string, done: boolean, id: number }) => void;
    onRemove: (index: number) => void;
}
export default function Task({todo,onChange,onRemove}:TaskProps) {
    const [isEditing, setIsEditing] = useState(false);
    let todoContent;
    if (isEditing) {
        todoContent = (
            <>
                <input

                    value={todo.title}
                    onChange={e => onChange({
                        ...todo,
                        title: e.target.value
                    })}
                />
                <button onClick={()=>setIsEditing(false)}>
                    Save
                </button>
            </>
        )
    } else {
        todoContent = (
            <>
                <span>{todo.title}</span>
                <button onClick={()=>setIsEditing(true)}>
                    Edit
                </button>
            </>
        );
    }

    console.log(todoContent)

  return (
    <div>
         <label>
            <input type="checkbox"
                checked={todo.done}
                onChange={
                    e => onChange({
                        ...todo,
                        done: e.target.checked
                    })
                } />
            {todoContent}
            <button onClick={() => onRemove(todo.id)}>Remove</button>
        </label>
    </div>
  )
}


