import { useState, useEffect, useContext } from 'react'
import { ThemeContext } from '../context'

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [data, setData] = useState({})

  useEffect(() => {
    if (!url) return
    setLoading(true)
    const fetchData = async () => {
      try {
        const rawData = await fetch(url)
        const res = await rawData.json()
        setData(res)
      } catch (err) {
        console.log(err)
        setError(err)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [url])

  return { loading, data, error }
}

export const useTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return { theme, toggleTheme }
}
