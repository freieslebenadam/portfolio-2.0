import { ChildrenProps } from '@types'
import React from 'react'
import LocaleContextProvider from './LocaleContext'

const ContextProvider = ({ children }: ChildrenProps) => {
  return (
    <LocaleContextProvider>
      {children}
    </LocaleContextProvider>
  )
}

export default ContextProvider