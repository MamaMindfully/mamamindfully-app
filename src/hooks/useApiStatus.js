import { useState } from 'react'

export default function useApiStatus() {
  const [loading, setLoading] = useState(false)
  const [error,   setError]   = useState('')
  return { loading, setLoading, error, setError }
}
