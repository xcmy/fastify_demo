"use strict"

const pino = require('pino')
const path = require('path')


const opts = {
    level: process.env.LOG_LEVEL,
    prettyPrint: {
        levelFirst: false
    }
}


// 设置输出日志文件
const dest = pino.destination({
    file: path.resolve(__dirname,'./logs'),
    sync: false
})
// const log = require('pino')(opts, dest)


const log = require('pino')(opts, undefined)

module.exports = log