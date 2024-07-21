import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { LoginPages, CounterPages, CounterwithHook, UsersPages} from './componentes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <CounterPages/> */}
      {/* <LoginPages /> */}
    {/*   <CounterwithHook/> */}
    <UsersPages/>
    </>
  )
}

export default App
