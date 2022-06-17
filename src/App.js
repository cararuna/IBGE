import React from 'react'
import ListaPaises from './ListaPaises'
import Titulo from './Titulo'

const App = () => {
  return (
    <section>
      <Titulo texto="dale boca" />
      <select>
        <option>
          <ListaPaises />
        </option>
        
      </select>
    </section>
  )
}

export default App
