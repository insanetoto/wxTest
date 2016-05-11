'use strict'

var ejs = require('ejs')
var heredoc = require('heredoc')

var tpl = heredoc(function(){/*
<xml>
<ToUserName><![CDATA[<% ToUserName %>]]></ToUserName>
<FromUserName><![CDATA[<% FromUserName %>]]></FromUserName>
<CreateTime> <% createTime %> </CreateTime>
<MsgType><![CDATA[<% msgType %>]]></MsgType>
<% if (msgType === 'text') {%>
	<Content><![CDATA[<% content %>]]></Content>
<% } else if (msgType === 'image') {%>
</xml> 
*/})