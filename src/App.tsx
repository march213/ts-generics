import React, { useState } from 'react';

import { SearchInput } from './components/SearchInput';
import { IWidget } from './interfaces/IWidget';
import { people } from './mock-data/people';
import { widgets } from './mock-data/widgets';
import { genericSearch } from './utils/genericSearch';
import { genericSort } from './utils/genericSort';

function App() {
  const [searchQuery, setSearchQuery] = useState<string>('')

  const filteredWidgets = widgets.filter((widget) =>
    genericSearch<IWidget>(widget, ['title', 'description'], searchQuery),
  )
  const filteredPeople = people.filter((person) =>
    genericSearch(person, ['firstName', 'lastName', 'eyeColor'], searchQuery),
  )
  const sortedWidgets = filteredWidgets.sort((a, b) => {
    return genericSort(a, b, 'title')
  })

  return (
    <div className="min-h-full">
      <main className="py-8">
        <div className="max-w-sm my-4 px-4 sm:px-6 lg:px-8">
          <SearchInput setSearchQuery={setSearchQuery} />
        </div>
        <div className="flex flex-col sm:flex-row max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="min-w-[50%]">
            <h2 className="text-3xl font-bold mb-6">Widgets:</h2>
            {filteredWidgets.map((widget) => (
              <div key={widget.id}>{widget.title}</div>
            ))}
          </div>
          <div className="min-w-[50%]">
            <h2 className="text-3xl font-bold mb-6">People:</h2>
            {filteredPeople.map((person) => (
              <div key={person.lastName}>
                {person.firstName} {person.lastName}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
