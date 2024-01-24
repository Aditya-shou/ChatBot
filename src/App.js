import './App.css'
import ChatGPT from './Component/Chatgpt';

import {ChakraProvider} from '@chakra-ui/react'


function App() {
  

    // Get the request body set up with the model we plan to use
    // and the messages which we formatted above. We add a system message in the front to'
    // determine how we want chatGPT to act. 
    
  return (
    <div className="App">
      <ChakraProvider>
      <ChatGPT/>
      </ChakraProvider>
    </div>
  )
}

export default App