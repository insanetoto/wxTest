var debug = require('debug')('wxTest');
var koa = require('koa');
var sha1 = require('sha1')
var path = require('path')
var wechat = require('./wechat/g')
var util = require('./libs/utils')
var wechat_file = path.join(__dirname,'./config/wechat.txt')
//配置文件
var config = require('./config/config');

var wxconfig = {
    wechat:{
    	appID:'wx752f2bc195410378',
    	appSecret:'f1c7e28b84827391d60ec2aa0b5c2f55',
    	token:'mydearhuangwen' ,
        getAccessToken:function(){
                return util.readFileAsync(wechat_file)
            },
        saveAccessToken:function(data){
                data =JSON.stringfy(data)
                return util.writeFileAsync(wechat_file ,data)
            }
        }
}

var app = koa();

app.use(wechat(wxconfig.wechat))
app.listen(config.port);
console.log('listening on port %s',config.port);
module.exports = app;
