import log4js from 'koa-log4'
import path from 'path'
console.log(__dirname, path.resolve(__dirname, 'logs'), process.cwd())

log4js.configure({
  appenders: {
    access: {
      type: 'dateFile',
      pattern: '-yyyy-MM-dd.log', // 生成文件的规则
      maxLogSize: 10,
      filename: path.resolve(process.cwd(), 'logs/access.log') // 生成文件名
    },
    application: {
      type: 'dateFile',
      pattern: '-yyyy-MM-dd.log',
      filename: path.resolve(process.cwd(), 'logs/application.log')
    },
    out: {
      type: 'console'
    }
  },
  categories: {
    default: { appenders: ['out'], level: 'info' },
    access: { appenders: ['access'], level: 'info' },
    application: { appenders: ['application'], level: 'WARN' }
  }
})

// export default log4js.koaLogger(log4js.getLogger("access"))
export default {
  accessLogger: log4js.koaLogger(log4js.getLogger('access')),
  logger: log4js.getLogger('application')
}
// export default logger({
//   pattern:''
//   file:path.resolve(process.cwd(),'logs/logs.txt'),//path.resolve(__dirname, 'logs')
//   maxLogSize:1
// })
