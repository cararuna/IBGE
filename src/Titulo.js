import React from 'react'
import IBGE from '../src/logoIbge.png';




const Titulo = props => {
  return (
    <div className="headerPrincipal">
      <div className="headerUm"><img src={IBGE} className="logoIbge" /></div>
      
      <div className="headerDois">Saiba mais no portal Cidades@</div>
    </div>
  )
}

export default Titulo
