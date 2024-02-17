import { Trash } from 'phosphor-react';

interface ListProps {
  task: {
    id: string;
    content: string,
    value: string,
  },
  handleConcluidChange: () => void,
}

export function List({ task, handleConcluidChange }: ListProps) {
  return (
    <div className="flex flex-col items-start gap-3 self-stretch">
      <div className="flex p-4 items-start gap-3 self-stretch rounded-lg border border-ignite-gary400 bg-ignite-gary500 shadow">
        <div className='text-ignite-purple hover:text-ignite-purple transition flex w-6 h-6 p-1 justify-center items-center'>
          <input 
            className='text-ignite-purple hover:text-ignite-purple bg-ignite-gary500 transition flex w-6 h-6 p-1 justify-center items-center' 
            type="radio" 
            value={task.id}
            checked={task.value === 'concluid'}
            onChange={handleConcluidChange}
          />
        </div>
        <p className={`flex-1 text-sm font-normal
        ${task.value === 'concluid' ? 'line-through text-ignite-gary300' : 'text-ignite-gary100'}
        `}>
          {task.content}
        </p>
        <div className='flex justify-center items-center text-ignite-gary300 hover:text-ignite-danger transition'>
          <Trash size={24} />
        </div>
      </div>
    </div>
  )
}