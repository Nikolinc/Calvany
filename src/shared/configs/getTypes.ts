//return type by value
export function getTypeByValue(value: string) {
  if (typeof value === 'number') return 'number'

  if (!isNaN(Date.parse(value))) return 'date'

  if (value.includes('@')) return 'email'

  if (typeof value === 'string') return 'string'

  return 'undefaund'
}

//return type by value
export function getTypeByKey(key: string) {
  switch (key) {
    case 'created_at':
    case 'updated_at':
      return 'date'
    case 'email':
      return 'email'
    case 'published':
      return 'boolean'
    case 'id':
    case 'width':
    case 'depth':
    case 'height':
      return 'number'
    case 'description':
      return 'textarea'
    default:
      return 'string'
  }
}
