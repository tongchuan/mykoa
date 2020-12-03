import '@babel/polyfill'
import Koa from 'koa'

const app = new Koa()
app.use(ctx => {
  ctx.body = 'Hello Koa111';
})
console.log('ddd')
app.listen(3000)
