import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//? Partie 3 et 4
const TODOS = [
  {todo:"Devoirs", date:"2025-01-12", checked:false, heure:2, categorie:"ecole"},
  {todo:"Lessive", date:"2025-01-14", checked:true, heure:3, categorie:"menage"},
  {todo:"Mettre la table", date:"2025-01-18", checked:false, heure:1, categorie:"repas"},
  {todo:"Cuisine", date:"2025-02-02", checked:false, heure:2, categorie:"repas"},
  {todo:"Vaisselle", date:"2025-02-11", checked:false, heure:1, categorie:"repas"}
]

export default function App() {
  const DATE = new Date();

  const [ecole, setEcole] = useState(true);
  const [menage, setMenage] = useState(true);
  const [repas, setRepas] = useState(true);

  const TODOLIST = TODOS.filter(element => {
    if (element.categorie == "ecole" && !ecole == true) {
      return false
    } else if (element.categorie == "menage" && !menage == true) {
      return false
    } else if (element.categorie == "repas" && !repas == true) {
      return false
    } else {
      return true
    }
  })

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

        //?TP 2 - Partie 2
        <section>
          <input type="checkbox" name="ecole" id="" checked={ecole} onChange={()=>setEcole(!ecole)} /><label>Ecole</label>
          <input type="checkbox" name="menage" id="" checked={menage} onChange={()=>setMenage(!menage)} /><label>Ménage</label>
          <input type="checkbox" name="repas" id="" checked={repas} onChange={()=>setRepas(!repas)} /><label>Repas</label>
        </section>

        {/* Partie 4 */}
        <ul>
          {/* {TODOS.map((uneTache, index) => */}
          {TODOLIST.map((uneTache, index) =>
            // <ToDo key={index} todo={uneTache.todo} date={uneTache.date} checked={uneTache.checked} />
            // <ToDoTernaire key={index} todo={uneTache.todo} date={uneTache.date} checked={uneTache.checked} />
            <ToDoAnd key={index} todo={uneTache.todo} date={uneTache.date} checked={uneTache.checked} heureRestante={uneTache.heure} />
          )}
        </ul>

        //?TP 2 - Partie 1
        <Form onSubmit={(event)=>handleSubmit(event)}/>
      </article>
    </>
  )
  function handleSubmit(event) {
    event.preventDefault()
    const INPUTS = document.querySelectorAll('input[type="text"]')
    INPUTS.forEach((unInput) => {console.log(unInput.value)})
  }
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
// function ToDo({todo, date, checked}){
//   if (checked) {
//     return (
//       <>
//         <li className="green"><input type="checkbox" defaultChecked /><label>{todo} - {date}</label></li>
//       </>
//     )
//   }else{
//     return (
//       <>
//         <li className="orange"><input type="checkbox" /><label>{todo} - {date}</label></li>
//       </>
//     )
//   }
// }

// function ToDoTernaire ({todo, date, checked}) {
//   return (
//     <>
//       {checked ? <li className="green"><input type="checkbox" defaultChecked /><label>{todo} - {date}</label></li> : <li className="orange"><input type="checkbox" /><label>{todo} - {date}</label></li> }
//     </>
//   )
// }

// function ToDoAnd ({todo, date, checked}) {
//   return (
//     <>
//       <li className={checked ? "green" : "orange"}>{checked && <input type="checkbox" defaultChecked />}<label>{todo} - {date}</label></li>
//     </>
//   )
// }

//?TP 2 - Partie 1 et 2
function ToDoAnd({todo, date, checked, heureRestante}) {

  const [heures, setHeures] = useState(heureRestante);

  function handleClick(event, todo) {
    // alert(todo)
  }

  //! la valeur change mais pas l'affichage car le texte n'est pas un enfant. dans le cours page 55 on a un onClick commun -> méthode différente)
  function handleClickMinus() {
    if (heures > 0) {
      setHeures(heures - 1)
      console.log(heures)
    }
    
  }

  function handleClickPlus() {
    setHeures(heures + 1)
    console.log(heures)
  }

  return (
    <>
      <li onClick={(event)=>handleClick(event, todo)} className={checked ? "green" : "orange"} >{checked && <input type="checkbox" defaultChecked />}
        <label>{todo} - {date} </label>
        <span>
          <button onClick={handleClickMinus}>-</button>
          <button onClick={handleClickPlus}>+</button>
          Reste {heures} heures
        </span>
      </li>
    </>
  )
}

function Form({onSubmit}) {
  function handleChange(event) {
    console.log(event.target.value)
  }
  return (
    <>
    <form>
      <input type="text" name="" id="" placeholder="La ToDo" onChange={(event)=>handleChange(event)}/>
      <input type="text" name="" id="" placeholder="La Date" onChange={(event)=>handleChange(event)}/>
      <input type="submit" onClick={(event)=>onSubmit(event)}/>
    </form>
    </>
  )
}
