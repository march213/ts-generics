export function genericSearch<T>(obj: T, property: keyof T, query: string): boolean {
  const value = obj[property]

  if (typeof value !== 'string' && typeof value !== 'number') return false

  return value.toString().includes(query)
}
