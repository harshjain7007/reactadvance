import React, { useState } from 'react'
import { counterContext } from './context/context'
import ParentCompo from './context/ParentCompo'
import { ThemeProvider } from './context/ThemeProvider'

const AppDemo = () => {
  const [count, setCount] = useState(1)
  return (
    <>
      <ThemeProvider>
        <counterContext.Provider value={{ count, setCount }}>
          <ParentCompo />
        </counterContext.Provider>
      </ThemeProvider>
    </>
  )
}

export default AppDemo