import {  useState } from 'react'
import axios  from 'axios'

export default function useApi (initialEndpoint = '', initialParams = {}) {
  const [data, setData] = useState<any>()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState()

  const apiUrl = process.env.EXPO_PUBLIC_BASE_URL

  const fetchData = async (
    endpoint = initialEndpoint,
    params = initialParams
  ) => {
    const fullEndpoint = apiUrl + endpoint
    try {
      const response = await axios.get(`${apiUrl}${endpoint}`, {
        params
      })
      setData(response.data)
      setLoading(false)
    } catch (error: any) {
      setError(error.message)
      setLoading(false)
    }
  }

  return { data, loading, error, fetchData }
}
