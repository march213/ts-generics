import { useEffect, useState } from 'react';

export const useDebounce = (value: any, delay: number) => {
  const [debounceValue, setDebounceValue] = useState('')

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(value)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  return debounceValue
}
