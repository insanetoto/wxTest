'use strict'
var koa = require('koa');
var path = require('path')
var wechat = require('./wechat/g')
var wechat_file = path.join(__dirname,'./config/wechat.txt')
var wxconfig = require('./wechat/config')
var weixin = require('./weixin')

var app = koa();

app.use(wechat(wxconfig.wechat , weixin.reply))
app.listen(80);
console.log('listening on port 80');
module.exports = app;
