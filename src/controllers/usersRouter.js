import Router from 'koa2-router'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Test from '../pages/Test'

const router = new Router()

router.use('/:id', async (ctx) => {
  // console.log(ctx)
  // const html = ReactDOMServer.renderToStaticMarkup(<Test id={ctx.params.id} />)
  // console.log(ctx.getHtml)
  const abd = ctx.getHtml(ReactDOMServer.renderToStaticMarkup(<Test id={ctx.params.id} />))
  // console.log(abd);
  ctx.body = abd
  // return
  ctx.body = ReactDOMServer.renderToStaticMarkup(<Test id={ctx.params.id} />)
  ctx.body = ReactDOMServer.renderToString(<Test id={ctx.params.id} />)
  // ctx.body = `user router hello ${ctx.params.id}`
})

router.use(async (ctx) => {
  ctx.body = 'user router hello'
})
export default router
