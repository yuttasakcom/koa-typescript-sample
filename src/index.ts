import * as Koa from 'koa'
import * as Router from 'koa-router'

const port = process.env.PORT || 4000

const app = new Koa()

const router = new Router()

router.get('/', async ctx => {
  ctx.body = 'Hello, Koa'
})

app.use(router.routes())

app.listen(port)

console.log(`Server running at http://localhost:${port}`)