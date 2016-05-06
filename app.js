var debug = require('debug')('wxTest');
var koa = require('koa');
var sha1 = require('sha1')
//配置文件
var config = require('./config/config');
var wxconfig = {
    wechat:{
	appID:'wx752f2bc195410378',
	appSecret:'f1c7e28b84827391d60ec2aa0b5c2f55',
	token:'mydearhuangwen' 
    }
}

var app = koa();
app.use(function *(next){
    //config 注入中间件，方便调用配置信息
    if(!this.config){
        this.config = config;
    }
    var token = wxconfig.wechat.token
    var signature = this.query.signature
    var nonce = this.query.nonce
    var timestamp = this.query.timestamp
    var echostr = this.query.echostr
    var str = [token , timestamp, nonce].sort().join('')
    var sha = sha1(str)
    if (sha === signature){
	this.body = echostr + ''
	console.log(echostr)
    }
    else{
	this.body = 'wrong'
    }
    yield next;
});
app.listen(config.port);
console.log('listening on port %s',config.port);
module.exports = app;
