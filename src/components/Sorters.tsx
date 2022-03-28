import { ReactElement } from 'react';
import { IProperty } from '../interfaces/IProperty';

export interface ISortersProps<T> {
  object: T;
  setProperty: (propertyType: IProperty<T>) => void;
}

export function Sorters<T>({ object, setProperty }: ISortersProps<T>): ReactElement {
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
          onChange={(e) => {
            const [value, by] = e.target.value.split('-');
            setProperty({
              property: value as keyof T,
              isDescending: by === 'true',
            });
          }}
        >
          {Object.keys(object).map((key) => (
            <>
              <option key={`${key}-true`} value={`${key}-true`}>
                {key} - desc
              </option>
              <option key={`${key}-false`} value={`${key}-false`}>
                {key} - asc
              </option>
            </>
          ))}
        </select>
      </div>
    </>
  );
}
