import React, { useState } from 'react';

import { SearchInput } from './components/SearchInput';
import { Sorters } from './components/Sorters';
import { IPerson } from './interfaces/IPerson';
import { IProperty } from './interfaces/IProperty';
import { IWidget } from './interfaces/IWidget';
import { people } from './mock-data/people';
import { widgets } from './mock-data/widgets';
import { genericSearch } from './utils/genericSearch';
import { genericSort } from './utils/genericSort';

const options: Intl.DateTimeFormatOptions = {
  weekday: 'short',
  year: 'numeric',
  month: 'short',
  day: 'numeric',
};

function App() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [widgetSortProperty, setWidgetProperty] = useState<IProperty<IWidget>>({
    property: 'title',
    isDescending: true,
  });
  const [peopleSortProperty, setPeopleProperty] = useState<IProperty<IPerson>>({
    property: 'firstName',
    isDescending: true,
  });

  const filteredWidgets = widgets.filter((widget) =>
    genericSearch<IWidget>(widget, ['title', 'description'], searchQuery),
  );
  const sortedWidgets = filteredWidgets.sort((a, b) => {
    return genericSort(a, b, widgetSortProperty);
  });
  const filteredPeople = people.filter((person) =>
    genericSearch(person, ['firstName', 'lastName', 'eyeColor'], searchQuery),
  );
  const sortedPeople = filteredPeople.sort((a, b) => {
    return genericSort(a, b, peopleSortProperty);
  });

  return (
    <div className="min-h-full">
      <main className="py-8">
        <div className="max-w-sm my-4 px-4 sm:px-6 lg:px-8">
          <SearchInput setSearchQuery={setSearchQuery} />
        </div>

        <div className="flex flex-col sm:flex-row max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="min-w-[50%]">
            <h2 className="text-3xl font-bold mb-6">Widgets:</h2>
            <Sorters object={widgets[0]} setProperty={(propertyType) => setWidgetProperty(propertyType)} />
            <ul className="divide-y divide-gray-200 mr-12">
              {sortedWidgets.map((widget) => (
                <li key={widget.id} className={`py-4 flex ${widget.isSpecialCard ? 'bg-emerald-100' : ''}`}>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">ID: {widget.id}</p>
                    <p className="text-sm text-gray-500">Title: {widget.title}</p>
                    <p className="text-sm text-gray-500">Description: {widget.description}</p>
                    <p className="text-sm text-gray-500">⭐️: 1/{widget.rating}</p>
                    <p className="text-sm text-gray-500">
                      {widget.created.toLocaleDateString('en-US', options)} /{' '}
                      {widget.updated.toLocaleDateString('en-US', options)}
                    </p>
                    <p className="text-sm text-gray-500">IsSpecialCard: {widget.isSpecialCard.toString()}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-[50%]">
            <h2 className="text-3xl font-bold mb-6">People:</h2>
            <Sorters object={people[0]} setProperty={(propertyType) => setPeopleProperty(propertyType)} />
            <ul className="divide-y divide-gray-200">
              {sortedPeople.map((person) => (
                <li key={`${person.firstName}-${person.lastName}`} className="py-4 flex">
                  <span className="h-10 w-10 rounded-full text-lg">
                    {['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼'][Math.floor(Math.random() * 7)]}
                  </span>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      {person.firstName} {person.lastName}
                    </p>
                    <p className="text-sm text-gray-500">🎂: {person.birthday.toLocaleDateString('en-US', options)}</p>
                    <p className="text-sm text-gray-500">👁: {person.eyeColor}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
