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
      {tasks.map((task)=>(
              <div className='card-task'>
                <h2>{task.name}</h2>
                <p>{task.description}</p>
                <button className='red'>Delete</button>
              </div>
            ))}
      </div>


    </div>
  );
}

export default App;



//objeto para guardar as tasks  
//estrutura => nome, desc. e btn de excluir

//componente de exibicao, criar um map e o componente dentro

//