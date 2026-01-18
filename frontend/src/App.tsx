import { useState } from 'react'
import reactLogo from './assets/Bike.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://autoplius.lt/skelbimai/motociklai-moto-apranga/motociklai?category_id=3&engine_capacity_from=250&engine_capacity_to=750&slist=2789425011&type_id=1681&order_by=4&order_direction=DESC" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Need money for a motorcycle</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Every click brings me closer to vroom-vroom 🏍️ - {count}
        </button>
      </div>

      <p>P.S</p>
      <p>Kas skaitys tas gaidys</p>
      <p>P.P.S</p>
      <p>Paspausk ant motociklo</p>
    </>
  )
}

export default App
