import { FC, useEffect, useState } from 'react';

import { useDebounce } from '../hooks/useDebounce';

export interface ISearchInputProps {
  setSearchQuery: (query: string) => void
}

export const SearchInput: FC<ISearchInputProps> = ({ setSearchQuery }) => {
  const [value, setSearchValue] = useState<string>('')
  const debouncedSearchValue = useDebounce(value, 500)

  useEffect(() => {
    setSearchQuery(debouncedSearchValue)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearchValue])

  return (
    <>
      <label htmlFor="search" className="block text-sm font-medium text-gray-700">
        Search
      </label>
      <div className="mt-1">
        <input
          id="search"
          name="search"
          type="search"
          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          value={value}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
    </>
  )
}
