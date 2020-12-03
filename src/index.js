import '@babel/polyfill'
import Koa from 'koa'

const app = new Koa()
app.use(ctx => {
  ctx.body = 'Hello Koa111'
})
			console.log('22222',333)

app.listen(3000)
