import React from 'react'
import Heading from './components/Heading'
import CounterH from './usingHooks/CounterH'
import CounterR from './usingRedux/CounterR'

const App = () => {
  return (
    <div>
      <Heading />
      <CounterH />
      <CounterR />
    </div>
  )
}

export default App
