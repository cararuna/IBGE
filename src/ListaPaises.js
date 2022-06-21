import React, { useEffect, useState } from 'react'
const url = 'https://servicodados.ibge.gov.br/api/v1/paises'

const ListaPaises = () => {
  const [paises, setPaises] = useState([])

  const loadPaisesList = url => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setPaises(data)
        console.log(data);
        console.log(data[0].nome.abreviado)
      })
  }

  useEffect(() => {
    loadPaisesList(url)
  }, [])

  function update() {
    var selected = document.getElementById('language')
    var option = selected.options[selected.selectedIndex]

    console.log(option)
    document.getElementById('text').value = option.text
    var paisEscolhido = option.value
    console.log(paisEscolhido)

  }

  return (
    <>
      <select id="language" onChange={() => update()}>
        {paises?.map(pais => (
          <option id="paisSelecionado">
            {pais.nome.abreviado} ({pais.id['ISO-3166-1-ALPHA-2']})
          </option>
        ))}
      </select>
      <div id="infoPaises">
        <div className="nomePaís">paises</div>
        <div className="areaTerritorial">areaTerritorial</div>
        <div className="populaçãoEstimada">populaçãoEstimada</div>
        <div className="densidadeDemográfica">densidadeDemográfica</div>
        <div className="matrículasFundamental">matrículasFundamental</div>
        <div className="idh">idh</div>
        <div className="receitasRealizadas">receitasRealizadas</div>
        <div className="rendimentoPerCapita">rendimentoPerCapita</div>
        <div className="totalVeículos">totalVeículos</div>
      </div>
    </>
  )
}

export default ListaPaises
