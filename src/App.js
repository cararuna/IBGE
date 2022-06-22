import React from 'react'
import ListaPaises from './ListaPaises'
import Titulo from './Titulo'
import './style.css'

const App = () => {
  return (
    <section>
      <Titulo texto="Países" />

      <ListaPaises />

      <div>
        <input type="text" id="text"></input>
      </div>
      
    </section>
  )
}

export default App
