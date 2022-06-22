import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFlag,
  faAreaChart,
  faArrowAltCircleDown,
  faPeopleGroup,
  faMagnifyingGlassArrowRight,
  faDollarSign,
  faSearch
} from '@fortawesome/free-solid-svg-icons'

const url = 'https://servicodados.ibge.gov.br/api/v1/paises'

const ListaPaises = () => {
  const [paises, setPaises] = useState([])
  const [país, setPaís] = useState('')

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
  }

  return (
    <>
      <div className="headerSearch">
        <div className="selectPais">
          Selecione um País{' '}
          <FontAwesomeIcon icon={faSearch} style={{ color: 'Black' }} />
        </div>
        <select id="language" onChange={() => update()}>
          {paises?.map(pais => (
            <option className="paisSelecionado">
              {pais.nome?.abreviado} ({pais.id['ISO-3166-1-ALPHA-2']})
            </option>
          ))}
        </select>
      </div>
      <div className="layoutLeft">
        <div className="infoPaises">
          <div className="nomePaís">
            <FontAwesomeIcon icon={faFlag} style={{ color: 'black' }} /> Nome do
            País: {país.nome?.abreviado}
          </div>
          <br></br>
          <div className="areaTerritorial">
            <FontAwesomeIcon icon={faAreaChart} style={{ color: 'black' }} />{' '}
            Area Territorial: {país.area?.total} {país.area?.unidade.símbolo}
          </div>
          <br></br>
          <div className="capital">
            <FontAwesomeIcon
              icon={faMagnifyingGlassArrowRight}
              style={{ color: 'black' }}
            />{' '}
            Capital: {país.governo?.capital.nome}
          </div>
          <br></br>
          <div className="linguaPrincipal">
            <FontAwesomeIcon icon={faPeopleGroup} style={{ color: 'black' }} />{' '}
            Língua Principal: {/* {país?.linguas[0]?.nome} */}
          </div>
          <br></br>
          <div className="Localizacao">
            <FontAwesomeIcon
              icon={faArrowAltCircleDown}
              style={{ color: 'black' }}
            />{' '}
            Localização: {país.localizacao?.regiao.nome}
          </div>
          <br></br>
          <div className="unidadeMonetária">
            <FontAwesomeIcon icon={faDollarSign} style={{ color: 'black' }} />{' '}
            Unidade Monetária: {/* {país['unidades-monetarias'][0]?.nome} */}
          </div>
          <br></br>
        </div>

        <div className="layoutRight">
          <div className="historico">{país?.historico}</div>
        </div>
      </div>
    </>
  )
}

export default ListaPaises
