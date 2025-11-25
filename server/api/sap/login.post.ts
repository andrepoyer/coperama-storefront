export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const body = await readBody(event)
  const { username, password, currency, country } = body

  if (!username || !password) {
    throw createError({ statusCode: 400, message: 'Incomplete request' })
  }

  try {
    const baseUrl = config.sapApiBaseUrl.replace(/\/$/, '')
    const tokenUrl = `${baseUrl}/authorizationserver/oauth/token`

    const formData = new URLSearchParams()
    formData.append('client_id', config.sapClientId)
    formData.append('client_secret', config.sapClientSecret)
    formData.append('grant_type', 'password')
    formData.append('username', username)
    formData.append('password', password)

    const response = await $fetch<{ access_token: string }>(tokenUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        currency: currency,
        country: country
      },
      body: formData.toString()
    })

    console.log('TOKEN SAP:', response)

    await setUserSession(event, {
      user: { username },
      secure: { sapAccessToken: response.access_token },
      loggedInAt: new Date()
    })

    return { loggedIn: true }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.data?.error_description || 'Error logging in.'
    })
  }
})
