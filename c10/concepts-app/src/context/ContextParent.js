import { useState } from 'react'
import ThemedContainer from './ThemedContainer'

import { Context, themes } from './Context'

function ContextParent() {
  const [theme, setTheme] = useState(themes.light)

  const handleClick = (evt) => {
    if (theme.name === themes.light.name) {
      setTheme(themes.dark)
    } else {
      setTheme(themes.light)
    }
  }

  return (
    <>
      <div>
        the current value is {theme.name}
      </div>
      <Context.Provider value={theme}>
        <ThemedContainer />
      </Context.Provider>
      <div>
        <input type='button' value='switch' onClick={handleClick} />
      </div>        
    </>
  )
}

export default ContextParent
