import { useState } from 'react'
import { IntroTextWrapper } from './components/IntroTextWrapper/IntroTextWrapper.component'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex justify-center items-center bg-black text-[#f5f4ee] h-screen selection:bg-[#D9FF00] selection:text-black">
      <IntroTextWrapper />
    </div>
  )
}

export default App
