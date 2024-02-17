import { Logo } from "./components/Logo";
import LogoPlus from "./assets/Icons/plus.svg";
import { Tasks } from "./components/Tasks";
import { FormEvent, useState } from "react";

export function App() {
  const [textTask, setTextTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = (e: FormEvent) => {
    e.preventDefault();
    const obj = { id: e.timeStamp, content: textTask, value: "active" };
    setTasks([...tasks, obj]);
    setTextTask('');
  }

  return (
    <div className="h-screen bg-ignite-gary600">
      <header className="bg-ignite-gary700 w-full h-48">
        <Logo />
      </header>

      <main className="bg-ignite-gary600 flex justify-center">
        <div>
          <form onSubmit={addTask} className="flex w-700 items-center gap-2 -mt-7">
            <input 
              className="flex flex-1 p-4 text-ignite-gary100 items-center gap-2 rounded-lg border border-ignite-gary700 bg-ignite-gary500 default:text-ignite-gary500"
              type="text"
              placeholder="Adicione uma nova tarefa" 
              value={textTask}
              onChange={(e) => setTextTask(e.target.value)}
              required
            />
            <button
              className="inline-block p-4 justify-center items-center gap-2 rounded-lg bg-ignite-blueDark hover:bg-ignite-blue transition"
            >
              <p className="text-ignite-gary100 text-sm font-bold flex">
                <span className="pr-2">Criar</span>
                <img src={LogoPlus} />
              </p>
            </button>
          </form>
          <Tasks
            tasks={tasks}
            setTasks={setTasks}
          />
        </div>
      </main>
    </div>
  )
}