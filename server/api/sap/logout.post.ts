export default defineEventHandler((event) => {
  deleteCookie(event, 'auth_token')
  deleteCookie(event, 'auth_expires')

  return {
    loggedIn: false,
    message: 'Cierre de sesión exitoso.'
  }
})
