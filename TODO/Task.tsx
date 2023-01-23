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
                <div className=''>
                    <input
                        value={todo.title}
                        onChange={e => onChange({
                            ...todo,
                            title: e.target.value
                        })}/>
                    <button 
                    className=' rounded-full'
                    onClick={()=>setIsEditing(false)}>
                        Save
                    </button>
                </div>
            </>
        )
    } else {
        todoContent = (
            <>
                <div className=''>
                    <span>{todo.title}</span>
                    <button 
                    className=' rounded-full'
                    onClick={()=>setIsEditing(true)}>
                        Edit
                    </button>
                </div>
            </>
        );
    }

  return (
    <div>
         <label>
            {/* <input type="text"
                checked={todo.done}
                onChange={
                    e => onChange({
                        ...todo,
                        done: e.target.checked
                    })
                } /> */}
            {todoContent}
            <button onClick={() => onRemove(todo.id)}>Remove</button>
        </label>
    </div>
  )
}


