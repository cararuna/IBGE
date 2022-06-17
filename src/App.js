import React from 'react'
import ListaPaises from './ListaPaises'
import Titulo from './Titulo'

const App = () => {
  return (
    <section>
      <Titulo texto="Países" />
      <select id="selectList">
        <ListaPaises />
      </select>
    </section>
  )
}

export default App
