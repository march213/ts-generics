import React from 'react';

import { IWidget } from './interfaces/IWidget';
import { people } from './mock-data/people';
import { widgets } from './mock-data/widgets';
import { genericSearch } from './utils/genericSearch';

function App() {
  const query = ''

  return (
    <div className="min-h-full">
      <main className="py-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div>
            <h2 className="text-3xl font-bold mb-6">Widgets:</h2>
            {widgets
              .filter((widget) => genericSearch<IWidget>(widget, ['title', 'description'], query))
              .map((widget) => (
                <div key={widget.id}>{widget.title}</div>
              ))}
          </div>
          <div className="mt-12">
            <h2 className="text-3xl font-bold mb-6">People:</h2>
            {people
              .filter((person) => genericSearch(person, ['firstName', 'lastName', 'eyeColor'], query))
              .map((person) => (
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
