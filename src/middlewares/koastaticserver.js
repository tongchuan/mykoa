import server from 'koa-static-server'
import path from 'path'

export default server({
  rootDir: path.resolve(process.cwd(), 'public'),
  rootPath: '/static',
  index: 'index.html'
})
