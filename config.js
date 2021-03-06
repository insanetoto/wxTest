'use strict'
var path = require('path')
var util = require('./libs/utils')
var wechat_file = path.join(__dirname , './config/wechat.txt')
var wxconfig = {
    wechat:{
    	appId:'wx752f2bc195410378',
    	appSecret:'f1c7e28b84827391d60ec2aa0b5c2f55',
    	token:'mydearhuangwen' ,
        getAccessToken:function(){
                return util.readFileAsync(wechat_file)
            },
        saveAccessToken:function(data){
                data =JSON.stringify(data)
                return util.writeFileAsync(wechat_file ,data)
            }
        }
}

module.exports = wxconfig