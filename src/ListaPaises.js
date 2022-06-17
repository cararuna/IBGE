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
      })
  }

  useEffect(() => {
    loadPaisesList(url)
  }, [])

  return paises?.map(pais => (
    <option value={1}>{pais.nome.abreviado} ({pais.id['ISO-3166-1-ALPHA-2']})</option>
  ))
}

export default ListaPaises
