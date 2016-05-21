'use strict'

var config = require('./config')
var Wechat = require('./wechat/wechat')
var wechatApi = new Wechat(config.wechat)

exports.reply = function* (next){
	var message = this.weixin

	if (message.MsgType === 'event'){
		if(message.Event === 'subscribe'){
			if (message.EventKey){
				console.log('扫描二维码:'+ EventKey+' '+ message.ticket)
			}
			this.body ="欢迎订阅,这里是鑫爷和你说话的地方"

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
		var reply ='我是个鑫爷忙工作时帮他自动回复的小机器人，撩妹技能不高，不要调戏我。。'
		if(content.indexOf('想你') !== -1){
			reply ='我也想你，我带你去吃火锅好不？'
		}
		else if(content.indexOf('我爱你') !== -1){
			reply ='你是我老婆吗，不要随便说爱我，你叫什么名字？'
		}
		else if(content.indexOf('黄雯') !== -1){
			reply ='老婆，我来给你捶捶腿，按按肩膀，亲亲嘴。。'
		}
		else if(content.indexOf('张鑫') !== -1){
			reply ='叫我名字干啥，你是要做饼干跟我吃吗？'
		}
		else if(content.indexOf('杀马特') !== -1){
			reply ='我不是杀马特，我是杀马特他哥'
		}
		else if(content.indexOf('饿了') !== -1){
			reply ='老婆老婆，我去给你炒蛋炒饭'
		}
		else if(content.indexOf('做什么') !== -1){
			reply ='我什么都没有做，只是在想你。'
		}
		else if(content.indexOf('想你') !== -1){
			var data = yield wechatApi.uploadMaterial('image', __dirname + 'darling.jpg')
			reply = {
				type : 'image',
				mediaId: data.media_id
			}
		}

		// else if(content ==='2'){

		// 	reply =[{
		// 		title : '技术改变世界',
		// 		description:'只是个描述',
		// 		picUrl:'http://img6.faloo.com/picture/0x0/0/183/183379.jpg',
		// 		url:'https://github.com'
		// 	}]
		// }
		this.body = reply

	}
	
	yield next
}