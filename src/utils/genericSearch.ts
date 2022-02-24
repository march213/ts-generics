export function genericSearch<T>(obj: T, properties: Array<keyof T>, query: string): boolean {
  if (query.length === 0) return true

  return properties.some((property) => {
    const value = obj[property]

    if (typeof value !== 'string' && typeof value !== 'number') return false

    return value.toString().toLowerCase().includes(query.toLowerCase())
  })
}
