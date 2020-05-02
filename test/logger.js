const {transports,createLogger,format} = require('winston')

const fileFormat = format.combine(
    format.timestamp({format: 'YYYY-MM-DD HH:mm:ss'}),
    format.printf(info => `${info.timestamp} ${info.message}`)
  )

  const consoleFormat = format.combine(
    format.printf(info => `${info.message}`)
  )

const logger = createLogger({
   transports: [
    new transports.Console({ level: 'info', format: consoleFormat}),
    new transports.File({ filename: 'log.txt', level: 'verbose', format: fileFormat})
]
})
 
module.exports = logger
