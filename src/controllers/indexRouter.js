import Router from 'koa2-router'
import usersRouter from './usersRouter'

const router = new Router()

router.use(async (ctx, next) => {
  await next()
  const rt = ctx.response.get('X-Response-Time')
  console.log(`${ctx.method} ${ctx.url} - ${rt}`)
})
// x-response-time
router.use(async (ctx, next) => {
  const start = Date.now()
  await next()
  const ms = Date.now() - start
  ctx.set('X-Response-Time', `${ms}ms`)
})

router.use('/users', usersRouter)

router.use(async (ctx) => {
  ctx.log.error('er4rpr')
  ctx.log.info('info')
  ctx.body = 'Hello World'
})

export default router
