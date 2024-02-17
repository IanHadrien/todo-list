import { useEffect, useState } from 'react';
import ClipBoard from '../assets/Icons/Clipboard.svg';
import { Trash } from 'phosphor-react';

interface TasksProps {
  tasks: [],
  setTasks: () => void,
}

interface TasksObj {
  id: string;
  content: string,
  value: string,
}

export function Tasks({ tasks, setTasks }: TasksProps) {
  const [tasksData, setTasksData] = useState([]);
  const [concluid, setConcluid] = useState(0);

  function changeValueById(array: [], byId: string) {
    return array.map((item: TasksObj) => {
        if (item.id == byId && item.value === 'active') {
          return { ...item, value: "concluid" };
        }
        if (item.id == byId && item.value === 'concluid') {
          return { ...item, value: "active" };
        }
        return item;
    });
  }

  function changeCountConcluid(array: []) {
    let countConcluid = 0;
    array.map((item: TasksObj) => {
      if (item.value === 'concluid') countConcluid++;
    });
    return countConcluid;
  }

  function handleConcluidChange(id: string) {
    const newArray = changeValueById(tasksData, id);
    const countConcluid = changeCountConcluid(newArray);
    setConcluid(countConcluid);
    setTasksData(newArray);
    setTasks(newArray)
  }

  function removeTaksk (id: string) {
    const dataRemove = tasksData.filter(item => item.id !== id);
    const countConcluid = changeCountConcluid(dataRemove);
    setConcluid(countConcluid);
    setTasksData(dataRemove)
    setTasks(dataRemove)
  } 

  useEffect(() => {
    setTasksData(tasks);
  }, [tasks]);

  return (
    <div className="flex w-700 flex-col items-start gap-6 mt-16">
      <div className="flex justify-between items-end self-stretch">
        <div className="flex items-center gap-2">
          <p className="text-ignite-blue text-sm font-bold">Tarefas criadas</p>
          <div className="text-xs flex py-p2x px-2 flex-col justify-center items-center gap-2 rounded-full bg-ignite-gary400 text-ignite-gary100">
            <strong>{tasks?.length}</strong>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-ignite-purple text-sm font-bold">Concluídas</p>
          <div className="text-xs flex py-p2x px-2 justify-center items-center gap-1 rounded-full bg-ignite-gary400 text-ignite-gary100">
            <strong>{concluid}</strong>
            <strong>de</strong>
            <strong>{tasks?.length}</strong>
          </div>
        </div>
      </div>
      {tasks?.length <= 0 &&
        <div className="flex py-16 px-6 flex-col justify-center items-center gap-4 self-stretch rounded-lg border-t border-ignite-gary400">
          <img src={ClipBoard} className='w-14 h-14' />
          <div>
            <p className='text-ignite-gary300 text-center text-base font-bold'>
              Você ainda não tem tarefas cadastradas
            </p>
            <p className='text-ignite-gary300 text-center text-base font-normal'>
              Crie tarefas e organize seus itens a fazer
            </p>
          </div>
        </div>
      }
      {tasksData?.length > 0 &&
        tasksData.map((task: TasksObj, index) => (
          <div key={index} className="flex flex-col items-start gap-3 self-stretch">
            <div className="flex p-4 items-start gap-3 self-stretch rounded-lg border border-ignite-gary400 bg-ignite-gary500 shadow">
              <div className='text-ignite-purple hover:text-ignite-purple transition flex w-6 h-6 p-1 justify-center items-center'>
                <input 
                  className='text-ignite-purple hover:text-ignite-purple bg-ignite-gary500 transition flex w-6 h-6 p-1 justify-center items-center' 
                  type="radio" 
                  value={task.id}
                  checked={task.value === 'concluid'}
                  onClick={() => handleConcluidChange(task.id)}
                />
              </div>
              <p className={`flex-1 text-sm font-normal
              ${task.value === 'concluid' ? 'line-through text-ignite-gary300' : 'text-ignite-gary100'}
              `}>
                {task.content}
              </p>
              <div className='flex justify-center items-center text-ignite-gary300 hover:text-ignite-danger transition'>
                <Trash size={24} onClick={() => removeTaksk(task.id)} />
              </div>
            </div>
        </div>
        ))
      }
    </div>
  )
}