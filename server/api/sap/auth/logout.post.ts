export default defineEventHandler(async (event) => {
  await clearUserSession(event)

  return {
    loggedIn: false,
    message: 'Session successfully concluded.'
  }
})
