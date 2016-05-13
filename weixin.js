'use strict'

exports.reply = function* (next){
	var message = this.weixin

	if (message.MsgType === 'event'){
		if(message.Event === 'subscribe'){
			if (message.EventKey){
				console.log('扫描二维码:'+ EventKey+' '+ message.ticket)
			}
			this.body ="欢迎订阅,这里是鑫爷和你谈情的地方"

		}
		else if( message.Event === 'unsubscribe' ){
			this.body =' '	
		}
		else if( message.Event === 'LOCATION' ){
			this.body = '您上报的位置是:'+message.Latitude+'/'+message.Longtitude+'-'+message.Precision
		}
		else if( message.Event === 'CLICK' ){
			this.body = '您点击了菜单：'+message.EventKey
		}
		else if( message.Event === 'SCAN' ){
			console.log('扫描二维码:'+ EventKey+' '+ message.ticket)
			this.body = '你在扫啥呢?'
		}
		else if( message.Event === 'VIEW' ){
			this.body = '你点击了菜单的链接：'+message.EventKey
		}
	}
	else if(message.MsgType === 'text'){
		var content = message.Content
		var reply ="额，你说的" +message.Content +' 太复杂了！'
		if(content === '1'){
			reply = '吃屁'
		}
		else if(stringObject.indexOf('想你',content) !== -1){
			reply ='我也想你，我带你去吃火锅好不？'
		}
		this.body = reply

	}
	
	yield next
}