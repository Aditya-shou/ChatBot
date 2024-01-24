import './App.css'
import ChatGPT from './Component/Chatgpt';

import {ChakraProvider} from '@chakra-ui/react'


function App() {
  
  return (
    <div className="App">
      <ChakraProvider>
      <ChatGPT/>
      </ChakraProvider>
    </div>
  )
}

export default App