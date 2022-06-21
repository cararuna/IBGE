import React from 'react'
import ListaPaises from './ListaPaises'
import País from './País'
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
      <div>
        <País />
      </div>
    </section>
  )
}

export default App
