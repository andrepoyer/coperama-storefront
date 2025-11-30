export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const body = await readBody(event)

  if (!body.username || !body.password) {
    throw createError({ statusCode: 400, message: 'Incomplete request' })
  }

  try {
    const baseUrl = config.sapApiBaseUrl.replace(/\/$/, '')
    const tokenUrl = `${baseUrl}/authorizationserver/oauth/token`

    const formData = new URLSearchParams()
    formData.append('client_id', config.sapClientId)
    formData.append('client_secret', config.sapClientSecret)
    formData.append('grant_type', 'password')
    formData.append('username', body.username)
    formData.append('password', body.password)

    interface SapResponse {
      access_token: string
    }

    const response = await $fetch<SapResponse>(tokenUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        currency: body.currency || 'USD',
        country: body.country || 'ES'
      },
      body: formData.toString()
    })

    await setUserSession(
      event,
      {
        user: {
          username: body.username
        },
        secure: {
          sapAccessToken: response.access_token
        },
        loggedInAt: new Date()
      },
      {
        maxAge: body.maxAge || 3600
      }
    )

    return { loggedIn: true }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error('Error logging in:', error)
    throw createError({
      statusCode: error.statusCode || 401,
      message: 'Error logging in'
    })
  }
})
