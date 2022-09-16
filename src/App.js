import './App.css';
import { useState } from 'react';

function App() {

const [tasks, setTasks] =  useState([{
  "name":"Lavar roupa",
  "description":"nao esquecer da agua",
},{
  "name":"Limpar a cama",
  "description":"Limpar travesseiro",
},{
  "name":"Matheus",
  "description":"vindo das aguas",
}
])


//add task


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

  //passa o novo array sem o excluido paa o state
  setTasks(newTasks)

}


  return (
    <div className="App">

      <div className="form">
      <form action="/">
          <input type="text" placeholder='Tarefa' />
          <input type="text" placeholder='Descrição' />
          <button type="submit" className='add'>Add. Tarefa</button>
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
