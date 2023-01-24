import {useState} from 'react'

interface TaskProps {
    todo: { title: string, done: boolean, id: number };
    onChange: (nextTodo: { title: string, done: boolean, id: number }) => void;
    onRemove: (index: number) => void;
}


export default function Task({todo,onChange,onRemove}:TaskProps) {
    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState(todo.title);

    console.log(todo.title)
    console.log(todo.id)
  return (
    <div className='flex flex-col m-4'>
    <label className='flex flex-row items-center mb-2'>
        <input
                className='focus:outline-none focus:shadow-outline-blue border-2  rounded-md py-2 px-4 block w-full appearance-none leading-normal'
                value={title}
                onChange={e => setTitle(e.target.value)}
                readOnly={!isEditing}
            />
        {!isEditing && (
            <button
                className='bg-green-400 rounded-full p-2 text-white'
                onClick={() => setIsEditing(true)}>
                Edit
            </button>
        )}
        {isEditing && (
            <button
                className='bg-green-500 rounded-full p-2 text-white'
                onClick={() => {
                    if (title.trim() !== '') {
                        onChange({ ...todo, title });
                        setIsEditing(false);
                    }
                }}
            >
                Save
            </button>
        )}
        <button
            className='bg-red-500 rounded-full p-2 ml-2 text-white'
            onClick={() => onRemove(todo.id)}>
            Remove
        </button>
    </label>
</div> )
}
