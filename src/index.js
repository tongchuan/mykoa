import '@babel/polyfill'
import http from 'http'
import https from 'https'
import Koa from 'koa'
import logger from './middlewares/logger'
import htmltemplate from './middlewares/htmltemplate'
import koaBody from './middlewares/koabody'
import server from './middlewares/koastaticserver'
import compress from './middlewares/koacompress'
import router from './controllers/indexRouter'

const app = new Koa()

app.use(logger.accessLogger)
app.context.log = logger.logger

app.on('error', (err, ctx) => {
  ctx.log.error('server error', err)
})
app.use(htmltemplate)
app.use(server)
app.use(koaBody)
app.use(compress)
app.use(router)

// // response
// console.log('222')
http.createServer(app.callback()).listen(3000)
https.createServer(app.callback()).listen(3001)
// app.listen(3000)
