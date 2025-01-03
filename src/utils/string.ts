export const handleTwitterString = (input: string) => {
  const usernameRegex = /^\w{1,15}$/
  const urlRegex = /^(?:https?:\/\/)?(?:www\.)?x\.com\/(\w{1,15})(?:[/?#]|$)/

  if (usernameRegex.test(input)) {
    return input
  }

  const match = urlRegex.exec(input)
  return match ? match[1] : null
}
