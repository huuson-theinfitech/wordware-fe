export const getCurrentMonthYear = (): string => {
  const date = new Date()
  const month = date.toLocaleString('en-US', { month: 'long' }).toUpperCase()
  const year = date.getFullYear()
  return `${month} ${year}`
}
