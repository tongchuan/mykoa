export default async function (ctx, next) {
  ctx.app.context.getHtml = function (html = '', { title } = { title: '首页' }) {
    return `
    <!DOCTYPE html>
    <html>
    <head>
      <title>${title}</title>
    </head>
    <body>d
      ${html}
    </body>
    </html>`
  }
  await next()
}
