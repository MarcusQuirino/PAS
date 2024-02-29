import { Elysia } from 'elysia'
import os from 'node:os'

const app = new Elysia()
  .get('/coffee', () => `coffee served by: ${os.hostname()}`)
  .get('/coffee/another', () => `another coffee served by: ${os.hostname()}`)
  .get('/coffee/sla', () => `sla`)
  .listen(8080)

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`)
