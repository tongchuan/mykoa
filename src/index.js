import '@babel/polyfill'
import Koa from 'koa'

const app = new Koa()
app.use(ctx => {
  ctx.body = 'Hello Koa111;
})

app.listen(3000)

