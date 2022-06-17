import React, { useEffect, useState } from 'react'
const url = 'https://servicodados.ibge.gov.br/api/v1/paises'

const ListaPaises = () => {
  const [paises, setPaises] = useState([])

  const loadPaisesList = url => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setPaises(data)
        console.log(paises)
        console.log(data)
      })
  }

  useEffect(() => {
    loadPaisesList(url)
  }, [])

  return (
    <div>
      <ul>
        {paises.map(pais =>(<option key={paises.nome.abreviado}>{paises.nome.abreviado}</option>))}
      </ul>
    </div>
  )
}

export default ListaPaises
