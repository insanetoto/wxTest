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
		else if(content.indexOf('想你') !== -1){
			reply ='我也想你，我带你去吃火锅好不？'
		}
		else if(content ==='2'){

			reply =[{
				title : '技术改变世界',
				description:'只是个描述',
				picUrl:'http://img6.faloo.com/picture/0x0/0/183/183379.jpg',
				url:'https://github.com'
			}]
		}
		this.body = reply

	}
	
	yield next
}