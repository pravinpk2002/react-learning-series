import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Card from './Card'

function App() {
  const [count, setCount] = useState(0)
  let name = "Pravin Kale"
  let l = [10,20,30,40]
  let num = 5
  let cards = []
  let header={
    name : "pravin kale",
    age: 25
  }

  for (let index = 0; index < num; index++) {
    cards.push(<Card key={index}/>)
    
  }
  return (
    <>

    <Header email="prravin@gmail.com" phone="1234567" headerInfo={header}/>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div>{name}</div>
      {
        l.map((v)=>{
          return(
            <div>{v}</div>
          )
        })
      }


      {
        (true) ? <h1>true part executed</h1> : <h1>falsse part executed</h1>
      }

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      {cards}
    </>
  )
}

export default App
