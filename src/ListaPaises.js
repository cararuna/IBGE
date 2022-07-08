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
import {
  Select,
  Divider,
  Container,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Stack,
  Heading,
  Text,
  theme
} from '@chakra-ui/react'

const url = 'https://servicodados.ibge.gov.br/api/v1/paises'

const ListaPaises = (props) => {
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
    <div className="container">
      <div className="headerSearch">
        <Select
          id="language"
          onChange={() => update()}
          placeholder='Escolha um país'
        >
          {paises?.map(pais => (
            <option className="paisSelecionado">
              {pais.nome?.abreviado} ({pais.id['ISO-3166-1-ALPHA-2']})
            </option>
          ))}
        </Select>
      </div>

      <div className="layoutLeft">
        <div className="infoPaises">
          <div className="nomePaís">
            <FontAwesomeIcon
              className="nameTag"
              icon={faFlag}
              style={{ color: 'black' }}
            />
            Nome:{' '}
            <div style={{ ['font-weight']: 'lighter' }}>
              {país.nome?.abreviado}
            </div>
          </div>
          <div className="areaTerritorial">
            <FontAwesomeIcon icon={faAreaChart} style={{ color: 'black' }} />{' '}
            Area Territorial:
            <div style={{ ['font-weight']: 'lighter' }}>
              {país.area?.total} {país.area?.unidade.símbolo}
            </div>
          </div>
          <div className="capital">
            <FontAwesomeIcon
              icon={faMagnifyingGlassArrowRight}
              style={{ color: 'black' }}
            />{' '}
            Capital:
            <div style={{ ['font-weight']: 'lighter' }}>
              {país.governo?.capital.nome}
            </div>
          </div>
          <div className="linguaPrincipal">
            <FontAwesomeIcon icon={faPeopleGroup} style={{ color: 'black' }} />{' '}
            Língua Principal:
            <div style={{ ['font-weight']: 'lighter' }}>
              {/* {país?.linguas[0]?.nome} */}
            </div>
          </div>
          <div className="Localizacao">
            <FontAwesomeIcon
              icon={faArrowAltCircleDown}
              style={{ color: 'black' }}
            />{' '}
            Localização:
            <div style={{ ['font-weight']: 'lighter' }}>
              {país.localizacao?.regiao.nome}
            </div>
          </div>
          <div className="unidadeMonetária">
            <FontAwesomeIcon icon={faDollarSign} style={{ color: 'black' }} />{' '}
            Unidade Monetária:
            <div style={{ ['fontWeight']: 'lighter' }}>
              {/* {país['unidades-monetarias'][0]?.nome} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListaPaises
