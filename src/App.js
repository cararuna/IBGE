import React from 'react'
import ListaPaises from './ListaPaises'
import Titulo from './Titulo'
import './style.css'
import { ChakraProvider  } from '@chakra-ui/react'
import theme from './theme'

/* import  */

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <section>
        <Titulo texto="País" />
        <ListaPaises />
        <div>
          <input type="text" id="text"></input>
        </div>
      </section>
    </ChakraProvider>
  )
}

export default App
