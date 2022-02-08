import { ThemeMode } from '../types/ThemeMode'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'

const useThemeMode = (): [ThemeMode, Dispatch<SetStateAction<ThemeMode>>] => {
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme as ThemeMode)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  return [theme, setTheme]
}

export default useThemeMode
