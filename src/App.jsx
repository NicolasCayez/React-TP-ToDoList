import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//? Partie 3 et 4
const TODOS = [
  {todo:"Devoirs", date:"2025-01-12", checked:false},
  {todo:"Lessive", date:"2025-01-14", checked:true},
  {todo:"Mettre la table", date:"2025-01-18", checked:false},
  {todo:"Cuisine", date:"2025-02-02", checked:false},
  {todo:"Vaisselle", date:"2025-02-11", checked:false}
]

export default function App() {
  const DATE = new Date();

  return (
    <>
      <article className="todolist">
        <h1>Ma ToDo List</h1>
        <h2>{DATE.toLocaleString()}</h2>

        {/* Partie 1
        <ToDo /> */}

        {/* Partie 2
        <ul>
          <ToDo todo={"Mettre la table"} date={new Date("2025-01-12").toLocaleDateString()} />
          <ToDo todo={"Cuisine"} date={new Date("2025-02-23").toLocaleDateString()} />
          <ToDo todo={"Vaisselle"} date={new Date("2025-04-02").toLocaleDateString()} />
        </ul> */}

        {/* Partie 3
        <ul>
          {TODOS.map((uneTache, index) =>
            <ToDo key={index} todo={uneTache.todo} date={uneTache.date} />
          )}
        </ul> */}

        {/* Partie 4 */}
        <ul>
          {TODOS.map((uneTache, index) =>
            // <ToDo key={index} todo={uneTache.todo} date={uneTache.date} checked={uneTache.checked} />
            // <ToDoTernaire key={index} todo={uneTache.todo} date={uneTache.date} checked={uneTache.checked} />
            <ToDoAnd key={index} todo={uneTache.todo} date={uneTache.date} checked={uneTache.checked} />
          )}
        </ul>
      </article>
    </>
  )
}

//? Partie 1
// function ToDo({todo, date}){
//   return (
//     <>
//       <ul>
//         <li>Devoirs</li>
//         <li>Lessive</li>
//         <li>Mettre la table</li>
//         <li>Cuisine</li>
//         <li>Vaisselle</li>
//       </ul>
//     </>
//   )
// }

//? Partie 2 et 3
// function ToDo({todo, date}){
//   return (
//     <>
//       <li>{todo} - {date}</li>
//     </>
//   )
// }

//? Partie 4
function ToDo({todo, date, checked}){
  if (checked) {
    return (
      <>
        <li className="green"><input type="checkbox" defaultChecked /><label>{todo} - {date}</label></li>
      </>
    )
  }else{
    return (
      <>
        <li className="orange"><input type="checkbox" /><label>{todo} - {date}</label></li>
      </>
    )
  }
}

function ToDoTernaire ({todo, date, checked}) {
  return (
    <>
      {checked ? <li className="green"><input type="checkbox" defaultChecked /><label>{todo} - {date}</label></li> : <li className="orange"><input type="checkbox" /><label>{todo} - {date}</label></li> }
    </>
  )
}

function ToDoAnd ({todo, date, checked}) {
  return (
    <>
      <li className={checked ? "green" : "orange"}>{checked && <input type="checkbox" defaultChecked />}<label>{todo} - {date}</label></li>
    </>
  )
}

