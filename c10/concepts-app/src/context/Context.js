import React from 'react'

export const themes = {
  light: {
    name: 'light',
    foreground: 'blue',
    background: 'orange'
  },
  dark: {
    name: 'dark',
    foreground: 'orange',
    background: 'blue'  
  }
}

export const Context = React.createContext(themes.light)