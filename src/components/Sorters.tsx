import { ReactElement } from 'react';

export interface ISortersProps<T> {
  object: T
}

export function Sorters<T>({ object }: ISortersProps<T>): ReactElement {
  return (
    <>
      <div className="max-w-sm">
        <label htmlFor="sort" className="block text-sm font-medium text-gray-700">
          Sort by
        </label>

        <select
          id="sort"
          name="sort"
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          defaultValue="Title"
        >
          {Object.keys(object).map((key) => (
            <option key={key} value={key}>
              {key}
            </option>
          ))}
        </select>
      </div>
    </>
  )
}
