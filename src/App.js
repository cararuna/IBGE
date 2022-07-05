import React from 'react'
import ListaPaises from './ListaPaises'
import Titulo from './Titulo'
import './style.css'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme'
import MapPage from './MapPage'

/* import  */

const App = () => {
  return (
    <ChakraProvider theme={theme}>
          <Titulo texto="País" />
      <div className="display">
        <section>
          <div className="spacer layer"></div>
          <ListaPaises />
          <div>
            <input type="text" id="text"></input>
          </div>
        </section>
        <MapPage />
      </div>
    </ChakraProvider>
  )
}

export default App
