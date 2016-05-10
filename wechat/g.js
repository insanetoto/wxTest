var sha1 = require('sha1')
//配置文件
var wxconfig = {
    wechat:{
	appID:'wx752f2bc195410378',
	appSecret:'f1c7e28b84827391d60ec2aa0b5c2f55',
	token:'mydearhuangwen' 
    }
}


module.exports = function(opts){
    return  function *(next){        
        var token = opts.token
        var signature = this.query.signature
        var nonce = this.query.nonce
        var timestamp = this.query.timestamp;
        var echostr = this.query.echostr
        var str = [token,timestamp,nonce].sort().join('')
        var sha = sha1(str)
        if(sha === signature){
            this.body = echostr +''
        }else{
            this.body = 'wrong'
        }
    }
}