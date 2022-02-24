import React from 'react';

import { people } from './mock-data/people';
import { widgets } from './mock-data/widgets';

function App() {
  return (
    <div className="min-h-full">
      <main className="py-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div>
            <h2 className="text-3xl font-bold mb-6">Widgets:</h2>
            {widgets.map((widget) => (
              <div key={widget.id}>{widget.title}</div>
            ))}
          </div>
          <div className="mt-12">
            <h2 className="text-3xl font-bold mb-6">People:</h2>
            {people.map((person) => (
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
