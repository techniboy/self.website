import { useState } from 'react'
import { IntroTextWrapper } from './components/IntroTextWrapper/IntroTextWrapper.component'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <IntroTextWrapper/>
    </div>
  )
}

export default App
