import React, { useEffect, useState } from 'react'
const url = 'https://servicodados.ibge.gov.br/api/v1/paises'

const ListaPaises = () => {
  const [paises, setPaises] = useState([])
  const [país, setPaís] = useState('')
  const [area, setArea] = useState('')

  const loadPaisesList = url => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setPaises(data)
        console.log(data)
        console.log(data[0].nome.abreviado)
      })
  }

  useEffect(() => {
    loadPaisesList(url)
  }, [])

  function update() {
    var selected = document.getElementById('language')
    var option = selected.options[selected.selectedIndex]

    document.getElementById('text').value = option.text
    var paisEscolhido = option.value
    console.log(paisEscolhido.slice(0, -5))

    const index = paises.findIndex(object => {
      return object.nome.abreviado === paisEscolhido.slice(0, -5)
    })
    console.log(index)
    var nomePais = paises[index].nome.abreviado
    console.log(nomePais)
    setPaís(paises[index])
    setArea(paises)
  }

  return (
    <>
      <select id="language" onChange={() => update()}>
        {paises?.map(pais => (
          <option id="paisSelecionado">
            {pais.nome?.abreviado} ({pais.id['ISO-3166-1-ALPHA-2']})
          </option>
        ))}
      </select>
      <div id="infoPaises">
        <div className="nomePaís">Nome do País: {país.nome?.abreviado}</div>
        <br></br>
        <div className="areaTerritorial">
          Area Territorial: {país.area?.total} {país.area?.unidade.símbolo}
        </div>
        <br></br>
        <div className="capital">Capital: {país.governo?.capital.nome}</div>
        <br></br>
        <div className="linguaPrincipal">
          Língua Principal: {país.linguas[0]?.nome}
        </div>
        <br></br>
        <div className="Localizacao">
          Localização: {país.localizacao?.regiao.nome}
        </div>
        <br></br>
        <div className="unidadeMonetária">
          Unidade Monetária: {país['unidades-monetarias'][0]?.nome}
        </div>
        <br></br>
        <div className="historico">Histórico: {país?.historico}</div>
      </div>
    </>
  )
}

export default ListaPaises
