import './App.css';
import { useState } from 'react';

function App() {

//tarefas
const [tasks, setTasks] =  useState([{
  "name":"Lavar roupa",
  "description":"Usar omo",
},{
  "name":"Limpar a cama",
  "description":"Deixar deixar travesseiro no armario",
},{
  "name":"Fazer janta",
  "description":"incluir legumes",
}
])

//tasks de entrada
let [name, setName] = useState()
let [description, setDescription] = useState()


//add task

function addTask(e) {

  const newTask = {
    "name": name,
    "description": description
  }

  setTasks([...tasks, newTask])

  e.preventDefault()
}

//controle dos inputs para salvar



//delete task
 function delTask(e) {

  //pega indice e armazena o array em uma variavel
  let p = e.target.value 
  let taskDel = tasks[p]
 
  //testa se é diferente do indice de exclusao e retorna
  function condition(task) {
    if(task!== taskDel){
      return task
    }
  }
  let newTasks =  tasks.filter(condition)

  //passa o novo array 
  setTasks(newTasks)

}


  return (
    <div className="App">

      <div className="form">
      <form onSubmit={(e)=>addTask(e)}>
          <input maxLength={20} type="text" name="name" placeholder='Tarefa' onChange={(e)=>setName(e.target.value)}/>
          <input maxLength={20} type="text" name="description" placeholder='Descrição'onChange={(e)=>setDescription(e.target.value)} />
          <button type="submit" className='add' >Add. Tarefa</button>
      </form>
      </div>

      <div className='tasks'>
      {tasks.map((task,key)=>(
              <div className='card-task'>
                <h2>{task.name}</h2>
                <p>{task.description}</p>
                <button value={key} className='red' onClick={(e)=>delTask(e)}>Delete</button>
              </div>
            ))}
      </div>


    </div>
  );
}

export default App;
