'use strict'
var koa = require('koa');
var path = require('path')
var wechat = require('./wechat/g')
var wechat_file = path.join(__dirname,'./config/wechat.txt')
var config = require('./wechat/config')
var weixin = require('./weixin')


var app = koa();

app.use(wechat(config.wxconfig.wechat , weixin.reply))
app.listen(config.config.port);
console.log('listening on port %s',config.port);
module.exports = app;
