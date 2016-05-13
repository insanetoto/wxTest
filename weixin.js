'use strict'

exports.reply = function* (next){
	var message = this.weixin

	console.log("here ----------------weixin.js ")
	if (message.MsgType === 'event'){
		if(message.Event === 'subscribe'){
			if (message.EventKey){
				console.log('扫描二维码:'+ EventKey+' '+ message.ticket)
			}
			this.body ="欢迎订阅\r\n"+ '消息ID:'+ message.MsgId
			console.log("here ----------------weixin.js  关注 ")

		}
	}
	else if (message.Event === 'unsubscribe'){
		console.log('取消关注')
		this.body ='取消关注'

	}
	yield next
}