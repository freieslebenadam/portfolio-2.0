import React, { useState } from 'react'
import { ChildrenProps } from '@types'
import { cs, en } from '@lib/lang'
import { ITranslation } from '@interfaces'

type Locale = "cs" | "en"

interface ILocaleContext {
  t: ITranslation,
  setLocaleTo: (locale: Locale) => void
}

const initialContext: ILocaleContext = {
  t: en,
  setLocaleTo: (locale: Locale) => console.log(locale)
}

export const LocaleContext = React.createContext(initialContext)

const LocaleContextProvider = ({ children }: ChildrenProps) => {
  const [t, setT] = useState(en)

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