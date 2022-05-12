import React, { useState } from 'react'
import { ChildrenProps } from '@types'
import { cs, en } from '@lib/lang'

type Locale = "cs" | "en"

export const LocaleContext = React.createContext({})

const LocaleContextProvider = ({ children }: ChildrenProps) => {
  const [t, setT] = useState(cs)

  const setLocaleTo = (locale: Locale) => {
    switch (locale) {
      case "cs":
        setT(cs)
        break
      case "en":
        setT(en)
        break
      default:
        break
    }
  }

  return (
    <LocaleContext.Provider value={{t, setLocaleTo}}>
      {children}
    </LocaleContext.Provider>
  )
}

export default LocaleContextProvider