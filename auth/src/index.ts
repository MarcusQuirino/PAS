import { Elysia } from 'elysia'

const app = new Elysia()
  .get('/authenticated', ({ headers, set }) => {
    const auth = headers.authorization
    if (auth === undefined) {
      set.status = 401
      return 'Unauthorized'
    }

    if (auth === 'Bearer 123') {
      return 'Authenticated'
    }

    set.status = 401
    return 'Unauthorized'
  })
  .listen(8080)

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`)
