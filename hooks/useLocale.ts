import { LocaleContext } from "@context/LocaleContext"
import { useContext } from "react"

const useLocale = () => {
  return useContext(LocaleContext)
}

export default useLocale