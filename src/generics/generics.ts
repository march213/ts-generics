export interface IFooBar {
  foo: string
  bar: string
}

const fooBars: IFooBar[] = [
  { foo: 'foo', bar: 'bar' },
  { foo: 'i am a foo two', bar: 'i am a bar two' },
  { foo: 'foo three', bar: 'bar three' },
]

// function sortByFoo(fooBars: IFooBar[]): IFooBar[] {
//   return fooBars.sort((a, b) => a.foo.localeCompare(b.foo))
// }

// // to support sorting by bar we would need to repeat steps above
// function sortByBar(fooBars: IFooBar[]): IFooBar[] {
//   return fooBars.sort((a, b) => a.bar.localeCompare(b.bar))
// }

// use generics to support any key sorting
function sortByKey<T>(data: T[], key: keyof T) {
  return data.sort((a, b) => {
    if (a[key] > b[key]) return 1
    if (a[key] < b[key]) return -1
    return 0
  })
}

// usage
sortByKey<IFooBar>(fooBars, 'foo')
