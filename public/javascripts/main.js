d3.select(".south_sudan")
var width = 960,
height = 1160;
/*! Socket.IO.min.js build:0.9.16, production. Copyright(c) 2011 LearnBoost <dev@learnboost.com> MIT Licensed */
var io="undefined"==typeof module?{}:module.exports;(function(){(function(a,b){var c=a;c.version="0.9.16",c.protocol=1,c.transports=[],c.j=[],c.sockets={},c.connect=function(a,d){var e=c.util.parseUri(a),f,g;b&&b.location&&(e.protocol=e.protocol||b.location.protocol.slice(0,-1),e.host=e.host||(b.document?b.document.domain:b.location.hostname),e.port=e.port||b.location.port),f=c.util.uniqueUri(e);var h={host:e.host,secure:"https"==e.protocol,port:e.port||("https"==e.protocol?443:80),query:e.query||""};c.util.merge(h,d);if(h["force new connection"]||!c.sockets[f])g=new c.Socket(h);return!h["force new connection"]&&g&&(c.sockets[f]=g),g=g||c.sockets[f],g.of(e.path.length>1?e.path:"")}})("object"==typeof module?module.exports:this.io={},this),function(a,b){var c=a.util={},d=/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,e=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];c.parseUri=function(a){var b=d.exec(a||""),c={},f=14;while(f--)c[e[f]]=b[f]||"";return c},c.uniqueUri=function(a){var c=a.protocol,d=a.host,e=a.port;return"document"in b?(d=d||document.domain,e=e||(c=="https"&&document.location.protocol!=="https:"?443:document.location.port)):(d=d||"localhost",!e&&c=="https"&&(e=443)),(c||"http")+"://"+d+":"+(e||80)},c.query=function(a,b){var d=c.chunkQuery(a||""),e=[];c.merge(d,c.chunkQuery(b||""));for(var f in d)d.hasOwnProperty(f)&&e.push(f+"="+d[f]);return e.length?"?"+e.join("&"):""},c.chunkQuery=function(a){var b={},c=a.split("&"),d=0,e=c.length,f;for(;d<e;++d)f=c[d].split("="),f[0]&&(b[f[0]]=f[1]);return b};var f=!1;c.load=function(a){if("document"in b&&document.readyState==="complete"||f)return a();c.on(b,"load",a,!1)},c.on=function(a,b,c,d){a.attachEvent?a.attachEvent("on"+b,c):a.addEventListener&&a.addEventListener(b,c,d)},c.request=function(a){if(a&&"undefined"!=typeof XDomainRequest&&!c.ua.hasCORS)return new XDomainRequest;if("undefined"!=typeof XMLHttpRequest&&(!a||c.ua.hasCORS))return new XMLHttpRequest;if(!a)try{return new(window[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")}catch(b){}return null},"undefined"!=typeof window&&c.load(function(){f=!0}),c.defer=function(a){if(!c.ua.webkit||"undefined"!=typeof importScripts)return a();c.load(function(){setTimeout(a,100)})},c.merge=function(b,d,e,f){var g=f||[],h=typeof e=="undefined"?2:e,i;for(i in d)d.hasOwnProperty(i)&&c.indexOf(g,i)<0&&(typeof b[i]!="object"||!h?(b[i]=d[i],g.push(d[i])):c.merge(b[i],d[i],h-1,g));return b},c.mixin=function(a,b){c.merge(a.prototype,b.prototype)},c.inherit=function(a,b){function c(){}c.prototype=b.prototype,a.prototype=new c},c.isArray=Array.isArray||function(a){return Object.prototype.toString.call(a)==="[object Array]"},c.intersect=function(a,b){var d=[],e=a.length>b.length?a:b,f=a.length>b.length?b:a;for(var g=0,h=f.length;g<h;g++)~c.indexOf(e,f[g])&&d.push(f[g]);return d},c.indexOf=function(a,b,c){for(var d=a.length,c=c<0?c+d<0?0:c+d:c||0;c<d&&a[c]!==b;c++);return d<=c?-1:c},c.toArray=function(a){var b=[];for(var c=0,d=a.length;c<d;c++)b.push(a[c]);return b},c.ua={},c.ua.hasCORS="undefined"!=typeof XMLHttpRequest&&function(){try{var a=new XMLHttpRequest}catch(b){return!1}return a.withCredentials!=undefined}(),c.ua.webkit="undefined"!=typeof navigator&&/webkit/i.test(navigator.userAgent),c.ua.iDevice="undefined"!=typeof navigator&&/iPad|iPhone|iPod/i.test(navigator.userAgent)}("undefined"!=typeof io?io:module.exports,this),function(a,b){function c(){}a.EventEmitter=c,c.prototype.on=function(a,c){return this.$events||(this.$events={}),this.$events[a]?b.util.isArray(this.$events[a])?this.$events[a].push(c):this.$events[a]=[this.$events[a],c]:this.$events[a]=c,this},c.prototype.addListener=c.prototype.on,c.prototype.once=function(a,b){function d(){c.removeListener(a,d),b.apply(this,arguments)}var c=this;return d.listener=b,this.on(a,d),this},c.prototype.removeListener=function(a,c){if(this.$events&&this.$events[a]){var d=this.$events[a];if(b.util.isArray(d)){var e=-1;for(var f=0,g=d.length;f<g;f++)if(d[f]===c||d[f].listener&&d[f].listener===c){e=f;break}if(e<0)return this;d.splice(e,1),d.length||delete this.$events[a]}else(d===c||d.listener&&d.listener===c)&&delete this.$events[a]}return this},c.prototype.removeAllListeners=function(a){return a===undefined?(this.$events={},this):(this.$events&&this.$events[a]&&(this.$events[a]=null),this)},c.prototype.listeners=function(a){return this.$events||(this.$events={}),this.$events[a]||(this.$events[a]=[]),b.util.isArray(this.$events[a])||(this.$events[a]=[this.$events[a]]),this.$events[a]},c.prototype.emit=function(a){if(!this.$events)return!1;var c=this.$events[a];if(!c)return!1;var d=Array.prototype.slice.call(arguments,1);if("function"==typeof c)c.apply(this,d);else{if(!b.util.isArray(c))return!1;var e=c.slice();for(var f=0,g=e.length;f<g;f++)e[f].apply(this,d)}return!0}}("undefined"!=typeof io?io:module.exports,"undefined"!=typeof io?io:module.parent.exports),function(exports,nativeJSON){function f(a){return a<10?"0"+a:a}function date(a,b){return isFinite(a.valueOf())?a.getUTCFullYear()+"-"+f(a.getUTCMonth()+1)+"-"+f(a.getUTCDate())+"T"+f(a.getUTCHours())+":"+f(a.getUTCMinutes())+":"+f(a.getUTCSeconds())+"Z":null}function quote(a){return escapable.lastIndex=0,escapable.test(a)?'"'+a.replace(escapable,function(a){var b=meta[a];return typeof b=="string"?b:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+a+'"'}function str(a,b){var c,d,e,f,g=gap,h,i=b[a];i instanceof Date&&(i=date(a)),typeof rep=="function"&&(i=rep.call(b,a,i));switch(typeof i){case"string":return quote(i);case"number":return isFinite(i)?String(i):"null";case"boolean":case"null":return String(i);case"object":if(!i)return"null";gap+=indent,h=[];if(Object.prototype.toString.apply(i)==="[object Array]"){f=i.length;for(c=0;c<f;c+=1)h[c]=str(c,i)||"null";return e=h.length===0?"[]":gap?"[\n"+gap+h.join(",\n"+gap)+"\n"+g+"]":"["+h.join(",")+"]",gap=g,e}if(rep&&typeof rep=="object"){f=rep.length;for(c=0;c<f;c+=1)typeof rep[c]=="string"&&(d=rep[c],e=str(d,i),e&&h.push(quote(d)+(gap?": ":":")+e))}else for(d in i)Object.prototype.hasOwnProperty.call(i,d)&&(e=str(d,i),e&&h.push(quote(d)+(gap?": ":":")+e));return e=h.length===0?"{}":gap?"{\n"+gap+h.join(",\n"+gap)+"\n"+g+"}":"{"+h.join(",")+"}",gap=g,e}}"use strict";if(nativeJSON&&nativeJSON.parse)return exports.JSON={parse:nativeJSON.parse,stringify:nativeJSON.stringify};var JSON=exports.JSON={},cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;JSON.stringify=function(a,b,c){var d;gap="",indent="";if(typeof c=="number")for(d=0;d<c;d+=1)indent+=" ";else typeof c=="string"&&(indent=c);rep=b;if(!b||typeof b=="function"||typeof b=="object"&&typeof b.length=="number")return str("",{"":a});throw new Error("JSON.stringify")},JSON.parse=function(text,reviver){function walk(a,b){var c,d,e=a[b];if(e&&typeof e=="object")for(c in e)Object.prototype.hasOwnProperty.call(e,c)&&(d=walk(e,c),d!==undefined?e[c]=d:delete e[c]);return reviver.call(a,b,e)}var j;text=String(text),cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("("+text+")"),typeof reviver=="function"?walk({"":j},""):j;throw new SyntaxError("JSON.parse")}}("undefined"!=typeof io?io:module.exports,typeof JSON!="undefined"?JSON:undefined),function(a,b){var c=a.parser={},d=c.packets=["disconnect","connect","heartbeat","message","json","event","ack","error","noop"],e=c.reasons=["transport not supported","client not handshaken","unauthorized"],f=c.advice=["reconnect"],g=b.JSON,h=b.util.indexOf;c.encodePacket=function(a){var b=h(d,a.type),c=a.id||"",i=a.endpoint||"",j=a.ack,k=null;switch(a.type){case"error":var l=a.reason?h(e,a.reason):"",m=a.advice?h(f,a.advice):"";if(l!==""||m!=="")k=l+(m!==""?"+"+m:"");break;case"message":a.data!==""&&(k=a.data);break;case"event":var n={name:a.name};a.args&&a.args.length&&(n.args=a.args),k=g.stringify(n);break;case"json":k=g.stringify(a.data);break;case"connect":a.qs&&(k=a.qs);break;case"ack":k=a.ackId+(a.args&&a.args.length?"+"+g.stringify(a.args):"")}var o=[b,c+(j=="data"?"+":""),i];return k!==null&&k!==undefined&&o.push(k),o.join(":")},c.encodePayload=function(a){var b="";if(a.length==1)return a[0];for(var c=0,d=a.length;c<d;c++){var e=a[c];b+="\ufffd"+e.length+"\ufffd"+a[c]}return b};var i=/([^:]+):([0-9]+)?(\+)?:([^:]+)?:?([\s\S]*)?/;c.decodePacket=function(a){var b=a.match(i);if(!b)return{};var c=b[2]||"",a=b[5]||"",h={type:d[b[1]],endpoint:b[4]||""};c&&(h.id=c,b[3]?h.ack="data":h.ack=!0);switch(h.type){case"error":var b=a.split("+");h.reason=e[b[0]]||"",h.advice=f[b[1]]||"";break;case"message":h.data=a||"";break;case"event":try{var j=g.parse(a);h.name=j.name,h.args=j.args}catch(k){}h.args=h.args||[];break;case"json":try{h.data=g.parse(a)}catch(k){}break;case"connect":h.qs=a||"";break;case"ack":var b=a.match(/^([0-9]+)(\+)?(.*)/);if(b){h.ackId=b[1],h.args=[];if(b[3])try{h.args=b[3]?g.parse(b[3]):[]}catch(k){}}break;case"disconnect":case"heartbeat":}return h},c.decodePayload=function(a){if(a.charAt(0)=="\ufffd"){var b=[];for(var d=1,e="";d<a.length;d++)a.charAt(d)=="\ufffd"?(b.push(c.decodePacket(a.substr(d+1).substr(0,e))),d+=Number(e)+1,e=""):e+=a.charAt(d);return b}return[c.decodePacket(a)]}}("undefined"!=typeof io?io:module.exports,"undefined"!=typeof io?io:module.parent.exports),function(a,b){function c(a,b){this.socket=a,this.sessid=b}a.Transport=c,b.util.mixin(c,b.EventEmitter),c.prototype.heartbeats=function(){return!0},c.prototype.onData=function(a){this.clearCloseTimeout(),(this.socket.connected||this.socket.connecting||this.socket.reconnecting)&&this.setCloseTimeout();if(a!==""){var c=b.parser.decodePayload(a);if(c&&c.length)for(var d=0,e=c.length;d<e;d++)this.onPacket(c[d])}return this},c.prototype.onPacket=function(a){return this.socket.setHeartbeatTimeout(),a.type=="heartbeat"?this.onHeartbeat():(a.type=="connect"&&a.endpoint==""&&this.onConnect(),a.type=="error"&&a.advice=="reconnect"&&(this.isOpen=!1),this.socket.onPacket(a),this)},c.prototype.setCloseTimeout=function(){if(!this.closeTimeout){var a=this;this.closeTimeout=setTimeout(function(){a.onDisconnect()},this.socket.closeTimeout)}},c.prototype.onDisconnect=function(){return this.isOpen&&this.close(),this.clearTimeouts(),this.socket.onDisconnect(),this},c.prototype.onConnect=function(){return this.socket.onConnect(),this},c.prototype.clearCloseTimeout=function(){this.closeTimeout&&(clearTimeout(this.closeTimeout),this.closeTimeout=null)},c.prototype.clearTimeouts=function(){this.clearCloseTimeout(),this.reopenTimeout&&clearTimeout(this.reopenTimeout)},c.prototype.packet=function(a){this.send(b.parser.encodePacket(a))},c.prototype.onHeartbeat=function(a){this.packet({type:"heartbeat"})},c.prototype.onOpen=function(){this.isOpen=!0,this.clearCloseTimeout(),this.socket.onOpen()},c.prototype.onClose=function(){var a=this;this.isOpen=!1,this.socket.onClose(),this.onDisconnect()},c.prototype.prepareUrl=function(){var a=this.socket.options;return this.scheme()+"://"+a.host+":"+a.port+"/"+a.resource+"/"+b.protocol+"/"+this.name+"/"+this.sessid},c.prototype.ready=function(a,b){b.call(this)}}("undefined"!=typeof io?io:module.exports,"undefined"!=typeof io?io:module.parent.exports),function(a,b,c){function d(a){this.options={port:80,secure:!1,document:"document"in c?document:!1,resource:"socket.io",transports:b.transports,"connect timeout":1e4,"try multiple transports":!0,reconnect:!0,"reconnection delay":500,"reconnection limit":Infinity,"reopen delay":3e3,"max reconnection attempts":10,"sync disconnect on unload":!1,"auto connect":!0,"flash policy port":10843,manualFlush:!1},b.util.merge(this.options,a),this.connected=!1,this.open=!1,this.connecting=!1,this.reconnecting=!1,this.namespaces={},this.buffer=[],this.doBuffer=!1;if(this.options["sync disconnect on unload"]&&(!this.isXDomain()||b.util.ua.hasCORS)){var d=this;b.util.on(c,"beforeunload",function(){d.disconnectSync()},!1)}this.options["auto connect"]&&this.connect()}function e(){}a.Socket=d,b.util.mixin(d,b.EventEmitter),d.prototype.of=function(a){return this.namespaces[a]||(this.namespaces[a]=new b.SocketNamespace(this,a),a!==""&&this.namespaces[a].packet({type:"connect"})),this.namespaces[a]},d.prototype.publish=function(){this.emit.apply(this,arguments);var a;for(var b in this.namespaces)this.namespaces.hasOwnProperty(b)&&(a=this.of(b),a.$emit.apply(a,arguments))},d.prototype.handshake=function(a){function f(b){b instanceof Error?(c.connecting=!1,c.onError(b.message)):a.apply(null,b.split(":"))}var c=this,d=this.options,g=["http"+(d.secure?"s":"")+":/",d.host+":"+d.port,d.resource,b.protocol,b.util.query(this.options.query,"t="+ +(new Date))].join("/");if(this.isXDomain()&&!b.util.ua.hasCORS){var h=document.getElementsByTagName("script")[0],i=document.createElement("script");i.src=g+"&jsonp="+b.j.length,h.parentNode.insertBefore(i,h),b.j.push(function(a){f(a),i.parentNode.removeChild(i)})}else{var j=b.util.request();j.open("GET",g,!0),this.isXDomain()&&(j.withCredentials=!0),j.onreadystatechange=function(){j.readyState==4&&(j.onreadystatechange=e,j.status==200?f(j.responseText):j.status==403?c.onError(j.responseText):(c.connecting=!1,!c.reconnecting&&c.onError(j.responseText)))},j.send(null)}},d.prototype.getTransport=function(a){var c=a||this.transports,d;for(var e=0,f;f=c[e];e++)if(b.Transport[f]&&b.Transport[f].check(this)&&(!this.isXDomain()||b.Transport[f].xdomainCheck(this)))return new b.Transport[f](this,this.sessionid);return null},d.prototype.connect=function(a){if(this.connecting)return this;var c=this;return c.connecting=!0,this.handshake(function(d,e,f,g){function h(a){c.transport&&c.transport.clearTimeouts(),c.transport=c.getTransport(a);if(!c.transport)return c.publish("connect_failed");c.transport.ready(c,function(){c.connecting=!0,c.publish("connecting",c.transport.name),c.transport.open(),c.options["connect timeout"]&&(c.connectTimeoutTimer=setTimeout(function(){if(!c.connected){c.connecting=!1;if(c.options["try multiple transports"]){var a=c.transports;while(a.length>0&&a.splice(0,1)[0]!=c.transport.name);a.length?h(a):c.publish("connect_failed")}}},c.options["connect timeout"]))})}c.sessionid=d,c.closeTimeout=f*1e3,c.heartbeatTimeout=e*1e3,c.transports||(c.transports=c.origTransports=g?b.util.intersect(g.split(","),c.options.transports):c.options.transports),c.setHeartbeatTimeout(),h(c.transports),c.once("connect",function(){clearTimeout(c.connectTimeoutTimer),a&&typeof a=="function"&&a()})}),this},d.prototype.setHeartbeatTimeout=function(){clearTimeout(this.heartbeatTimeoutTimer);if(this.transport&&!this.transport.heartbeats())return;var a=this;this.heartbeatTimeoutTimer=setTimeout(function(){a.transport.onClose()},this.heartbeatTimeout)},d.prototype.packet=function(a){return this.connected&&!this.doBuffer?this.transport.packet(a):this.buffer.push(a),this},d.prototype.setBuffer=function(a){this.doBuffer=a,!a&&this.connected&&this.buffer.length&&(this.options.manualFlush||this.flushBuffer())},d.prototype.flushBuffer=function(){this.transport.payload(this.buffer),this.buffer=[]},d.prototype.disconnect=function(){if(this.connected||this.connecting)this.open&&this.of("").packet({type:"disconnect"}),this.onDisconnect("booted");return this},d.prototype.disconnectSync=function(){var a=b.util.request(),c=["http"+(this.options.secure?"s":"")+":/",this.options.host+":"+this.options.port,this.options.resource,b.protocol,"",this.sessionid].join("/")+"/?disconnect=1";a.open("GET",c,!1),a.send(null),this.onDisconnect("booted")},d.prototype.isXDomain=function(){var a=c.location.port||("https:"==c.location.protocol?443:80);return this.options.host!==c.location.hostname||this.options.port!=a},d.prototype.onConnect=function(){this.connected||(this.connected=!0,this.connecting=!1,this.doBuffer||this.setBuffer(!1),this.emit("connect"))},d.prototype.onOpen=function(){this.open=!0},d.prototype.onClose=function(){this.open=!1,clearTimeout(this.heartbeatTimeoutTimer)},d.prototype.onPacket=function(a){this.of(a.endpoint).onPacket(a)},d.prototype.onError=function(a){a&&a.advice&&a.advice==="reconnect"&&(this.connected||this.connecting)&&(this.disconnect(),this.options.reconnect&&this.reconnect()),this.publish("error",a&&a.reason?a.reason:a)},d.prototype.onDisconnect=function(a){var b=this.connected,c=this.connecting;this.connected=!1,this.connecting=!1,this.open=!1;if(b||c)this.transport.close(),this.transport.clearTimeouts(),b&&(this.publish("disconnect",a),"booted"!=a&&this.options.reconnect&&!this.reconnecting&&this.reconnect())},d.prototype.reconnect=function(){function e(){if(a.connected){for(var b in a.namespaces)a.namespaces.hasOwnProperty(b)&&""!==b&&a.namespaces[b].packet({type:"connect"});a.publish("reconnect",a.transport.name,a.reconnectionAttempts)}clearTimeout(a.reconnectionTimer),a.removeListener("connect_failed",f),a.removeListener("connect",f),a.reconnecting=!1,delete a.reconnectionAttempts,delete a.reconnectionDelay,delete a.reconnectionTimer,delete a.redoTransports,a.options["try multiple transports"]=c}function f(){if(!a.reconnecting)return;if(a.connected)return e();if(a.connecting&&a.reconnecting)return a.reconnectionTimer=setTimeout(f,1e3);a.reconnectionAttempts++>=b?a.redoTransports?(a.publish("reconnect_failed"),e()):(a.on("connect_failed",f),a.options["try multiple transports"]=!0,a.transports=a.origTransports,a.transport=a.getTransport(),a.redoTransports=!0,a.connect()):(a.reconnectionDelay<d&&(a.reconnectionDelay*=2),a.connect(),a.publish("reconnecting",a.reconnectionDelay,a.reconnectionAttempts),a.reconnectionTimer=setTimeout(f,a.reconnectionDelay))}this.reconnecting=!0,this.reconnectionAttempts=0,this.reconnectionDelay=this.options["reconnection delay"];var a=this,b=this.options["max reconnection attempts"],c=this.options["try multiple transports"],d=this.options["reconnection limit"];this.options["try multiple transports"]=!1,this.reconnectionTimer=setTimeout(f,this.reconnectionDelay),this.on("connect",f)}}("undefined"!=typeof io?io:module.exports,"undefined"!=typeof io?io:module.parent.exports,this),function(a,b){function c(a,b){this.socket=a,this.name=b||"",this.flags={},this.json=new d(this,"json"),this.ackPackets=0,this.acks={}}function d(a,b){this.namespace=a,this.name=b}a.SocketNamespace=c,b.util.mixin(c,b.EventEmitter),c.prototype.$emit=b.EventEmitter.prototype.emit,c.prototype.of=function(){return this.socket.of.apply(this.socket,arguments)},c.prototype.packet=function(a){return a.endpoint=this.name,this.socket.packet(a),this.flags={},this},c.prototype.send=function(a,b){var c={type:this.flags.json?"json":"message",data:a};return"function"==typeof b&&(c.id=++this.ackPackets,c.ack=!0,this.acks[c.id]=b),this.packet(c)},c.prototype.emit=function(a){var b=Array.prototype.slice.call(arguments,1),c=b[b.length-1],d={type:"event",name:a};return"function"==typeof c&&(d.id=++this.ackPackets,d.ack="data",this.acks[d.id]=c,b=b.slice(0,b.length-1)),d.args=b,this.packet(d)},c.prototype.disconnect=function(){return this.name===""?this.socket.disconnect():(this.packet({type:"disconnect"}),this.$emit("disconnect")),this},c.prototype.onPacket=function(a){function d(){c.packet({type:"ack",args:b.util.toArray(arguments),ackId:a.id})}var c=this;switch(a.type){case"connect":this.$emit("connect");break;case"disconnect":this.name===""?this.socket.onDisconnect(a.reason||"booted"):this.$emit("disconnect",a.reason);break;case"message":case"json":var e=["message",a.data];a.ack=="data"?e.push(d):a.ack&&this.packet({type:"ack",ackId:a.id}),this.$emit.apply(this,e);break;case"event":var e=[a.name].concat(a.args);a.ack=="data"&&e.push(d),this.$emit.apply(this,e);break;case"ack":this.acks[a.ackId]&&(this.acks[a.ackId].apply(this,a.args),delete this.acks[a.ackId]);break;case"error":a.advice?this.socket.onError(a):a.reason=="unauthorized"?this.$emit("connect_failed",a.reason):this.$emit("error",a.reason)}},d.prototype.send=function(){this.namespace.flags[this.name]=!0,this.namespace.send.apply(this.namespace,arguments)},d.prototype.emit=function(){this.namespace.flags[this.name]=!0,this.namespace.emit.apply(this.namespace,arguments)}}("undefined"!=typeof io?io:module.exports,"undefined"!=typeof io?io:module.parent.exports),function(a,b,c){function d(a){b.Transport.apply(this,arguments)}a.websocket=d,b.util.inherit(d,b.Transport),d.prototype.name="websocket",d.prototype.open=function(){var a=b.util.query(this.socket.options.query),d=this,e;return e||(e=c.MozWebSocket||c.WebSocket),this.websocket=new e(this.prepareUrl()+a),this.websocket.onopen=function(){d.onOpen(),d.socket.setBuffer(!1)},this.websocket.onmessage=function(a){d.onData(a.data)},this.websocket.onclose=function(){d.onClose(),d.socket.setBuffer(!0)},this.websocket.onerror=function(a){d.onError(a)},this},b.util.ua.iDevice?d.prototype.send=function(a){var b=this;return setTimeout(function(){b.websocket.send(a)},0),this}:d.prototype.send=function(a){return this.websocket.send(a),this},d.prototype.payload=function(a){for(var b=0,c=a.length;b<c;b++)this.packet(a[b]);return this},d.prototype.close=function(){return this.websocket.close(),this},d.prototype.onError=function(a){this.socket.onError(a)},d.prototype.scheme=function(){return this.socket.options.secure?"wss":"ws"},d.check=function(){return"WebSocket"in c&&!("__addTask"in WebSocket)||"MozWebSocket"in c},d.xdomainCheck=function(){return!0},b.transports.push("websocket")}("undefined"!=typeof io?io.Transport:module.exports,"undefined"!=typeof io?io:module.parent.exports,this),function(a,b){function c(){b.Transport.websocket.apply(this,arguments)}a.flashsocket=c,b.util.inherit(c,b.Transport.websocket),c.prototype.name="flashsocket",c.prototype.open=function(){var a=this,c=arguments;return WebSocket.__addTask(function(){b.Transport.websocket.prototype.open.apply(a,c)}),this},c.prototype.send=function(){var a=this,c=arguments;return WebSocket.__addTask(function(){b.Transport.websocket.prototype.send.apply(a,c)}),this},c.prototype.close=function(){return WebSocket.__tasks.length=0,b.Transport.websocket.prototype.close.call(this),this},c.prototype.ready=function(a,d){function e(){var b=a.options,e=b["flash policy port"],g=["http"+(b.secure?"s":"")+":/",b.host+":"+b.port,b.resource,"static/flashsocket","WebSocketMain"+(a.isXDomain()?"Insecure":"")+".swf"];c.loaded||(typeof WEB_SOCKET_SWF_LOCATION=="undefined"&&(WEB_SOCKET_SWF_LOCATION=g.join("/")),e!==843&&WebSocket.loadFlashPolicyFile("xmlsocket://"+b.host+":"+e),WebSocket.__initialize(),c.loaded=!0),d.call(f)}var f=this;if(document.body)return e();b.util.load(e)},c.check=function(){return typeof WebSocket!="undefined"&&"__initialize"in WebSocket&&!!swfobject?swfobject.getFlashPlayerVersion().major>=10:!1},c.xdomainCheck=function(){return!0},typeof window!="undefined"&&(WEB_SOCKET_DISABLE_AUTO_INITIALIZATION=!0),b.transports.push("flashsocket")}("undefined"!=typeof io?io.Transport:module.exports,"undefined"!=typeof io?io:module.parent.exports);if("undefined"!=typeof window)var swfobject=function(){function A(){if(t)return;try{var a=i.getElementsByTagName("body")[0].appendChild(Q("span"));a.parentNode.removeChild(a)}catch(b){return}t=!0;var c=l.length;for(var d=0;d<c;d++)l[d]()}function B(a){t?a():l[l.length]=a}function C(b){if(typeof h.addEventListener!=a)h.addEventListener("load",b,!1);else if(typeof i.addEventListener!=a)i.addEventListener("load",b,!1);else if(typeof h.attachEvent!=a)R(h,"onload",b);else if(typeof h.onload=="function"){var c=h.onload;h.onload=function(){c(),b()}}else h.onload=b}function D(){k?E():F()}function E(){var c=i.getElementsByTagName("body")[0],d=Q(b);d.setAttribute("type",e);var f=c.appendChild(d);if(f){var g=0;(function(){if(typeof f.GetVariable!=a){var b=f.GetVariable("$version");b&&(b=b.split(" ")[1].split(","),y.pv=[parseInt(b[0],10),parseInt(b[1],10),parseInt(b[2],10)])}else if(g<10){g++,setTimeout(arguments.callee,10);return}c.removeChild(d),f=null,F()})()}else F()}function F(){var b=m.length;if(b>0)for(var c=0;c<b;c++){var d=m[c].id,e=m[c].callbackFn,f={success:!1,id:d};if(y.pv[0]>0){var g=P(d);if(g)if(S(m[c].swfVersion)&&!(y.wk&&y.wk<312))U(d,!0),e&&(f.success=!0,f.ref=G(d),e(f));else if(m[c].expressInstall&&H()){var h={};h.data=m[c].expressInstall,h.width=g.getAttribute("width")||"0",h.height=g.getAttribute("height")||"0",g.getAttribute("class")&&(h.styleclass=g.getAttribute("class")),g.getAttribute("align")&&(h.align=g.getAttribute("align"));var i={},j=g.getElementsByTagName("param"),k=j.length;for(var l=0;l<k;l++)j[l].getAttribute("name").toLowerCase()!="movie"&&(i[j[l].getAttribute("name")]=j[l].getAttribute("value"));I(h,i,d,e)}else J(g),e&&e(f)}else{U(d,!0);if(e){var n=G(d);n&&typeof n.SetVariable!=a&&(f.success=!0,f.ref=n),e(f)}}}}function G(c){var d=null,e=P(c);if(e&&e.nodeName=="OBJECT")if(typeof e.SetVariable!=a)d=e;else{var f=e.getElementsByTagName(b)[0];f&&(d=f)}return d}function H(){return!u&&S("6.0.65")&&(y.win||y.mac)&&!(y.wk&&y.wk<312)}function I(b,c,d,e){u=!0,r=e||null,s={success:!1,id:d};var g=P(d);if(g){g.nodeName=="OBJECT"?(p=K(g),q=null):(p=g,q=d),b.id=f;if(typeof b.width==a||!/%$/.test(b.width)&&parseInt(b.width,10)<310)b.width="310";if(typeof b.height==a||!/%$/.test(b.height)&&parseInt(b.height,10)<137)b.height="137";i.title=i.title.slice(0,47)+" - Flash Player Installation";var j=y.ie&&y.win?["Active"].concat("").join("X"):"PlugIn",k="MMredirectURL="+h.location.toString().replace(/&/g,"%26")+"&MMplayerType="+j+"&MMdoctitle="+i.title;typeof c.flashvars!=a?c.flashvars+="&"+k:c.flashvars=k;if(y.ie&&y.win&&g.readyState!=4){var l=Q("div");d+="SWFObjectNew",l.setAttribute("id",d),g.parentNode.insertBefore(l,g),g.style.display="none",function(){g.readyState==4?g.parentNode.removeChild(g):setTimeout(arguments.callee,10)}()}L(b,c,d)}}function J(a){if(y.ie&&y.win&&a.readyState!=4){var b=Q("div");a.parentNode.insertBefore(b,a),b.parentNode.replaceChild(K(a),b),a.style.display="none",function(){a.readyState==4?a.parentNode.removeChild(a):setTimeout(arguments.callee,10)}()}else a.parentNode.replaceChild(K(a),a)}function K(a){var c=Q("div");if(y.win&&y.ie)c.innerHTML=a.innerHTML;else{var d=a.getElementsByTagName(b)[0];if(d){var e=d.childNodes;if(e){var f=e.length;for(var g=0;g<f;g++)(e[g].nodeType!=1||e[g].nodeName!="PARAM")&&e[g].nodeType!=8&&c.appendChild(e[g].cloneNode(!0))}}}return c}function L(c,d,f){var g,h=P(f);if(y.wk&&y.wk<312)return g;if(h){typeof c.id==a&&(c.id=f);if(y.ie&&y.win){var i="";for(var j in c)c[j]!=Object.prototype[j]&&(j.toLowerCase()=="data"?d.movie=c[j]:j.toLowerCase()=="styleclass"?i+=' class="'+c[j]+'"':j.toLowerCase()!="classid"&&(i+=" "+j+'="'+c[j]+'"'));var k="";for(var l in d)d[l]!=Object.prototype[l]&&(k+='<param name="'+l+'" value="'+d[l]+'" />');h.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+i+">"+k+"</object>",n[n.length]=c.id,g=P(c.id)}else{var m=Q(b);m.setAttribute("type",e);for(var o in c)c[o]!=Object.prototype[o]&&(o.toLowerCase()=="styleclass"?m.setAttribute("class",c[o]):o.toLowerCase()!="classid"&&m.setAttribute(o,c[o]));for(var p in d)d[p]!=Object.prototype[p]&&p.toLowerCase()!="movie"&&M(m,p,d[p]);h.parentNode.replaceChild(m,h),g=m}}return g}function M(a,b,c){var d=Q("param");d.setAttribute("name",b),d.setAttribute("value",c),a.appendChild(d)}function N(a){var b=P(a);b&&b.nodeName=="OBJECT"&&(y.ie&&y.win?(b.style.display="none",function(){b.readyState==4?O(a):setTimeout(arguments.callee,10)}()):b.parentNode.removeChild(b))}function O(a){var b=P(a);if(b){for(var c in b)typeof b[c]=="function"&&(b[c]=null);b.parentNode.removeChild(b)}}function P(a){var b=null;try{b=i.getElementById(a)}catch(c){}return b}function Q(a){return i.createElement(a)}function R(a,b,c){a.attachEvent(b,c),o[o.length]=[a,b,c]}function S(a){var b=y.pv,c=a.split(".");return c[0]=parseInt(c[0],10),c[1]=parseInt(c[1],10)||0,c[2]=parseInt(c[2],10)||0,b[0]>c[0]||b[0]==c[0]&&b[1]>c[1]||b[0]==c[0]&&b[1]==c[1]&&b[2]>=c[2]?!0:!1}function T(c,d,e,f){if(y.ie&&y.mac)return;var g=i.getElementsByTagName("head")[0];if(!g)return;var h=e&&typeof e=="string"?e:"screen";f&&(v=null,w=null);if(!v||w!=h){var j=Q("style");j.setAttribute("type","text/css"),j.setAttribute("media",h),v=g.appendChild(j),y.ie&&y.win&&typeof i.styleSheets!=a&&i.styleSheets.length>0&&(v=i.styleSheets[i.styleSheets.length-1]),w=h}y.ie&&y.win?v&&typeof v.addRule==b&&v.addRule(c,d):v&&typeof i.createTextNode!=a&&v.appendChild(i.createTextNode(c+" {"+d+"}"))}function U(a,b){if(!x)return;var c=b?"visible":"hidden";t&&P(a)?P(a).style.visibility=c:T("#"+a,"visibility:"+c)}function V(b){var c=/[\\\"<>\.;]/,d=c.exec(b)!=null;return d&&typeof encodeURIComponent!=a?encodeURIComponent(b):b}var a="undefined",b="object",c="Shockwave Flash",d="ShockwaveFlash.ShockwaveFlash",e="application/x-shockwave-flash",f="SWFObjectExprInst",g="onreadystatechange",h=window,i=document,j=navigator,k=!1,l=[D],m=[],n=[],o=[],p,q,r,s,t=!1,u=!1,v,w,x=!0,y=function(){var f=typeof i.getElementById!=a&&typeof i.getElementsByTagName!=a&&typeof i.createElement!=a,g=j.userAgent.toLowerCase(),l=j.platform.toLowerCase(),m=l?/win/.test(l):/win/.test(g),n=l?/mac/.test(l):/mac/.test(g),o=/webkit/.test(g)?parseFloat(g.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):!1,p=!1,q=[0,0,0],r=null;if(typeof j.plugins!=a&&typeof j.plugins[c]==b)r=j.plugins[c].description,r&&(typeof j.mimeTypes==a||!j.mimeTypes[e]||!!j.mimeTypes[e].enabledPlugin)&&(k=!0,p=!1,r=r.replace(/^.*\s+(\S+\s+\S+$)/,"$1"),q[0]=parseInt(r.replace(/^(.*)\..*$/,"$1"),10),q[1]=parseInt(r.replace(/^.*\.(.*)\s.*$/,"$1"),10),q[2]=/[a-zA-Z]/.test(r)?parseInt(r.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0);else if(typeof h[["Active"].concat("Object").join("X")]!=a)try{var s=new(window[["Active"].concat("Object").join("X")])(d);s&&(r=s.GetVariable("$version"),r&&(p=!0,r=r.split(" ")[1].split(","),q=[parseInt(r[0],10),parseInt(r[1],10),parseInt(r[2],10)]))}catch(t){}return{w3:f,pv:q,wk:o,ie:p,win:m,mac:n}}(),z=function(){if(!y.w3)return;(typeof i.readyState!=a&&i.readyState=="complete"||typeof i.readyState==a&&(i.getElementsByTagName("body")[0]||i.body))&&A(),t||(typeof i.addEventListener!=a&&i.addEventListener("DOMContentLoaded",A,!1),y.ie&&y.win&&(i.attachEvent(g,function(){i.readyState=="complete"&&(i.detachEvent(g,arguments.callee),A())}),h==top&&function(){if(t)return;try{i.documentElement.doScroll("left")}catch(a){setTimeout(arguments.callee,0);return}A()}()),y.wk&&function(){if(t)return;if(!/loaded|complete/.test(i.readyState)){setTimeout(arguments.callee,0);return}A()}(),C(A))}(),W=function(){y.ie&&y.win&&window.attachEvent("onunload",function(){var a=o.length;for(var b=0;b<a;b++)o[b][0].detachEvent(o[b][1],o[b][2]);var c=n.length;for(var d=0;d<c;d++)N(n[d]);for(var e in y)y[e]=null;y=null;for(var f in swfobject)swfobject[f]=null;swfobject=null})}();return{registerObject:function(a,b,c,d){if(y.w3&&a&&b){var e={};e.id=a,e.swfVersion=b,e.expressInstall=c,e.callbackFn=d,m[m.length]=e,U(a,!1)}else d&&d({success:!1,id:a})},getObjectById:function(a){if(y.w3)return G(a)},embedSWF:function(c,d,e,f,g,h,i,j,k,l){var m={success:!1,id:d};y.w3&&!(y.wk&&y.wk<312)&&c&&d&&e&&f&&g?(U(d,!1),B(function(){e+="",f+="";var n={};if(k&&typeof k===b)for(var o in k)n[o]=k[o];n.data=c,n.width=e,n.height=f;var p={};if(j&&typeof j===b)for(var q in j)p[q]=j[q];if(i&&typeof i===b)for(var r in i)typeof p.flashvars!=a?p.flashvars+="&"+r+"="+i[r]:p.flashvars=r+"="+i[r];if(S(g)){var s=L(n,p,d);n.id==d&&U(d,!0),m.success=!0,m.ref=s}else{if(h&&H()){n.data=h,I(n,p,d,l);return}U(d,!0)}l&&l(m)})):l&&l(m)},switchOffAutoHideShow:function(){x=!1},ua:y,getFlashPlayerVersion:function(){return{major:y.pv[0],minor:y.pv[1],release:y.pv[2]}},hasFlashPlayerVersion:S,createSWF:function(a,b,c){return y.w3?L(a,b,c):undefined},showExpressInstall:function(a,b,c,d){y.w3&&H()&&I(a,b,c,d)},removeSWF:function(a){y.w3&&N(a)},createCSS:function(a,b,c,d){y.w3&&T(a,b,c,d)},addDomLoadEvent:B,addLoadEvent:C,getQueryParamValue:function(a){var b=i.location.search||i.location.hash;if(b){/\?/.test(b)&&(b=b.split("?")[1]);if(a==null)return V(b);var c=b.split("&");for(var d=0;d<c.length;d++)if(c[d].substring(0,c[d].indexOf("="))==a)return V(c[d].substring(c[d].indexOf("=")+1))}return""},expressInstallCallback:function(){if(u){var a=P(f);a&&p&&(a.parentNode.replaceChild(p,a),q&&(U(q,!0),y.ie&&y.win&&(p.style.display="block")),r&&r(s)),u=!1}}}}();(function(){if("undefined"==typeof window||window.WebSocket)return;var a=window.console;if(!a||!a.log||!a.error)a={log:function(){},error:function(){}};if(!swfobject.hasFlashPlayerVersion("10.0.0")){a.error("Flash Player >= 10.0.0 is required.");return}location.protocol=="file:"&&a.error("WARNING: web-socket-js doesn't work in file:///... URL unless you set Flash Security Settings properly. Open the page via Web server i.e. http://..."),WebSocket=function(a,b,c,d,e){var f=this;f.__id=WebSocket.__nextId++,WebSocket.__instances[f.__id]=f,f.readyState=WebSocket.CONNECTING,f.bufferedAmount=0,f.__events={},b?typeof b=="string"&&(b=[b]):b=[],setTimeout(function(){WebSocket.__addTask(function(){WebSocket.__flash.create(f.__id,a,b,c||null,d||0,e||null)})},0)},WebSocket.prototype.send=function(a){if(this.readyState==WebSocket.CONNECTING)throw"INVALID_STATE_ERR: Web Socket connection has not been established";var b=WebSocket.__flash.send(this.__id,encodeURIComponent(a));return b<0?!0:(this.bufferedAmount+=b,!1)},WebSocket.prototype.close=function(){if(this.readyState==WebSocket.CLOSED||this.readyState==WebSocket.CLOSING)return;this.readyState=WebSocket.CLOSING,WebSocket.__flash.close(this.__id)},WebSocket.prototype.addEventListener=function(a,b,c){a in this.__events||(this.__events[a]=[]),this.__events[a].push(b)},WebSocket.prototype.removeEventListener=function(a,b,c){if(!(a in this.__events))return;var d=this.__events[a];for(var e=d.length-1;e>=0;--e)if(d[e]===b){d.splice(e,1);break}},WebSocket.prototype.dispatchEvent=function(a){var b=this.__events[a.type]||[];for(var c=0;c<b.length;++c)b[c](a);var d=this["on"+a.type];d&&d(a)},WebSocket.prototype.__handleEvent=function(a){"readyState"in a&&(this.readyState=a.readyState),"protocol"in a&&(this.protocol=a.protocol);var b;if(a.type=="open"||a.type=="error")b=this.__createSimpleEvent(a.type);else if(a.type=="close")b=this.__createSimpleEvent("close");else{if(a.type!="message")throw"unknown event type: "+a.type;var c=decodeURIComponent(a.message);b=this.__createMessageEvent("message",c)}this.dispatchEvent(b)},WebSocket.prototype.__createSimpleEvent=function(a){if(document.createEvent&&window.Event){var b=document.createEvent("Event");return b.initEvent(a,!1,!1),b}return{type:a,bubbles:!1,cancelable:!1}},WebSocket.prototype.__createMessageEvent=function(a,b){if(document.createEvent&&window.MessageEvent&&!window.opera){var c=document.createEvent("MessageEvent");return c.initMessageEvent("message",!1,!1,b,null,null,window,null),c}return{type:a,data:b,bubbles:!1,cancelable:!1}},WebSocket.CONNECTING=0,WebSocket.OPEN=1,WebSocket.CLOSING=2,WebSocket.CLOSED=3,WebSocket.__flash=null,WebSocket.__instances={},WebSocket.__tasks=[],WebSocket.__nextId=0,WebSocket.loadFlashPolicyFile=function(a){WebSocket.__addTask(function(){WebSocket.__flash.loadManualPolicyFile(a)})},WebSocket.__initialize=function(){if(WebSocket.__flash)return;WebSocket.__swfLocation&&(window.WEB_SOCKET_SWF_LOCATION=WebSocket.__swfLocation);if(!window.WEB_SOCKET_SWF_LOCATION){a.error("[WebSocket] set WEB_SOCKET_SWF_LOCATION to location of WebSocketMain.swf");return}var b=document.createElement("div");b.id="webSocketContainer",b.style.position="absolute",WebSocket.__isFlashLite()?(b.style.left="0px",b.style.top="0px"):(b.style.left="-100px",b.style.top="-100px");var c=document.createElement("div");c.id="webSocketFlash",b.appendChild(c),document.body.appendChild(b),swfobject.embedSWF(WEB_SOCKET_SWF_LOCATION,"webSocketFlash","1","1","10.0.0",null,null,{hasPriority:!0,swliveconnect:!0,allowScriptAccess:"always"},null,function(b){b.success||a.error("[WebSocket] swfobject.embedSWF failed")})},WebSocket.__onFlashInitialized=function(){setTimeout(function(){WebSocket.__flash=document.getElementById("webSocketFlash"),WebSocket.__flash.setCallerUrl(location.href),WebSocket.__flash.setDebug(!!window.WEB_SOCKET_DEBUG);for(var a=0;a<WebSocket.__tasks.length;++a)WebSocket.__tasks[a]();WebSocket.__tasks=[]},0)},WebSocket.__onFlashEvent=function(){return setTimeout(function(){try{var b=WebSocket.__flash.receiveEvents();for(var c=0;c<b.length;++c)WebSocket.__instances[b[c].webSocketId].__handleEvent(b[c])}catch(d){a.error(d)}},0),!0},WebSocket.__log=function(b){a.log(decodeURIComponent(b))},WebSocket.__error=function(b){a.error(decodeURIComponent(b))},WebSocket.__addTask=function(a){WebSocket.__flash?a():WebSocket.__tasks.push(a)},WebSocket.__isFlashLite=function(){if(!window.navigator||!window.navigator.mimeTypes)return!1;var a=window.navigator.mimeTypes["application/x-shockwave-flash"];return!a||!a.enabledPlugin||!a.enabledPlugin.filename?!1:a.enabledPlugin.filename.match(/flashlite/i)?!0:!1},window.WEB_SOCKET_DISABLE_AUTO_INITIALIZATION||(window.addEventListener?window.addEventListener("load",function(){WebSocket.__initialize()},!1):window.attachEvent("onload",function(){WebSocket.__initialize()}))})(),function(a,b,c){function d(a){if(!a)return;b.Transport.apply(this,arguments),this.sendBuffer=[]}function e(){}a.XHR=d,b.util.inherit(d,b.Transport),d.prototype.open=function(){return this.socket.setBuffer(!1),this.onOpen(),this.get(),this.setCloseTimeout(),this},d.prototype.payload=function(a){var c=[];for(var d=0,e=a.length;d<e;d++)c.push(b.parser.encodePacket(a[d]));this.send(b.parser.encodePayload(c))},d.prototype.send=function(a){return this.post(a),this},d.prototype.post=function(a){function d(){this.readyState==4&&(this.onreadystatechange=e,b.posting=!1,this.status==200?b.socket.setBuffer(!1):b.onClose())}function f(){this.onload=e,b.socket.setBuffer(!1)}var b=this;this.socket.setBuffer(!0),this.sendXHR=this.request("POST"),c.XDomainRequest&&this.sendXHR instanceof XDomainRequest?this.sendXHR.onload=this.sendXHR.onerror=f:this.sendXHR.onreadystatechange=d,this.sendXHR.send(a)},d.prototype.close=function(){return this.onClose(),this},d.prototype.request=function(a){var c=b.util.request(this.socket.isXDomain()),d=b.util.query(this.socket.options.query,"t="+ +(new Date));c.open(a||"GET",this.prepareUrl()+d,!0);if(a=="POST")try{c.setRequestHeader?c.setRequestHeader("Content-type","text/plain;charset=UTF-8"):c.contentType="text/plain"}catch(e){}return c},d.prototype.scheme=function(){return this.socket.options.secure?"https":"http"},d.check=function(a,d){try{var e=b.util.request(d),f=c.XDomainRequest&&e instanceof XDomainRequest,g=a&&a.options&&a.options.secure?"https:":"http:",h=c.location&&g!=c.location.protocol;if(e&&(!f||!h))return!0}catch(i){}return!1},d.xdomainCheck=function(a){return d.check(a,!0)}}("undefined"!=typeof io?io.Transport:module.exports,"undefined"!=typeof io?io:module.parent.exports,this),function(a,b){function c(a){b.Transport.XHR.apply(this,arguments)}a.htmlfile=c,b.util.inherit(c,b.Transport.XHR),c.prototype.name="htmlfile",c.prototype.get=function(){this.doc=new(window[["Active"].concat("Object").join("X")])("htmlfile"),this.doc.open(),this.doc.write("<html></html>"),this.doc.close(),this.doc.parentWindow.s=this;var a=this.doc.createElement("div");a.className="socketio",this.doc.body.appendChild(a),this.iframe=this.doc.createElement("iframe"),a.appendChild(this.iframe);var c=this,d=b.util.query(this.socket.options.query,"t="+ +(new Date));this.iframe.src=this.prepareUrl()+d,b.util.on(window,"unload",function(){c.destroy()})},c.prototype._=function(a,b){a=a.replace(/\\\//g,"/"),this.onData(a);try{var c=b.getElementsByTagName("script")[0];c.parentNode.removeChild(c)}catch(d){}},c.prototype.destroy=function(){if(this.iframe){try{this.iframe.src="about:blank"}catch(a){}this.doc=null,this.iframe.parentNode.removeChild(this.iframe),this.iframe=null,CollectGarbage()}},c.prototype.close=function(){return this.destroy(),b.Transport.XHR.prototype.close.call(this)},c.check=function(a){if(typeof window!="undefined"&&["Active"].concat("Object").join("X")in window)try{var c=new(window[["Active"].concat("Object").join("X")])("htmlfile");return c&&b.Transport.XHR.check(a)}catch(d){}return!1},c.xdomainCheck=function(){return!1},b.transports.push("htmlfile")}("undefined"!=typeof io?io.Transport:module.exports,"undefined"!=typeof io?io:module.parent.exports),function(a,b,c){function d(){b.Transport.XHR.apply(this,arguments)}function e(){}a["xhr-polling"]=d,b.util.inherit(d,b.Transport.XHR),b.util.merge(d,b.Transport.XHR),d.prototype.name="xhr-polling",d.prototype.heartbeats=function(){return!1},d.prototype.open=function(){var a=this;return b.Transport.XHR.prototype.open.call(a),!1},d.prototype.get=function(){function b(){this.readyState==4&&(this.onreadystatechange=e,this.status==200?(a.onData(this.responseText),a.get()):a.onClose())}function d(){this.onload=e,this.onerror=e,a.retryCounter=1,a.onData(this.responseText),a.get()}function f(){a.retryCounter++,!a.retryCounter||a.retryCounter>3?a.onClose():a.get()}if(!this.isOpen)return;var a=this;this.xhr=this.request(),c.XDomainRequest&&this.xhr instanceof XDomainRequest?(this.xhr.onload=d,this.xhr.onerror=f):this.xhr.onreadystatechange=b,this.xhr.send(null)},d.prototype.onClose=function(){b.Transport.XHR.prototype.onClose.call(this);if(this.xhr){this.xhr.onreadystatechange=this.xhr.onload=this.xhr.onerror=e;try{this.xhr.abort()}catch(a){}this.xhr=null}},d.prototype.ready=function(a,c){var d=this;b.util.defer(function(){c.call(d)})},b.transports.push("xhr-polling")}("undefined"!=typeof io?io.Transport:module.exports,"undefined"!=typeof io?io:module.parent.exports,this),function(a,b,c){function e(a){b.Transport["xhr-polling"].apply(this,arguments),this.index=b.j.length;var c=this;b.j.push(function(a){c._(a)})}var d=c.document&&"MozAppearance"in c.document.documentElement.style;a["jsonp-polling"]=e,b.util.inherit(e,b.Transport["xhr-polling"]),e.prototype.name="jsonp-polling",e.prototype.post=function(a){function i(){j(),c.socket.setBuffer(!1)}function j(){c.iframe&&c.form.removeChild(c.iframe);try{h=document.createElement('<iframe name="'+c.iframeId+'">')}catch(a){h=document.createElement("iframe"),h.name=c.iframeId}h.id=c.iframeId,c.form.appendChild(h),c.iframe=h}var c=this,d=b.util.query(this.socket.options.query,"t="+ +(new Date)+"&i="+this.index);if(!this.form){var e=document.createElement("form"),f=document.createElement("textarea"),g=this.iframeId="socketio_iframe_"+this.index,h;e.className="socketio",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.display="none",e.target=g,e.method="POST",e.setAttribute("accept-charset","utf-8"),f.name="d",e.appendChild(f),document.body.appendChild(e),this.form=e,this.area=f}this.form.action=this.prepareUrl()+d,j(),this.area.value=b.JSON.stringify(a);try{this.form.submit()}catch(k){}this.iframe.attachEvent?h.onreadystatechange=function(){c.iframe.readyState=="complete"&&i()}:this.iframe.onload=i,this.socket.setBuffer(!0)},e.prototype.get=function(){var a=this,c=document.createElement("script"),e=b.util.query(this.socket.options.query,"t="+ +(new Date)+"&i="+this.index);this.script&&(this.script.parentNode.removeChild(this.script),this.script=null),c.async=!0,c.src=this.prepareUrl()+e,c.onerror=function(){a.onClose()};var f=document.getElementsByTagName("script")[0];f.parentNode.insertBefore(c,f),this.script=c,d&&setTimeout(function(){var a=document.createElement("iframe");document.body.appendChild(a),document.body.removeChild(a)},100)},e.prototype._=function(a){return this.onData(a),this.isOpen&&this.get(),this},e.prototype.ready=function(a,c){var e=this;if(!d)return c.call(this);b.util.load(function(){c.call(e)})},e.check=function(){return"document"in c},e.xdomainCheck=function(){return!0},b.transports.push("jsonp-polling")}("undefined"!=typeof io?io.Transport:module.exports,"undefined"!=typeof io?io:module.parent.exports,this),typeof define=="function"&&define.amd&&define([],function(){return io})})()

var socket = io.connect('http://elephantsdontexist.com');
socket.on('school', function (data) {
  addNewSchool(data.name);
});

function addNewSchool(name){
  var new_school = sudan.circle(350, 452, 1000);
  new_school.animate({r: 4}, 1000, "linear", function(){
    new_school.attr("fill", "#008040")
  })
  new_school.node.setAttribute("class","school");
  new_school.node.setAttribute("id","school");
  new_school.node.setAttribute("name", name);
  new_school.node.setAttribute("population", 45);
  new_school.node.setAttribute("xpos", 350);
  new_school.node.setAttribute("ypos", 452);
  $('circle#school').on('mouseover', function(){
    var name = $(this).attr('name')
    var xpos = $(this).attr('xpos')
    var ypos = $(this).attr('ypos')
    var population = $(this).attr('population')
    console.log(population)
    $('.card h2').text(name);
    $('.card h3.location span').text(xpos + " " + ypos);
    $('.card h3.population span').text(population)
  });
}

// var svg = d3.select("body").append("svg").attr("width", width).attr("height", height);

var projection;

// d3.json("/javascripts/south_sudan.json", function(error, south_sudan) {
//   var subunits = topojson.feature(south_sudan, south_sudan.objects.subunits);
//   console.log(south_sudan.objects.subunits)
//   projection = d3.geo.mercator()
//   .scale(4000)
//   .center([30.5,9])

//   svg.selectAll(".subunit")
//   .data(topojson.feature(south_sudan, south_sudan.objects.subunits).features)
//   .enter().append("path")
//   .attr("class", function(d) { return "subunit " + d.id; })
//   .attr("d", path);

//   svg.attr("fill", "#cccccc")

//   var path = d3.geo.path()
//   .projection(projection);

//   svg.append("path")
//   .datum(subunits)
//   .attr("d", path);
// });

function getSudan(){
  // wha
  return "M722.1846343497587,190.68977433501198L717.7359657997026,199.71581098258343L716.2530762830174,206.1432194112664L715.841162528382,211.58044740387857L716.0883107811628,214.66923505944874L716.5826072867249,216.70761918458948L716.8297555395056,217.13998170633806L716.9945210413598,217.51057203691084L717.2416692941406,217.69586508598672L717.4064347959943,217.81939300186843L729.2695509294795,217.81939300186843L730.175761189676,235.47749176955676L731.1643542008001,255.9600988166161L732.1529472119237,276.3648418517664L731.8234162082158,278.1518174138463L731.5762679554346,279.69221775040035L730.670057695238,281.35575072602126L729.1871681785524,282.95757408954614L722.2670171006866,289.17914116803524L720.8665103349272,290.0414241289336L719.5483863200957,290.4109656221465L715.5940142756008,290.4109656221465L713.2049144987186,290.65732383761645L712.0515559857413,291.0268569932009L710.9805802236906,291.457972691004L710.2391354653473,291.9506680217298L707.3557391829036,294.47559251521693L707.0262081791952,294.5987536210796L706.2847634208524,294.72191417503666L703.0718361347003,294.2908498213392L701.424181116161,292.38176915843826L700.0236743504024,289.9182425187173L697.8817228263006,288.07045152602484L696.3988333096154,287.88566552532234L695.4102402984918,288.2552362707138L694.4216472873677,288.8095829727199L693.1035232725362,289.0559556602435L692.0325475104851,288.62480199365723L690.9615717484348,287.7624741602019L689.8082132354571,287.08491166516467L688.4077064696985,287.1465089543035L688.7372374734064,287.70087826820145L688.7372374734064,287.94726099847196L688.0781754659902,288.31683090656475L683.3823586631524,288.8711763536305L682.4761484029559,288.6863957927478L681.8994691464668,288.6863957927478L681.4051726409048,288.99436269737737L680.4165796297816,289.7334690600338L679.7575176223659,289.97983339337304L672.1783045370835,288.2552362707138L670.9425632731791,288.4400197597895L668.9653772509314,290.226195501197L669.047760001858,290.4725553844611L669.2125255037131,290.903679830196L668.7182289981506,291.39638515050433L667.6472532360999,291.5811473558075L666.6586602249763,292.073840467939L666.329129221268,292.5665247104615L666.2467464703413,293.1207838908515L666.2467464703413,294.2908498213392L666.1643637194143,294.5987536210796L665.8348327157064,295.0913925266668L665.7524499647798,295.46086591543735L665.9172154666335,295.70717875239745L666.5762774740497,296.13822091588634L666.6586602249763,296.384527695982L666.4938947231226,297.24658410199754L665.9172154666335,298.601189799394L665.7524499647798,299.0937572400578L665.9995982175606,299.9557291849251L666.4938947231226,300.63297406029494L666.9881912286837,301.12550541144606L667.4824877342458,301.9258502421952L668.141549741662,302.29523239847435L669.047760001858,302.7261720544759L668.9653772509314,303.58803137804387L668.4710807453694,303.95739150906434L667.8120187379545,304.2036288819562L667.2353394814654,304.6960971173313L666.6586602249763,305.4347832086589L666.4115119721951,306.1118950025731L666.2467464703413,306.7889904382364L666.2467464703413,307.7738273656589L666.4938947231226,308.2046826671684L667.4001049833191,308.8817276661093L667.6472532360999,309.25101807632075L667.4824877342458,310.66658650988654L666.9058084777571,311.65128792051496L665.9995982175606,312.3282502592997L664.8462397045828,312.88211650343135L662.7042881804814,313.2513546554528L662.4571399277002,313.6205880026306L662.292374425846,314.17442902133484L661.9628434221386,314.91286692593576L661.5509296675036,315.5897515049045L657.5965576230087,319.6507219626178L656.6903473628122,320.81968249939484L656.3608163591043,321.55794887290335L656.031285355396,323.0344248531783L655.7017543516881,323.5265667213397L655.3722233479803,323.89566762049844L655.0426923442724,324.5108253153244L655.0426923442724,324.63385528479125L654.0540993331488,325.67958892557897L653.8069510803675,326.41773114235707L655.6193716007615,331.0921972079301L656.1960508572502,332.19919807481733L657.3494093702279,332.93717544544006L657.6789403739358,333.55214242710076L657.84370587579,334.16709655135014L658.0908541285708,334.59755679609145L658.5851506341328,334.84353125537996L660.4799539054534,335.02801075303057L662.0452261730657,335.70442570793773L662.9514364332622,335.88889982381465L663.3633501878971,335.27398162157L663.7752639425321,335.08950366245733L665.9995982175606,334.59755679609145L666.5762774740497,334.7205442823217L668.635846247224,335.5199504395548L670.860180522252,335.88889982381465L671.4368597787411,336.0733727875861L672.5078355407918,336.99572033885386L673.6611940537696,338.28695863407836L674.896935317674,339.3936895809409L678.7689246112418,340.377415830103L679.6751348714388,340.377415830103L681.4051726409048,339.2092372867495L681.9818518973939,338.90181425197727L685.0300136816923,338.28695863407836L686.8424342020862,338.22547237164247L687.9957927150631,338.7173589037917L688.6548547224793,339.2092372867495L689.8905959863837,339.57814073061604L690.632040744727,339.8855567711248L691.2911027521423,340.50037932523355L692.2796957632668,341.7914653998305L693.0211405216091,342.34477090536086L694.5040300382948,342.77511254964566L699.0350813392783,342.34477090536086L699.7765260976207,342.5292037970819L701.6713293689418,343.7587273525246L703.8956636439698,344.43494379721335L704.5547256513864,344.74230986900557L705.460935911583,345.78733098416615L707.685270186611,348.9221767755988L711.2277284764714,351.50357051322624L711.8867904838871,351.6879473798475L713.2872972496457,351.87232312854655L714.0287420079881,352.05669775972365L716.1706935320899,353.2858334380684L724.8208823794221,362.1341553394111L725.9742408924003,364.1001048202937L726.4685373979623,366.4959379478663L726.550920148889,373.06818127038196L726.7156856507427,373.3752619602247L727.1275994053781,373.6209243697886L730.3405266915297,376.1388545005881L732.2353299628508,378.5337741292097L733.5534539776822,379.51625338733714L734.8715779925137,379.209231854409L736.024936505492,378.65658568412226L737.0135295166151,379.27063639616705L737.6725915240308,380.4987025546886L738.0021225277387,381.9109206359493L738.0021225277387,384.121224783476L738.0021225277387,384.9193530479704L738.1668880295929,386.4541599044795L738.743567286082,387.19084145558304L739.237863791644,387.3750092389764L739.7321602972052,387.74334168327874L740.3912223046214,388.6641545980355L743.2746185870651,390.7512345256317L743.6041495907734,391.1809109512328L743.9336805944813,392.40852691550566L744.4279771000429,392.71542374829306L744.9222736056049,392.96093915549085L745.0870391074591,393.2064527334533L754.9729692186966,395.600114447883L759.5040205196797,398.7300266596654L760.0806997761688,399.6505330779723L760.5749962817308,400.75510730363743L760.9045272854387,401.98236926553074L760.9869100363653,403.3323056042648L760.8221445345116,403.51638363439537L760.1630825270959,404.007253462987L759.9983170252422,404.068611688804L760.0806997761688,404.49811614344213L760.4102307798771,405.234396777768L760.4926135308042,405.47982008992875L760.9869100363653,408.36341082032294L761.8107375456357,409.0996075207949L763.0464788095401,409.34500288450874L766.0122578429114,409.34500288450874L767.495147359597,409.5290482478701L768.7308886235014,410.01983102818684L773.4267054263391,413.1484056888216L773.9210019319007,413.9458398712447L774.2505329356095,415.23396376817226L775.074360444879,416.15402282470825L775.568656950441,416.4607037347886L776.2277189578567,419.34337168348213L776.9691637161995,422.16447517758957L778.5344359838118,426.2117489595938L779.1111152403009,430.25855927147194L779.6877944967896,431.6687032230216L782.4888080283067,436.4505176024545L782.9007217829421,438.2895081820725L782.9831045338688,442.3962513214368L783.3126355375766,443.80592245730696L785.7841180653859,448.0958939483726L787.1022420802174,451.5275138832168L788.2556005931951,452.8755640178447L789.5737246080266,454.10102211051907L790.8094658719315,455.57151915327256L791.3037623774935,456.9194244636957L791.9628243849093,460.71780914624725L792.0452071358363,461.51419665568756L791.3037623774935,462.9844070256576L791.0566141247132,463.7807474752356L791.0566141247132,464.57707145162516L791.3861451284206,465.3733789867286L792.5395036413984,466.5984354714477L792.7866518941792,467.39470141422504L792.6218863923255,468.37469862410995L792.3747381395447,469.1709281856945L792.2923553886171,469.9671414899742L792.3747381395447,470.88582898901575L793.0338001469595,472.4169269495242L798.7182099609217,480.50014071381247L799.7068029720454,482.3370063135016L800.2834822285345,486.4390376038494L801.0249269868768,487.78588286365186L804.1554715221018,490.0509315989454L809.7574985851365,493.35645438904174L812.4761293657266,495.4987818083077L812.9704258712886,496.90653692257746L813.2999568749965,497.7634081132772L812.805660369434,498.5590585226824L812.2289811129463,499.29349166704344L811.7346846073842,500.0279119851805L811.6523018564571,500.8847195120789L811.8994501092379,501.5579132285028L814.2061671351935,505.1684971760402L815.2771428972437,506.3311624835485L816.5128841611486,506.9430789121638L818.2429219306155,506.6983133887018L819.8081941982277,505.5968512299421L822.691590480672,502.475887399197L824.1744799973576,501.43551516836055L825.4102212612624,501.1907179851791L826.8931107779476,501.1907179851791L828.3760002946333,501.3743160054483L829.6117415585381,501.74150965473143L831.1770138261513,502.6594798471538L834.2251756104488,505.10730338915005L835.9552133799157,505.53565805653363L837.602868398455,505.2296908752469L838.8386096623594,504.61774993568685L840.1567336771914,504.31177617379956L841.8867714466578,504.8013331389399L846.5002054985684,507.6161769051333L850.2898120412096,509.1459059037195L850.6193430449175,509.75778231019746L848.7245397735969,512.5111191799651L848.3126260189624,514.1018566212655L848.4773915208161,515.5089992049061L849.8778982865747,518.1396232113381L850.5369602939904,519.8525034937119L850.5369602939904,521.2594628885072L849.9602810375013,522.6663779068906L847.3240330078384,526.0305610102737L846.9121192532034,526.9480219416382L846.6649710004222,541.6249039795723L847.2416502569113,545.0488469690733L848.8893052754515,547.9223238138242L858.4457043829807,558.0698375127039L853.9970358329233,558.0698375127039L848.7245397735969,558.0087141839961L848.4773915208161,553.9744074511707L845.7587607402261,553.7298933883992L843.8639574689055,555.135832618467L843.4520437142701,558.0087141839961L843.4520437142701,558.0698375127039L843.0401299596356,560.2091067295482L836.8614236401122,558.0698375127039L836.7790408891851,558.0087141839961L833.4013481011793,551.9571298936406L830.6003345696622,546.8218636573235L833.978027357668,538.1395644246121L828.7879140492682,536.549674353802L821.7853802204754,536.549674353802L824.4216282501388,531.1681037575327L822.8563559825261,529.2721732879133L817.4190944213456,532.3300868934987L812.5585121166537,535.0208827224052L811.3227708527488,532.6970228358512L806.4621885480574,534.5316587659817L800.777778734096,536.6719755136357L794.3519241617914,539.1179314481872L788.6675143478301,541.2580382787592L783.3126355375766,543.2757644432983L777.6282257236153,545.415683398094L770.8728401476033,547.8611877989122L766.094640593838,550.2454350037262L761.3164410400736,552.6906950010966L756.4558587353822,555.1969594988623L750.9362144232746,558.0087141839961L743.9336805944813,565.0374074447373L736.8487640147614,572.0651275298178L729.7638474350415,579.0307979653273L722.7613136062478,586.0566451483182L717.0769037922869,591.7377521916455L711.310111227398,597.5404324905675L703.5661326402624,605.3578415364452L696.893129815177,612.0750868559813L691.7030165067777,617.2041089236561L691.3734855030698,617.4483372039705L688.819620224333,618.9747417712647L685.7714584400351,619.3410731914022L674.5674043139661,618.7305196058593L668.141549741662,618.4252405265163L665.9995982175606,617.9978472500736L664.5167087008749,617.2651660857331L655.7017543516881,610.0599936041757L654.3012475859296,609.4493457578992L653.0655063220252,609.8767999127422L648.8639860247495,613.0520772119703L643.4267244635685,615.8608358095198L637.4951663968263,617.6315077705154L626.5382605235382,618.4862964644683L613.7689341298565,619.5242380797183L610.6383895946315,620.2568921636376L597.8690632009498,628.0713306550268L596.9628529407537,629.0480670985285L596.9628529407537,629.963743892024L597.210001193534,632.4665269256291L597.210001193534,633.5042376872327L596.9628529407537,634.5419318186549L596.8804701898257,634.9692128201701L596.4685564351917,635.579609389998L595.5623461749942,635.579609389998L591.1960603758648,634.7250525913983L590.042701862887,634.1146480093744L588.9717261008363,633.0159052870447L588.4774295952748,632.2833997655152L587.6536020860044,630.8183637155474L586.829774576735,630.3910552314424L586.2530953202458,630.3910552314424L580.8158337590658,630.0247885440842L579.8272407479417,629.5364296923952L579.3329442423801,628.3765624082621L579.168178740526,625.1410307521295L578.8386477368181,623.7979309106919L577.8500547256945,622.149541522868L572.9070896700755,616.5324760881501L571.2594346515361,615.1891880687466L570.8475208969012,615.0060101145889L569.4470141311426,614.3343528490343L569.1998658783618,614.2732927257387L569.0351003765077,614.7007122867208L563.5154560644,620.9284840687565L562.8563940569843,621.539015812912L561.5382700421533,622.0884892230038L554.3709707115058,623.1263701433138L553.135229447601,623.7368802311926L552.3114019383311,624.774733657743L552.229019187404,624.8357833223536L551.4875744290616,625.5073257045367L550.1694504142297,625.2631293074433L541.2721133141163,620.3790003279704L535.5053207492278,617.2651660857331L532.7866899686373,616.3493022056673L529.9032936861936,615.982952778294L526.6079836491144,615.982952778294L524.7955631287209,616.4714181888555L522.159315099058,618.4862964644683L520.346894578664,619.951620691322L519.6878325712482,620.1958379905153L518.3697085564163,620.50110824985L517.7106465490006,620.7453233667052L515.5686950248992,622.4548021194853L514.6624847647026,622.8821644297827L513.9210400063598,623.0042674065467L512.5205332406013,622.9432159481714L511.779088482258,623.1874214217339L511.0376437239156,623.8589815303776L510.70811272020774,624.6526341497529L510.4609644674265,625.4462766944199L510.1314334637191,626.3009574346013L505.517999411808,633.0159052870447L504.03510989512233,636.0068835930332L503.70557889141446,637.1055758825711L502.881751382145,635.6406487329222L503.54081338956075,632.0392294090198L502.5522203784367,630.8183637155474L500.4102688543353,629.963743892024L499.5040585941383,629.2312035102291L499.00976208857674,628.193423532663L498.7626138357955,625.8125698642004L498.5154655830147,625.0799813852302L497.2797243191103,624.164233732102L496.1263658061325,624.9578824728767L494.97300729315475,626.3620056142255L493.49011777646956,627.216673917997L491.5129317542219,627.1556265660686L490.77148699587906,627.2777212109123L489.5357457319742,627.7660974314399L487.31141145694573,628.9870215108094L486.4875839476763,629.1701580982244L485.08707718191727,629.3532941586236L484.34563242357444,629.3532941586236L483.7689531670858,629.1091126276624L483.02750840874296,628.4986546982568L483.02750840874296,628.193423532663L483.43942216337837,627.7660974314399L483.85133591801286,626.8503889207143L484.34563242357444,624.164233732102L484.4280151745015,622.7600612129088L482.6979774050351,612.5025221038105L481.7917671448381,610.7316989558481L481.0503223864953,610.4874433455282L480.39126037907954,610.5485073424652L479.6498156207367,610.7316989558481L478.990753613321,610.8538263837235L477.5902468475624,610.792762701214L477.01356759107375,610.7316989558481L474.3773195614108,609.8767999127422L468.692909747449,606.4570797282006L463.99709294461127,604.9914241926575L459.4660416436277,604.930354410689L458.3126831306495,604.5028641376834L457.8183866250879,603.831087338144L457.65362112323373,603.1593027356723L457.65362112323373,602.4264378841168L457.48885562138,601.6324904282156L457.0769418667451,600.8385319869676L455.4292868482057,598.8841257463423L454.77022484079,597.235043212832L454.358311086155,595.6469923172069L453.6992490787393,594.2421406525326L452.0515940601995,593.3869962793867L449.16819777775527,592.7761708401908L448.0972220157046,592.1042551090932L447.0262462536534,590.6382288856498L445.46097398604115,587.461704935618L444.38999822399046,586.1788256994587L442.7423432054511,585.2013735948108L441.9185156961812,585.0791908435733L441.0946881869113,585.0791908435733L440.35324342856893,584.8959162000647L439.7765641720798,584.2239038637058L439.6941814211532,583.3686033436512L440.18847792671477,582.6354778054833L440.6827744322768,581.9634372766881L440.92992268505714,581.2302925471363L440.2708606776414,579.8250703726209L438.7055884100291,578.4198111075358L436.8931678896356,577.3811172746646L435.32789562202333,577.1367157594693L432.1973510867979,577.1367157594693L430.30254781547774,575.6091806079392L429.4787203062074,573.0428213959798L429.4787203062074,569.9874668457256L430.1377823136236,567.9097224400814L430.2201650645502,567.1763807906564L430.1377823136236,566.5652547113248L429.64348580806154,565.4040949746649L429.56110305713446,564.7929476199256L429.9730168117694,564.0595610720493L430.30254781547774,563.6928638136152L430.63207881918515,563.2650469826935L430.87922707196594,562.5316382621227L430.0553995626965,561.9815747135508L429.3139548043532,561.7371000940191L427.74868253674094,560.7591897088996L427.336768782106,560.575829387619L425.7714965144937,560.9425493588611L425.1948172580046,560.8814295501077L424.206224246881,560.2702273592765L422.1466554737067,558.4365759057719L421.40521071536386,557.8864673008525L418.4394316819926,556.541731690745L417.6156041727231,556.3583558220822L415.55603539954836,556.297230381297L413.414083875447,555.4414662616045L412.67263911710415,555.1969594988623L412.1783426115421,555.2580863033596L411.1073668494914,555.808224130782L410.77783584578356,555.5637191878736L410.03639108744073,554.8301970775129L409.78924283465994,554.6468148412412L408.30635331797384,554.4023041284262L407.2353775559236,554.5856872771149L406.65869829943495,555.4414662616045L406.4939327975808,557.8864673008525L406.24678454479954,559.1089226033419L406.3291672957271,559.8423813815466L406.1644017938729,560.575829387619L404.846277779041,561.7982188604084L404.4343640244065,562.5316382621227L403.9400675188449,564.1817929008489L403.3633882623558,565.5874377471857L402.5395607530859,566.8708186654319L398.91471971229885,569.9874668457256L398.2556577048831,570.9651999151392L397.5142129465405,572.6761883505096L396.5256199354162,574.3260167467544L395.3722614224389,574.5704313344952L393.97175465668033,574.2649129213428L392.2417168872139,574.3260167467544L391.41788937794377,575.1203599844755L391.2531238760896,576.4646057534349L390.758827370528,577.5644176687886L388.94640685013474,577.8699169129519L387.381134582522,577.0756152038434L382.9324660324653,572.5539767611683L382.1910212741227,572.0040210523395L379.3900077426051,570.781876374178L379.2252422407514,570.9040921403652L378.9780939879704,569.8652489096307L378.2366492296276,569.559702801231L374.8589564416211,567.2986051290599L374.28227718513267,566.748593303356L370.0807568878565,567.7874995616273L368.51548462024425,567.9097224400814L365.2201745831651,567.6652763914128L363.07822305906393,567.9708337699348L362.41916105164796,567.9708337699348L360.6067405312542,567.2374929963926L360.27720952754635,565.8930075657777L360.1948267766195,564.3040244345007L359.20623376549565,562.9594613122529L358.21764075437204,562.6538737899608L357.6409614978829,562.9594613122529L356.9818994904672,563.5706308030765L356.0756892302702,564.0595610720493L354.592799713585,564.0595610720493L354.0161204570959,564.1817929008489L351.13272417465146,569.7430306837282L350.0617484126012,571.2096302924406L348.9907726505505,571.8818078815178L346.1073763681061,572.5539767611683L345.2835488588364,573.1039266525023L345.0364006060556,573.8371841429177L344.87163510420146,574.6315348030257L344.37733859863965,575.3036682520187L343.7182765912239,575.4869758789828L343.05921458380794,575.4258734078129L342.4001525763922,575.2425655673655L341.74109056897646,575.2425655673655L340.17581830136396,575.6091806079392L339.1872252902401,576.2813015363549L336.46859450964985,579.8250703726209L335.15047049481814,581.1081007825599L333.6675809781327,581.9634372766881L332.10230871052,582.1467218918199L330.4546536919804,581.6579615256869L329.87797443549175,580.9859087387282L329.63082618271073,580.0083623211785L328.971764175295,578.5420090421885L326.66504714933944,576.7701113640308L323.69926811596815,576.8923131123497L320.65110633167,577.5033176080776L317.8500928001529,577.1367157594693L316.53196878532117,576.1590983702624L315.29622752141654,574.875947963958L313.3190414991691,572.4317648845433L312.9895104954612,571.0874152481204L312.5775967408265,570.476335694311L311.4242382278485,570.4152273414685L310.7651762204325,570.781876374178L309.6118177074552,572.0040210523395L308.95275570003923,572.1262339353608L306.81080417593785,569.0708252558024L306.48127317223,568.3986110385924L306.23412491944896,567.8486110373171L306.1517421685221,567.2374929963926L306.069359417595,566.5041417008795L306.31650767037604,564.9151776795611L306.6460386740839,563.6928638136152L306.48127317223,562.9594613122529L302.85643213144294,562.4094024375859L302.03260462217327,562.5316382621227L301.6206908675383,562.4094024375859L300.87924610919526,561.6759812532696L300.5497151054874,561.5537433486284L299.89065309807165,561.8593375524499L299.64350484529086,562.1038115774363L299.72588759621794,562.1649298979585L299.64350484529086,562.3482844140199L299.64350484529086,562.6538737899608L299.4787393434367,562.9594613122529L299.066825588802,563.0205785944321L297.8310843248971,562.5316382621227L297.50155332118925,562.4705203869489L295.4419845480147,562.776109021215L294.94768804245314,562.7149914426531L294.123860533183,562.2260481442206L292.8881192692786,560.8814295501077L292.1466745109358,560.2702273592765L291.5699952544471,560.0868652459149L289.92234023590754,559.720139000581L289.59280923219944,559.720139000581L289.09851272663764,558.5588214355464L288.76898172292977,556.9084813877365L288.60421622107583,554.0355357763638L289.1808954775647,549.9397688533952L288.9337472247837,548.4114091404076L288.6865989720029,547.8000517063773L288.19230246644065,547.0052754331651L287.615623209952,546.2716241233899L286.9565612025365,545.9047942582097L286.2974991951205,545.9047942582097L284.9793751802888,546.3327621611799L284.48507867472676,546.3327621611799L283.57886841453023,545.599100556731L283.0845719089682,544.4374466563855L282.5902754034064,541.5026157291497L281.68406514320964,539.851693326319L280.36594112837815,539.0567841074295L274.26961755978164,538.3841580960625L272.8691107940231,537.8949694745888L271.55098677919136,536.8554266514993L271.2214557754835,536.1216177646477L270.8919247717756,534.6539652393608L270.64477651899483,533.9812756364777L270.0680972625057,533.3085762459214L267.84376298747725,531.6573633973835L267.34946648191567,531.4127342294167L266.9375527272807,531.1681037575327L266.52563897264554,530.86231383264L266.1137252180108,530.4953632290055L266.60802172357285,527.3761640172265L266.4432562217187,526.4587117593103L265.78419421430294,525.541240902462L263.7246254411284,524.0732487243101L262.57126692815086,521.3206340281895L260.67646365683026,519.7301570955602L256.72209161233536,517.0384508729561L255.23920209564972,515.264281999761L254.08584358267194,513.1841305582901L252.27342306227865,508.778775897012L251.94389205857078,507.67736710884304L251.6143610548629,504.2505811578229L251.0376817983738,502.475887399197L250.8729162965201,501.5579132285028L251.0376817983738,500.5175184172617L253.83869532989115,492.80555230651464L253.7563125789643,492.1322175714712L253.83869532989115,490.9079444486008L253.59154707711014,490.29579423650125L252.93248506969462,489.8672836626485L252.4381885641326,489.92849973269324L252.02627480949764,490.112147395181L251.77912655671685,490.2345787139444L251.53197830393583,490.29579423650125L251.2024473002282,490.41822500803687L250.79053354559278,490.35700966786055L250.37861979095806,489.68363490466373L250.37861979095806,489.2551179383812L250.70815079466593,488.2144152131041L250.79053354559278,486.990025135234L250.95529904744694,486.5614799218848L250.8729162965201,486.132930196593L249.7195577835423,485.3370401479374L249.39002677983422,485.03092443584785L249.2252612779805,484.60235855593226L249.2252612779805,483.9901137171664L248.9781130251995,482.88804964010575L248.4014337687106,481.78595544743405L247.57760625944093,480.8675205542717L246.58901324831731,480.37768001903106L245.18850648255852,479.9490646399175L244.85897547885065,479.39798098078893L244.7765927279238,478.6631909511036L244.28229622236177,477.49974572609506L243.70561696587288,477.0710994424539L240.7398379325018,475.9076076454176L240.08077592508607,475.96884490633227L238.84503466118122,476.39750308510736L238.18597265376548,476.3362664859975L237.69167614820344,476.0300820726591L237.19737964264164,474.9277985951185L235.87925562780993,473.94796526743164L235.05542811854025,471.9882255423026L234.31398336019743,471.13080868002174L231.26582157589928,471.9269821021252L229.78293205921364,471.8044949351246L228.95910454994396,470.5796022198572L228.300042542528,468.9871843463691L227.39383228233146,468.86468797230646L226.24047376935368,469.29342359756873L224.67520150174118,469.41591862477077L223.0275464832016,468.6809426891544L222.45086722671272,467.39470141422504L222.038953472078,464.2707949466244L221.29750871373517,463.35195082061404L220.0617674498303,462.55560148764386L215.03641964328472,460.59528651873774L210.09345458766597,460.8403313809549L207.86912031263773,460.5340250576458L203.74998276628867,459.1249843077066L202.6790070042382,458.26728180896254L202.01994499682223,456.9806917460591L201.44326574033335,455.4489799230844L200.70182098199052,454.2848373795043L199.38369696715904,453.91720594360186L196.58268343564168,455.877865489124L195.511707673591,456.1842093412606L195.26455942080997,454.7137361840503L195.84123867729886,453.3044788971043L196.91221443934955,452.1402699579635L198.31272120510812,451.159855421011L199.63084521994006,450.42452764288595L200.78420373291738,449.5053475371135L201.44326574033335,448.15717565105945L201.3608829894065,446.8702386241967L200.4546727292095,445.7671141273024L199.30131421623196,445.46068480901994L198.31272120510812,445.5219708762613L197.65365919769215,445.09296626681225L197.65365919769215,443.37689784377454L197.4065109449116,441.5994566942174L196.2531524319338,440.8026447041514L193.36975614948983,440.18970056904885L192.05163213465812,439.33156146025465L190.4039771161183,437.06352483914657L189.25061860314077,435.9601043284989L187.85011183738197,435.16316854820974L186.8615188262586,434.7340419851397L186.03769131698846,434.0596899085579L185.62577756235373,432.64964012674335L185.7081603132806,431.3621549256856L186.1200740679153,430.0133111566086L186.03769131698846,429.0323018088721L184.71956730215675,428.5417869889606L185.213863807719,427.74468595564116L185.87292581513475,427.25415333808047L186.53198782255072,426.8862494170198L187.10866707903915,426.39570490576L188.50917384479794,423.5136181939664L190.7335081198264,420.56996642519033L191.8044838818771,418.4233972748156L192.38116313836576,417.74873389779304L192.29878038743868,416.9513875382273L192.21639763651183,415.3566397251297L188.8387048485058,413.45511333203655L184.71956730215675,411.9215477202941L182.33046752527457,410.6946458309575L181.1771090122968,409.4676999038088L178.2937127298526,407.44314253505416L176.1517612057512,404.7435448054615L175.0807854437005,404.25268569626286L173.76266142886902,403.88453667626936L172.1973891612563,402.96414652363904L171.45594440291347,402.1050929919842L171.20879615013268,401.30738074653686L171.1264133992056,400.5096495166511L170.79688239549773,399.6505330779723L170.79688239549773,399.22096657552953L170.96164789735167,398.7913945443166L170.96164789735167,398.3618169793097L170.6321168936438,398.11634159852434L170.30258588993593,398.11634159852434L169.8082893843739,398.23907951504975L169.39637562973894,398.30044830370554L168.98446187510422,398.05497247062544L168.32539986768825,396.4593354006229L168.07825161490723,392.8381816806046L167.6663378602725,391.2422928386198L164.5357933250475,390.9967646004982L163.71196581577738,390.7512345256317L163.54720031392367,390.3215524721263L163.4648175629966,389.76909583994546L163.05290380836186,389.2780154522252L162.39384180094612,388.97108646613856L160.99333503518756,388.78692769123643L160.2518902768445,388.6027678784113L158.10993875274312,387.3750092389764L157.78040774903525,386.69972227437995L157.61564224718154,385.4104991360355L157.28611124347344,384.85795926399396L156.13275273049567,384.30540997455904L153.00220819527044,383.99843407391023L151.93123243321975,383.63005914946785L151.272170425804,382.4635108578056L151.272170425804,381.54252189176515L150.94263942209614,380.9899158731332L149.21260165262947,380.8671132469525L148.38877414335957,380.68290842850377L147.31779838130888,379.577657341238L146.57635362296628,379.27063639616705L145.25822960813457,379.27063639616705L144.6815503516459,379.147827195035L143.03389533310633,377.79689490233187L141.71577131827462,377.24422433694775L137.34948551914476,376.1388545005881L136.27850975709407,375.52474358346984L133.14796522186907,372.6382633025858L132.07698945981838,372.024084644864L130.92363094684038,371.8398287211668L129.60550693200867,372.2697575391601L127.79308641161538,371.40989405354924L125.0744556310251,369.3215565817035L121.20246633745728,367.4173633124492L120.21387332633367,366.7416540309026L119.47242856799062,365.6973473401198L119.14289756428275,364.6530057231008L118.64860105872094,362.62565437458795L118.07192180223183,361.64264851502264L117.6600080475971,361.33545279096916L116.50664953461933,360.96681389930893L115.92997027813067,360.65961146843415L115.51805652349572,360.168081231143L114.85899451607975,359.0621095960827L114.44708076144502,358.5705539181689L113.45848775032118,357.9560982893745L109.33935020397234,355.74395631705863L107.8564606872867,352.24107127377624L107.52692968357883,351.07335347473463L107.52692968357883,350.21290111160533L109.00981920026447,348.7377830923285L113.62325325217512,347.20112530442725L115.18852551978762,345.84880168308064L115.51805652349572,344.5578906036952L115.35329102164201,343.57430203812567L114.9413772670066,342.5906811748074L114.69422901422604,341.4840690222919L114.9413772670066,338.47141665683887L114.85899451607975,337.4261393566851L114.52946351237188,336.25784459965314L113.45848775032118,334.35158028364276L112.71704299197859,332.13769912310295L112.05798098456285,331.0306959334862L111.15177072436586,330.1696645205026L109.42173295489943,329.5546265583987L109.00981920026447,329.1855975643225L108.59790544562952,328.7550578397114L108.10360894006772,328.447525573407L106.37357117060105,328.139990062017L105.38497815947721,328.139990062017L103.24302663537605,328.6320453224812L102.25443362425221,328.6935516459681L100.19486485107791,327.89395931519914L98.05291332697652,326.29470874317667L94.75760328989736,322.54227459411516L94.09854128248139,322.23467641782065L93.60424477691981,321.80403345596505L93.10994827135778,321.37338405528953L92.69803451672306,320.81968249939484L92.61565176579597,319.58919640549277L91.13276224911033,318.1125434187777L90.96799674725617,315.5897515049045L90.30893473984042,314.48211381190015L84.29499392217099,308.8817276661093L82.07065964714275,307.8969295541061L78.03390485172076,307.4045175648655L75.8095705766923,306.1734498087517L74.40906381093373,305.9887849846259L73.09093979610202,305.9887849846259L69.13656775160734,305.25011351413366L64.27598544691546,306.0503400612033L62.051651171887215,305.9887849846259L59.82731689685875,304.63453906243603L59.16825488944323,304.44986408439456L58.59157563295412,304.14206974225056L58.26204462924625,303.71115196476694L57.93251362553838,303.03398201386506L56.284858606998796,301.4333330725128L53.89575883011639,301.67959274746215L49.36470752913283,303.2802275344379L49.03517652542496,303.03398201386506L47.881818012446956,302.1721055576653L47.38752150688538,301.86428607285484L46.81084225039626,301.8027217672965L45.82224923927265,301.8027217672965L44.58650797536802,301.67959274746215L44.17459422073307,301.61802803315743L41.703111692923585,301.0639394700994L40.63213593087289,300.63297406029494L38.737332659552294,299.58631591983635L36.924912139159005,298.170186096155L35.359639871546506,296.384527695982L34.700577864130764,294.3524308573293L34.947726116911554,292.01225431413593L35.77155362618123,289.6102860584972L39.72592567067613,283.01918077802054L40.384987678091875,282.2798912204837L43.26838396053631,280.3699658502311L43.68029771517104,279.69221775040035L43.350766711463166,278.8296044791748L41.455963440142796,277.35077418904984L40.96166693458099,276.3648418517664L41.208815187362006,275.3172488001079L42.52693920219372,273.4684545658748L42.691704704047424,272.4823783397784L41.373580689215714,271.80442965237944L38.8197154104796,271.8660620684468L38.07827065213655,271.92769434102604L38.40780165584442,271.49626541920964L38.572567157698586,270.51011574287077L38.98448091233331,269.95539037447963L43.021235707755295,266.8733701420588L45.16318723185668,265.8254009500731L52.742400317138845,261.016533529228L54.307672584751344,260.7082425520683L60.65114440612865,260.0299895341541L64.11121994506175,258.8584198689532L64.77028195247749,258.48843950718674L65.18219570711244,257.9951241402123L65.18219570711244,250.47089567736748L65.2645784580393,250.03911077675605L65.67649221267425,248.92877325504708L72.01996403405155,238.19300746994782L72.26711228683234,237.51415612579626L72.34949503775943,237.08215025055495L73.66761905259114,223.62450026534816L74.16191555815271,222.32773403919464L74.7385948146416,221.524939624127L76.71578083688928,219.6722366083652L80.99968388509205,214.7927783663523L81.57636314158094,213.1866662216229L81.6587458925078,212.38357016350665L81.57636314158094,193.5339675062056L81.82351139436196,192.0500836605695L82.07065964714275,191.61726653068592L82.31780789992354,191.3081065453688L82.56495615270455,191.2462740588528L83.22401816012052,191.18444140915165L83.96546291846312,191.0607756201291L84.62452492587909,190.81344208318092L85.20120418236797,190.44243687867504L87.59030395925015,188.46364303711982L89.97940373613255,186.97943756215125L90.88561399632931,185.92806812690208L92.86280001857676,183.33036320322844L93.76901027877352,182.34068476655068L94.34568953526264,181.53653986589757L95.00475154267838,180.23747743973843L95.4166652973131,179.0002071138615L97.22908581770662,175.1642460785863L97.97053057604944,173.1222631115853L98.05291332697652,172.68909175701765L98.05291332697652,172.2559121823648L98.05291332697652,171.82272438239204L97.8057650741955,171.14198406561957L97.22908581770662,169.7804423774635L97.14670306677954,169.40909868113113L96.98193756492583,168.6663930800181L97.06432031585268,168.04745318443258L97.22908581770662,167.30470301327932L100.68916135663949,159.69010522820793L101.43060611498254,158.88515970145647L101.92490262054434,158.38979423226135L102.3368163751793,158.2659511523832L103.40779213722976,157.89441780059747L104.47876789928091,157.52287827801229L105.2202126576235,157.33710620163595L106.95025042708994,157.52287827801229L107.77407793635984,157.33710620163595L109.50411570582628,156.71785479404411L109.83364670953415,156.71785479404411L110.65747421880405,156.77978070720974L111.15177072436586,156.71785479404411L111.8108327317816,156.47014942420685L112.30512923734341,156.3462957087686L112.71704299197859,156.28436859336603L113.62325325217512,156.47014942420685L113.95278425588322,156.59400245259087L114.69422901422604,156.9036320184964L115.10614276886076,157.02748264315858L115.51805652349572,157.08940769804383L115.92997027813067,157.08940769804383L116.25950128183831,157.02748264315858L116.91856328925451,156.77978070720974L117.33047704388923,156.71785479404411L118.07192180223183,156.84170644868868L118.48383555686678,156.84170644868868L118.89574931150196,156.77978070720974L120.21387332633367,156.16051384711807L120.54340433004154,156.03665841351074L121.36723183931099,155.91280229242022L121.77914559394594,155.91280229242022L122.6853558541427,155.85087397403072L123.34441786155867,155.60315898115368L124.00347986897441,155.29351137044046L125.0744556310251,154.98385945836515L125.81590038936793,154.79806624566993L126.72211064956468,154.73613483043732L129.5231241810818,154.85999748872484L130.26456893942463,154.6742032430128L131.1707791996214,154.42647517108333L131.4179274524024,154.42647517108333L136.5256580098751,152.56842670666242L139.57381979417346,151.82516381639005L139.90335079788133,151.7632241186319L142.21006782383643,151.7632241186319L143.77534009144892,151.51546359816598L144.9286986044267,151.20575905520116L145.25822960813457,151.14381762747212L148.141625890579,151.26770030986586L148.6359223961406,151.14381762747212L149.29498440355655,151.01993425275032L150.7778739202422,150.27661945870273L153.82603570454012,149.47133360366377L154.64986321381025,149.40938732385177L154.89701146659104,149.5952256428186L157.9451732508894,153.373600103507L158.27470425459728,153.99294441225925L158.439469756451,154.3026101015663L158.52185250737784,154.6742032430128L158.93376626201302,165.69532741221553L159.0161490129401,166.06673194089444L159.2632972657209,166.3762310563916L159.67521102035585,166.87142083760273L160.2518902768445,167.30470301327932L162.723372804654,168.7901790336523L163.79434856670468,169.28531610065318L165.68915183802505,169.84233240376864L165.93630009080607,169.9042222616149L166.3482138454408,170.27555787190317L166.5953620982218,170.52311157817883L167.00727585285676,171.0800975737509L171.20879615013268,177.94847507151303L172.03262365940236,179.0002071138615L173.0212166705262,180.0518911241826L178.3760954807799,182.093258544705L191.5573356290961,197.67598148092338L204.7385757774125,213.1866662216229L207.78673756171065,215.22517498299328L209.5167753311773,216.0281768258617L213.55353012659907,216.33701661699956L214.2949748849419,216.27524897289004L241.2341344380634,207.07010669355236L259.3583396419988,206.63756375865978L262.57126692815086,207.19368895531045L272.5395797903152,207.19368895531045L278.22398960427654,207.87338001045703L278.6359033589115,207.87338001045703L280.03641012467006,207.44085156771314L280.448323879305,207.44085156771314L289.34566097941865,208.73841351302826L296.2658120572846,208.367688684869L297.41917057026217,208.18232412474345L298.1606153286052,207.87338001045703L305.2455319083251,222.75999706354185L308.62322469633136,226.58828049346073L336.46859450964985,226.83524608603523L364.31396432296833,227.02046865858892L364.3963470738952,227.02046865858892L363.49013681369865,225.29167054851018L363.24298856091764,222.75999706354185L363.3253713118445,219.7957545121684L364.72587807760306,217.01645034165392L369.2569293785871,212.56890239181723L374.5294254379137,208.49126426335363L375.92993220367225,207.31727057999024L384.497738300078,202.74432523051826L392.90077889462964,199.65400054781037L408.96541532539004,196.1305389660123L414.89697339213217,190.44243687867504L418.1099006782847,185.24774492955544L418.27466618013887,175.10237048396766L420.33423495331317,173.43166619218687L424.206224246881,171.0800975737509L442.8247259563782,161.98094600384638L446.03765324253027,160.06160880108848L462.431820676999,170.6468874215077L478.90837086239435,181.2272459165589L497.3621070700369,197.92324290400575L498.5154655830147,198.726824683328L499.5040585941383,199.03588733598394L500.4926516052619,198.47957165703656L501.3164791145323,197.7377970790642L502.63460312936377,197.181450876707L503.54081338956075,196.99599923204323L511.4495574785501,196.74872810759962L526.3608353963332,195.94507906551007L531.3038004519522,193.90492382327636L546.2974611206623,179.0002071138615L561.291121789372,164.02393148074418L568.9527176255806,154.4884074474312L570.9299036478283,152.50648908284734L575.213806696031,145.69229245742633L579.8272407479417,134.04131356436994L580.7334510081387,132.67749349195628L597.210001193534,118.66233368563633L613.6041686280028,104.57584580320622L614.7575271409805,102.34099583316265L615.087058144688,100.60261327137255L610.1440930890699,91.1631308617815L609.0731173270187,86.31750290014861L608.825969074238,78.9225935706171L609.8145620853616,67.35873396588966L609.4850310816541,60.081261128684446L609.4026483307271,59.27248802951317L609.0731173270187,58.15259365686313L608.825969074238,57.717062007203594L590.454615617522,36.98698382640532L613.6865513789294,36.86241188293593L636.8361043894101,36.800125608694316L636.9184871403377,35.05602798539985L636.9184871403377,34.121624806959176L636.7537216384831,33.31177188959134L635.9298941292136,30.819701879523905L635.353214872725,27.51720814699661L635.353214872725,26.58243614985554L635.4355976236516,25.709940818218L635.6827458764328,23.964829865276215L635.6827458764328,23.029882925590186L635.6827458764328,22.593558558111L635.6003631255057,22.21955823699136L635.6003631255057,21.845550521986183L635.847511378287,21.533871775576813L669.130142752786,21.970220582074944L668.7182289981506,27.828788607958018L664.6814742027291,41.657850563926445L664.7638569536557,49.87584136662372L663.7752639425321,59.334702520515634L663.5281156897508,60.143473072851975L662.6219054295543,62.13415198890539L661.7980779202849,63.31602293980427L660.8918676600874,64.43562521900787L660.6447194073071,64.87100906231046L660.3151884035992,65.55516440880444L660.3151884035992,66.6124491298666L663.7752639425321,92.96441839194358L667.2353394814654,119.34470024619122L666.9881912286837,120.70936769305229L666.7410429759034,121.57774690089855L664.8462397045828,124.86486249140057L664.4343259499483,125.91911334804547L664.2695604480937,126.78728101546176L665.0933879573636,127.34537025952204L680.4165796297816,133.04945294164474L681.1580243881244,133.35941426642955L681.7347036446131,133.8553431573015L687.2543479567207,140.61124660701125L702.4127741272841,153.12585755003602L717.4888175469209,165.57152454695313L718.5597933089721,166.80952270728642L721.6903378441975,174.66923664025876L722.019868847905,175.84486659108813L722.102251598832,177.76287030766935L722.019868847905,179.1858018978827L721.2784240895626,183.88703874227224L721.5255723423438,185.98991470302497L722.019868847905,187.41234058835823L722.5141653534674,189.02019574414874L722.5141653534674,189.51489812726993L722.4317826025404,189.9477541226047Z"
}

function getSchoolPositions() {
  //
  return [574, 484, 458, 384, 544, 263, 386, 504, 565, 167, 681, 225, 617, 262, 787, 528, 682, 194, 624, 438, 634, 343, 143, 361, 588, 247, 117, 323, 280, 498, 661, 560, 557, 291, 452, 325, 526, 350, 378, 354, 508, 464, 595, 479, 431, 462, 434, 338, 150, 161, 224, 438, 752, 402, 582, 541, 158, 370, 560, 512, 719, 360, 54, 283, 90, 255, 193, 245, 274, 311, 212, 257, 57, 301, 717, 269, 401, 463, 298, 239, 667, 280, 665, 35, 582, 275, 640, 32, 716, 429, 609, 472, 208, 333, 659, 93, 133, 285, 728, 556, 622, 343, 146, 292, 637, 272, 582, 526, 458, 182, 472, 548, 696, 557, 371, 480, 684, 280, 462, 242, 500, 422, 380, 386, 618, 374, 332, 340, 420, 285, 778, 459, 557, 518, 505, 349, 652, 539, 361, 358, 552, 387, 714, 398, 570, 376, 244, 460, 387, 228, 414, 370, 38, 291, 327, 556, 244, 305, 591, 228, 392, 496, 154, 267, 467, 557, 128, 258, 691, 452, 758, 484, 670, 523, 254, 447, 321, 277, 557, 244, 639, 615, 691, 605, 188, 240, 762, 489, 448, 313, 310, 501, 243, 469, 523, 450, 722, 515, 677, 236, 482, 290, 459, 239, 438, 245, 648, 565, 598, 320, 517, 288, 548, 297, 85, 220, 458, 415, 704, 393, 730, 256, 498, 418, 519, 425, 736, 459, 277, 381, 279, 296, 600, 328, 444, 516, 282, 531, 480, 471, 400, 407, 309, 427, 486, 594, 555, 297, 564, 264, 552, 307, 551, 235, 618, 599, 560, 181, 248, 301, 545, 279, 538, 363, 575, 275, 318, 442, 167, 354, 607, 439, 618, 442, 176, 326, 500, 226, 318, 312, 719, 584, 452, 550, 254, 370, 689, 240, 581, 614, 604, 461, 439, 366, 486, 547, 522, 553, 648, 595, 777, 503, 681, 574, 819, 529, 582, 546, 628, 422, 327, 528, 414, 344, 398, 421, 78, 225, 729, 431, 561, 199, 681, 521, 650, 509, 108, 215, 398, 273, 436, 272, 505, 324, 774, 426, 616, 291, 516, 334, 278, 386, 555, 293, 392, 345, 206, 241, 383, 421, 253, 395, 378, 245, 190, 349, 474, 239, 529, 323, 159, 377, 627, 232, 366, 267, 553, 526, 221, 333, 391, 445, 395, 321, 688, 559, 668, 441, 736, 458, 120, 259, 584, 569, 621, 369, 535, 435, 99, 307, 770, 515, 640, 215, 615, 455, 286, 294, 573, 297, 768, 441, 712, 370, 628, 478, 375, 312, 485, 256, 487, 540, 683, 426, 563, 291, 544, 289, 557, 210, 621, 476, 283, 379, 558, 372, 427, 225, 423, 521, 429, 300, 488, 483, 251, 290, 152, 236, 570, 494, 720, 265, 633, 189, 636, 243, 150, 374, 144, 222, 173, 401, 289, 424, 664, 372, 538, 211, 724, 385, 585, 317, 174, 203, 211, 459, 602, 540, 286, 268, 579, 389, 617, 399, 639, 429, 647, 36, 530, 201, 468, 476, 435, 234, 510, 298, 246, 303, 646, 235, 564, 290, 169, 219, 639, 87, 578, 386, 503, 308, 506, 346, 132, 237, 628, 288, 341, 235, 656, 55, 293, 372, 415, 395, 357, 408, 561, 462, 775, 473, 240, 457, 174, 181, 595, 635, 458, 593, 232, 452, 596, 443, 353, 354, 567, 358, 676, 156, 107, 289, 625, 140, 209, 457, 686, 161, 510, 197, 113, 268, 775, 432, 798, 532, 444, 349, 766, 413, 307, 279, 654, 439, 513, 301, 626, 543, 453, 372, 259, 387, 344, 338, 611, 534, 631, 236, 592, 168, 510, 437, 535, 480, 606, 360, 163, 278, 773, 450, 494, 333, 812, 532, 548, 502, 132, 330, 395, 452]
}

var sudan = Raphael(10, 50, 1000, 700);

sudan.path(getSudan())
var school_element_array = [];

function changeToChartView(){
  $(".backtohome").click(function(){
    $(".charts").hide()
    $('body>svg').show()
  })
  $('.loading').show()
  $('svg:not(#chart1 svg, #chart2 svg, #chart3 svg, #chart4 svg)').hide();
  nv.addGraph(function() {
    var chart = nv.models.discreteBarChart()
    .x(function(d) { return d.label })
    .y(function(d) { return d.value })
    .staggerLabels(false)
    .tooltips(false)
    .showValues(false)

    d3.select('#chart1 svg')
    .datum(generateGradeData())
    .transition().duration(500)
    .call(chart);
    nv.utils.windowResize(chart.update);
    return chart;
  });

  var charts = [null, null, null]

  nv.addGraph(function() {
    var chart = nv.models.cumulativeLineChart()
    .x(function(d) { return d[0] })
    .y(function(d) { return d[1]/100 }) 
    .color(d3.scale.category10().range());

    chart.xAxis
    .tickFormat(function(d) {
      return d3.time.format('%x')(new Date(d))
    });

    chart.yAxis
    .tickFormat(d3.format(',.1%'));

    d3.select('#chart2 svg')
    .datum(generateAttendanceData())
    .transition().duration(500)
    .call(chart);

    nv.utils.windowResize(chart.update);
    return chart;
  });

  nv.addGraph(function() {
    var chart = nv.models.scatterChart()
    .showDistX(true)
    .showDistY(true)
    .color(d3.scale.category10().range());

    chart.xAxis.tickFormat(d3.format('.02f'));
    chart.yAxis.tickFormat(d3.format('.02f'));

    d3.select('#chart3 svg')
    .datum(getTravelDistanceData())
    .transition().duration(500)
    .call(chart);

    return chart;
  });

  setTimeout(function(){
    $('.loading').hide()
    $('.charts').show()
  },1000)
  setTimeout(function(){
    $('.charts svg text, .nv-legend-symbol').hide();
    $('g.nv-legendWrap').css('display', 'none');
    $('.charts svg').on('click', function(){
      $('.charts').hide();
      var id = $(this).parent().attr('id')
      setSingleChartView(id);
    })
  },300)
}

function getSchoolNames(){
  var schools_array = [
  {
    "schools": "Bibendum Donec Felis Foundation"
  },
  {
    "schools": "Ante Iaculis Nec Ltd"
  },
  {
    "schools": "Scelerisque Limited"
  },
  {
    "schools": "Venenatis Vel Faucibus LLP"
  },
  {
    "schools": "Velit Aliquam Industries"
  },
  {
    "schools": "Suspendisse Non Limited"
  },
  {
    "schools": "Vel Arcu PC"
  },
  {
    "schools": "Gravida Incorporated"
  },
  {
    "schools": "Tincidunt Nibh Incorporated"
  },
  {
    "schools": "Condimentum Donec Inc."
  },
  {
    "schools": "Sem Magna Foundation"
  },
  {
    "schools": "Bibendum Inc."
  },
  {
    "schools": "Tellus Id Corp."
  },
  {
    "schools": "Tincidunt Foundation"
  },
  {
    "schools": "Egestas A LLP"
  },
  {
    "schools": "Molestie Tellus LLC"
  },
  {
    "schools": "Dolor Foundation"
  },
  {
    "schools": "Tempus Eu Ligula Associates"
  },
  {
    "schools": "Ipsum Foundation"
  },
  {
    "schools": "Urna LLP"
  },
  {
    "schools": "Ligula Donec Corp."
  },
  {
    "schools": "Cursus Institute"
  },
  {
    "schools": "Tellus Eu Limited"
  },
  {
    "schools": "Urna Convallis Corporation"
  },
  {
    "schools": "Cubilia Curae; Inc."
  },
  {
    "schools": "Mauris Erat Eget Foundation"
  },
  {
    "schools": "Pede Foundation"
  },
  {
    "schools": "Magna Duis Dignissim Consulting"
  },
  {
    "schools": "Arcu Vestibulum Foundation"
  },
  {
    "schools": "Morbi Accumsan Corp."
  },
  {
    "schools": "Orci Ut Sagittis Associates"
  },
  {
    "schools": "Diam Proin Dolor Foundation"
  },
  {
    "schools": "Donec Egestas Duis Corporation"
  },
  {
    "schools": "Et Institute"
  },
  {
    "schools": "Posuere Cubilia Company"
  },
  {
    "schools": "Dolor Fusce Institute"
  },
  {
    "schools": "Quisque Nonummy PC"
  },
  {
    "schools": "Et Corporation"
  },
  {
    "schools": "Non Institute"
  },
  {
    "schools": "Ut Dolor Dapibus PC"
  },
  {
    "schools": "Sed Congue Elit Corp."
  },
  {
    "schools": "Vivamus Rhoncus Industries"
  },
  {
    "schools": "Facilisis Non Corporation"
  },
  {
    "schools": "Nisl Nulla Company"
  },
  {
    "schools": "Nonummy Incorporated"
  },
  {
    "schools": "Metus Inc."
  },
  {
    "schools": "Dolor LLC"
  },
  {
    "schools": "Luctus Et Ultrices Inc."
  },
  {
    "schools": "Egestas Duis Ac Institute"
  },
  {
    "schools": "Vestibulum Massa Foundation"
  },
  {
    "schools": "Iaculis LLP"
  },
  {
    "schools": "Lectus Rutrum Corporation"
  },
  {
    "schools": "Egestas Limited"
  },
  {
    "schools": "Nullam Feugiat Incorporated"
  },
  {
    "schools": "Commodo Auctor LLC"
  },
  {
    "schools": "Adipiscing Elit Curabitur Corp."
  },
  {
    "schools": "Aenean Eget Metus Inc."
  },
  {
    "schools": "Venenatis A LLP"
  },
  {
    "schools": "Sociis Natoque Institute"
  },
  {
    "schools": "Cras Lorem Institute"
  },
  {
    "schools": "Sagittis PC"
  },
  {
    "schools": "Pellentesque Habitant Corp."
  },
  {
    "schools": "Mollis Integer Tincidunt Consulting"
  },
  {
    "schools": "Dui LLC"
  },
  {
    "schools": "Erat In Company"
  },
  {
    "schools": "Augue Eu Tellus Company"
  },
  {
    "schools": "Nulla Corp."
  },
  {
    "schools": "Pede Industries"
  },
  {
    "schools": "Dapibus Rutrum Justo Limited"
  },
  {
    "schools": "Fringilla Porttitor Institute"
  },
  {
    "schools": "At Incorporated"
  },
  {
    "schools": "Non Massa Non Corp."
  },
  {
    "schools": "Rhoncus Nullam Velit Inc."
  },
  {
    "schools": "Suspendisse Tristique Neque Foundation"
  },
  {
    "schools": "Eu Limited"
  },
  {
    "schools": "Felis Inc."
  },
  {
    "schools": "Dictum Associates"
  },
  {
    "schools": "Justo Praesent Institute"
  },
  {
    "schools": "Eu Arcu Incorporated"
  },
  {
    "schools": "Sodales Elit Erat Inc."
  },
  {
    "schools": "Libero Mauris Aliquam Incorporated"
  },
  {
    "schools": "Nunc Quisque Ornare Industries"
  },
  {
    "schools": "Aliquam Inc."
  },
  {
    "schools": "Elit Industries"
  },
  {
    "schools": "Quam Elementum At Corp."
  },
  {
    "schools": "Ligula Aenean Incorporated"
  },
  {
    "schools": "Cras Dolor Dolor Limited"
  },
  {
    "schools": "Turpis Egestas Corp."
  },
  {
    "schools": "Urna LLP"
  },
  {
    "schools": "Orci Tincidunt Inc."
  },
  {
    "schools": "Mauris Integer Sem Incorporated"
  },
  {
    "schools": "Ornare Corporation"
  },
  {
    "schools": "Interdum Company"
  },
  {
    "schools": "Pharetra Associates"
  },
  {
    "schools": "Sed Industries"
  },
  {
    "schools": "Erat Inc."
  },
  {
    "schools": "Integer Id Associates"
  },
  {
    "schools": "Ante Industries"
  },
  {
    "schools": "Dui Quis Incorporated"
  },
  {
    "schools": "Egestas Aliquam Nec Limited"
  }
  ]

  var betterschoolsarray = []
  for(var i in schools_array){
    betterschoolsarray.push(schools_array[i].schools)
  }
  return betterschoolsarray
}


function setSingleChartView(id){
  $('.back').click(function(){
    $("#bigchart svg").remove()
    $("#bigchart").append("<svg></svg>")
    $("#bigchart svg, #bigchart").hide()
    changeToChartView()
  })
  $('#bigchart svg, #bigchart').show()
  if (id == "chart1"){
    console.log('called')
    nv.addGraph(function() {
      var chart = nv.models.discreteBarChart()
      .x(function(d) { return d.label })
      .y(function(d) { return d.value })
      .staggerLabels(false)
      .tooltips(false)
      .showValues(false)

      d3.select('#bigchart svg')
      .datum(generateGradeData())
      .transition().duration(500)
      .call(chart)
      .attr('width', 800)
      .attr('height',800);
      nv.utils.windowResize(chart.update);
      return chart;
    });
  } else if (id == "chart2") {
    nv.addGraph(function() {
      var chart = nv.models.cumulativeLineChart()
      .x(function(d) { return d[0] })
      .y(function(d) { return d[1]/100 }) 
      .color(d3.scale.category10().range());

      chart.xAxis
      .tickFormat(function(d) {
        return d3.time.format('%x')(new Date(d))
      });

      chart.yAxis
      .tickFormat(d3.format(',.1%'));

      d3.select('#bigchart svg')
      .datum(generateAttendanceData())
      .transition().duration(500)
      .call(chart);

      nv.utils.windowResize(chart.update);
      return chart;
    });
  } else if (id == "chart3") {
    nv.addGraph(function() {
      var chart = nv.models.scatterChart()
      .showDistX(true)
      .showDistY(true)
      .color(d3.scale.category10().range());

      chart.xAxis.tickFormat(d3.format('.02f')).axisLabel("Distance from school (km)");
      chart.yAxis.tickFormat(d3.format('.02f')).axisLabel("Average test score (%)");

      d3.select('#bigchart svg')
      .datum(getTravelDistanceData())
      .transition().duration(500)
      .call(chart);
      return chart;
    });
  }
}

function resizeChart(){
  d3.select("#chart1 svg")
  .transition()
  .attr('height', 500)
  .attr('width', 500)
}

function getTravelDistanceData() {
  var data = [],
  shapes = ['circle', 'cross', 'triangle-up', 'triangle-down', 'diamond', 'square'],
  random = d3.random.normal();

  for (i = 0; i < 5; i++) {
    var grade = i + 1;
    data.push({
      key: 'Grade ' + grade,
      values: []
    });

    for (j = 0; j < 50; j++) {
      data[i].values.push({
        x: _.random(50)/10
        , y: _.random(50)/10
        , size: _.random(50)
      //, shape: shapes[j % 6]
    });
    }
  }
  data.push({
    key: "Grade " + 6,
    values: []
  })
  var x = 0;
  var y = 0;
  for (j = 0; j < 20; j++) {
    x += _.random(50)/100;
    y += _.random(50)/100;
    data[5].values.push({
      x: x
      , y: y
      , size: _.random(50)
      //, shape: shapes[j % 6]
    });
  }


  return data;
}


function generateAttendanceData(){
  return [ 
  { 
    "key" : "Grades 1-3" , 
    "values" : [ [ 1025409600000 , 23.041422681023] , [ 1028088000000 , 19.854291255832] , [ 1030766400000 , 21.02286281168] , [ 1033358400000 , 22.093608385173] , [ 1036040400000 , 25.108079299458] , [ 1038632400000 , 26.982389242348] , [ 1041310800000 , 19.828984957662] , [ 1043989200000 , 19.914055036294] , [ 1046408400000 , 19.436150539916] , [ 1049086800000 , 21.558650338602] , [ 1051675200000 , 24.395594061773] , [ 1054353600000 , 24.747089309384] , [ 1056945600000 , 23.491755498807] , [ 1059624000000 , 23.376634878164] , [ 1062302400000 , 24.581223154533] , [ 1064894400000 , 24.922476843538] , [ 1067576400000 , 27.357712939042] , [ 1070168400000 , 26.503020572593] , [ 1072846800000 , 26.658901244878] , [ 1075525200000 , 27.065704156445] , [ 1078030800000 , 28.735320452588] , [ 1080709200000 , 31.572277846319] , [ 1083297600000 , 30.932161503638] , [ 1085976000000 , 31.627029785554] , [ 1088568000000 , 28.728743674232] , [ 1091246400000 , 26.858365172675] , [ 1093924800000 , 27.279922830032] , [ 1096516800000 , 34.408301211324] , [ 1099195200000 , 34.794362930439] , [ 1101790800000 , 35.609978198951] , [ 1104469200000 , 33.574394968037] , [ 1107147600000 , 31.979405070598] , [ 1109566800000 , 31.19009040297] , [ 1112245200000 , 31.083933968994] , [ 1114833600000 , 29.668971113185] , [ 1117512000000 , 31.490638014379] , [ 1120104000000 , 31.818617451128] , [ 1122782400000 , 32.960314008183] , [ 1125460800000 , 31.313383196209] , [ 1128052800000 , 33.125486081852] , [ 1130734800000 , 32.791805509149] , [ 1133326800000 , 33.506038030366] , [ 1136005200000 , 26.96501697216] , [ 1138683600000 , 27.38478809681] , [ 1141102800000 , 27.371377218209] , [ 1143781200000 , 26.309915460827] , [ 1146369600000 , 26.425199957518] , [ 1149048000000 , 26.823411519396] , [ 1151640000000 , 23.850443591587] , [ 1154318400000 , 23.158355444054] , [ 1156996800000 , 22.998689393695] , [ 1159588800000 , 27.9771285113] , [ 1162270800000 , 29.073672469719] , [ 1164862800000 , 28.587640408904] , [ 1167541200000 , 22.788453687637] , [ 1170219600000 , 22.429199073597] , [ 1172638800000 , 22.324103271052] , [ 1175313600000 , 17.558388444187] , [ 1177905600000 , 16.769518096208] , [ 1180584000000 , 16.214738201301] , [ 1183176000000 , 18.729632971229] , [ 1185854400000 , 18.814523318847] , [ 1188532800000 , 19.789986451358] , [ 1191124800000 , 17.070049054933] , [ 1193803200000 , 16.121349575716] , [ 1196398800000 , 15.141659430091] , [ 1199077200000 , 17.175388025297] , [ 1201755600000 , 17.286592443522] , [ 1204261200000 , 16.323141626568] , [ 1206936000000 , 19.231263773952] , [ 1209528000000 , 18.446256391095] , [ 1212206400000 , 17.822632399764] , [ 1214798400000 , 15.53936647598] , [ 1217476800000 , 15.255131790217] , [ 1220155200000 , 15.660963922592] , [ 1222747200000 , 13.254482273698] , [ 1225425600000 , 11.920796202299] , [ 1228021200000 , 12.122809090924] , [ 1230699600000 , 15.691026271393] , [ 1233378000000 , 14.720881635107] , [ 1235797200000 , 15.387939360044] , [ 1238472000000 , 13.765436672228] , [ 1241064000000 , 14.631445864799] , [ 1243742400000 , 14.292446536221] , [ 1246334400000 , 16.170071367017] , [ 1249012800000 , 15.948135554337] , [ 1251691200000 , 16.612872685134] , [ 1254283200000 , 18.778338719091] , [ 1256961600000 , 16.756026065421] , [ 1259557200000 , 19.385804443146] , [ 1262235600000 , 22.950590240168] , [ 1264914000000 , 23.61159018141] , [ 1267333200000 , 25.708586989581] , [ 1270008000000 , 26.883915999885] , [ 1272600000000 , 25.893486687065] , [ 1275278400000 , 24.678914263176] , [ 1277870400000 , 25.937275793024] , [ 1280548800000 , 29.461381693838] , [ 1283227200000 , 27.357322961861] , [ 1285819200000 , 29.057235285673] , [ 1288497600000 , 28.549434189386] , [ 1291093200000 , 28.506352379724] , [ 1293771600000 , 29.449241421598] , [ 1296450000000 , 25.796838168807] , [ 1298869200000 , 28.740145449188] , [ 1301544000000 , 22.091744141872] , [ 1304136000000 , 25.07966254541] , [ 1306814400000 , 23.674906973064] , [ 1309406400000 , 23.418002742929] , [ 1312084800000 , 23.24364413887] , [ 1314763200000 , 31.591854066817] , [ 1317355200000 , 31.497112374114] , [ 1320033600000 , 26.67238082043] , [ 1322629200000 , 27.297080015495] , [ 1325307600000 , 20.174315530051] , [ 1327986000000 , 19.631084213898] , [ 1330491600000 , 20.366462219461] , [ 1333166400000 , 19.284784434185] , [ 1335758400000 , 19.157810257624]]
  }, 

  { 
    "key" : "Grades 4-7" , 
    "values" : [ [ 1025409600000 , 7.9356392949025] , [ 1028088000000 , 7.4514668527298] , [ 1030766400000 , 7.9085410566608] , [ 1033358400000 , 5.8996782364764] , [ 1036040400000 , 6.0591869346923] , [ 1038632400000 , 5.9667815800451] , [ 1041310800000 , 8.65528925664] , [ 1043989200000 , 8.7690763386254] , [ 1046408400000 , 8.6386160387453] , [ 1049086800000 , 5.9895557449743] , [ 1051675200000 , 6.3840324338159] , [ 1054353600000 , 6.5196511461441] , [ 1056945600000 , 7.0738618553114] , [ 1059624000000 , 6.5745957367133] , [ 1062302400000 , 6.4658359184444] , [ 1064894400000 , 2.7622758754954] , [ 1067576400000 , 2.9794782986241] , [ 1070168400000 , 2.8735432712019] , [ 1072846800000 , 1.6344817513645] , [ 1075525200000 , 1.5869248754883] , [ 1078030800000 , 1.7172279157246] , [ 1080709200000 , 1.9649927409867] , [ 1083297600000 , 2.0261695079196] , [ 1085976000000 , 2.0541261923929] , [ 1088568000000 , 3.9466318927569] , [ 1091246400000 , 3.7826770946089] , [ 1093924800000 , 3.9543021004028] , [ 1096516800000 , 3.8309891064711] , [ 1099195200000 , 3.6340958946166] , [ 1101790800000 , 3.5289755762525] , [ 1104469200000 , 5.702378559857] , [ 1107147600000 , 5.6539569019223] , [ 1109566800000 , 5.5449506370392] , [ 1112245200000 , 4.7579993280677] , [ 1114833600000 , 4.4816139372906] , [ 1117512000000 , 4.5965558568606] , [ 1120104000000 , 4.3747066116976] , [ 1122782400000 , 4.4588822917087] , [ 1125460800000 , 4.4460351848286] , [ 1128052800000 , 3.7989113035136] , [ 1130734800000 , 3.7743883140088] , [ 1133326800000 , 3.7727852823828] , [ 1136005200000 , 7.2968111448895] , [ 1138683600000 , 7.2800122043237] , [ 1141102800000 , 7.1187787503354] , [ 1143781200000 , 8.351887016482] , [ 1146369600000 , 8.4156698763993] , [ 1149048000000 , 8.1673298604231] , [ 1151640000000 , 5.5132447126042] , [ 1154318400000 , 6.1152537710599] , [ 1156996800000 , 6.076765091942] , [ 1159588800000 , 4.6304473798646] , [ 1162270800000 , 4.6301068469402] , [ 1164862800000 , 4.3466656309389] , [ 1167541200000 , 6.830104897003] , [ 1170219600000 , 7.241633040029] , [ 1172638800000 , 7.1432372054153] , [ 1175313600000 , 10.608942063374] , [ 1177905600000 , 10.914964549494] , [ 1180584000000 , 10.933223880565] , [ 1183176000000 , 8.3457524851265] , [ 1185854400000 , 8.1078413081882] , [ 1188532800000 , 8.2697185922474] , [ 1191124800000 , 8.4742436475968] , [ 1193803200000 , 8.4994601179319] , [ 1196398800000 , 8.7387319683243] , [ 1199077200000 , 6.8829183612895] , [ 1201755600000 , 6.984133637885] , [ 1204261200000 , 7.0860136043287] , [ 1206936000000 , 4.3961787956053] , [ 1209528000000 , 3.8699674365231] , [ 1212206400000 , 3.6928925238305] , [ 1214798400000 , 6.7571718894253] , [ 1217476800000 , 6.4367313362344] , [ 1220155200000 , 6.4048441521454] , [ 1222747200000 , 5.4643833239669] , [ 1225425600000 , 5.3150786833374] , [ 1228021200000 , 5.3011272612576] , [ 1230699600000 , 4.1203601430809] , [ 1233378000000 , 4.0881783200525] , [ 1235797200000 , 4.1928665957189] , [ 1238472000000 , 7.0249415663205] , [ 1241064000000 , 7.006530880769] , [ 1243742400000 , 6.994835633224] , [ 1246334400000 , 6.1220222336254] , [ 1249012800000 , 6.1177436137653] , [ 1251691200000 , 6.1413396231981] , [ 1254283200000 , 4.8046006145874] , [ 1256961600000 , 4.6647600660544] , [ 1259557200000 , 4.544865006255] , [ 1262235600000 , 6.0488249316539] , [ 1264914000000 , 6.3188669540206] , [ 1267333200000 , 6.5873958262306] , [ 1270008000000 , 6.2281189839578] , [ 1272600000000 , 5.8948915746059] , [ 1275278400000 , 5.5967320482214] , [ 1277870400000 , 0.99784432084837] , [ 1280548800000 , 1.0950794175359] , [ 1283227200000 , 0.94479734407491] , [ 1285819200000 , 1.222093988688] , [ 1288497600000 , 1.335093106856] , [ 1291093200000 , 1.3302565104985] , [ 1293771600000 , 1.340824670897] , [ 1296450000000 , 0] , [ 1298869200000 , 0] , [ 1301544000000 , 0] , [ 1304136000000 , 0] , [ 1306814400000 , 0] , [ 1309406400000 , 0] , [ 1312084800000 , 0] , [ 1314763200000 , 0] , [ 1317355200000 , 4.4583692315] , [ 1320033600000 , 3.6493043348059] , [ 1322629200000 , 3.8610064091761] , [ 1325307600000 , 5.5144800685202] , [ 1327986000000 , 5.1750695220791] , [ 1330491600000 , 5.6710066952691] , [ 1333166400000 , 5.5611890039181] , [ 1335758400000 , 5.5979368839939]]
  }, 

  { 
    "key" : "Grade 8" , 
    "values" : [ [ 1025409600000 , 7.9149900245423] , [ 1028088000000 , 7.0899888751059] , [ 1030766400000 , 7.5996132380614] , [ 1033358400000 , 8.2741174301034] , [ 1036040400000 , 9.3564460833513] , [ 1038632400000 , 9.7066786059904] , [ 1041310800000 , 10.213363052343] , [ 1043989200000 , 10.285809585273] , [ 1046408400000 , 10.222053149228] , [ 1049086800000 , 8.6188592137975] , [ 1051675200000 , 9.3335447543566] , [ 1054353600000 , 8.9312402186628] , [ 1056945600000 , 8.1895089343658] , [ 1059624000000 , 8.260622135079] , [ 1062302400000 , 7.7700786851364] , [ 1064894400000 , 7.9907428771318] , [ 1067576400000 , 8.7769091865606] , [ 1070168400000 , 8.4855077060661] , [ 1072846800000 , 9.6277203033655] , [ 1075525200000 , 9.9685913452624] , [ 1078030800000 , 10.615085181759] , [ 1080709200000 , 9.2902488079646] , [ 1083297600000 , 8.8610439830061] , [ 1085976000000 , 9.1075344931229] , [ 1088568000000 , 9.9156737639203] , [ 1091246400000 , 9.7826003238782] , [ 1093924800000 , 10.55403610555] , [ 1096516800000 , 10.926900264097] , [ 1099195200000 , 10.903144818736] , [ 1101790800000 , 10.862890389067] , [ 1104469200000 , 10.64604998964] , [ 1107147600000 , 10.042790814087] , [ 1109566800000 , 9.7173391591038] , [ 1112245200000 , 9.6122415755443] , [ 1114833600000 , 9.4337921146562] , [ 1117512000000 , 9.814827171183] , [ 1120104000000 , 12.059260396788] , [ 1122782400000 , 12.139649903873] , [ 1125460800000 , 12.281290663822] , [ 1128052800000 , 8.8037085409056] , [ 1130734800000 , 8.6300618239176] , [ 1133326800000 , 9.1225708491432] , [ 1136005200000 , 12.988124170836] , [ 1138683600000 , 13.356778764353] , [ 1141102800000 , 13.611196863271] , [ 1143781200000 , 6.8959030061189] , [ 1146369600000 , 6.9939633271353] , [ 1149048000000 , 6.7241510257676] , [ 1151640000000 , 5.5611293669517] , [ 1154318400000 , 5.6086488714041] , [ 1156996800000 , 5.4962849907033] , [ 1159588800000 , 6.9193153169278] , [ 1162270800000 , 7.0016334389778] , [ 1164862800000 , 6.7865422443273] , [ 1167541200000 , 9.0006454225383] , [ 1170219600000 , 9.2233916171431] , [ 1172638800000 , 8.8929316009479] , [ 1175313600000 , 10.345937520404] , [ 1177905600000 , 10.075914677026] , [ 1180584000000 , 10.089006188111] , [ 1183176000000 , 10.598330295008] , [ 1185854400000 , 9.9689546533009] , [ 1188532800000 , 9.7740580198146] , [ 1191124800000 , 10.558483060626] , [ 1193803200000 , 9.9314651823603] , [ 1196398800000 , 9.3997715873769] , [ 1199077200000 , 8.4086493387262] , [ 1201755600000 , 8.9698309085926] , [ 1204261200000 , 8.2778357995396] , [ 1206936000000 , 8.8585045600123] , [ 1209528000000 , 8.7013756413322] , [ 1212206400000 , 7.7933605469443] , [ 1214798400000 , 7.0236183483064] , [ 1217476800000 , 6.9873088186829] , [ 1220155200000 , 6.8031713070097] , [ 1222747200000 , 6.6869531315723] , [ 1225425600000 , 6.138256993963] , [ 1228021200000 , 5.6434994016354] , [ 1230699600000 , 5.495220262512] , [ 1233378000000 , 4.6885326869846] , [ 1235797200000 , 4.4524349883438] , [ 1238472000000 , 5.6766520778185] , [ 1241064000000 , 5.7675774480752] , [ 1243742400000 , 5.7882863168337] , [ 1246334400000 , 7.2666010034924] , [ 1249012800000 , 7.5191821322261] , [ 1251691200000 , 7.849651451445] , [ 1254283200000 , 10.383992037985] , [ 1256961600000 , 9.0653691861818] , [ 1259557200000 , 9.6705248324159] , [ 1262235600000 , 10.856380561349] , [ 1264914000000 , 11.27452370892] , [ 1267333200000 , 11.754156529088] , [ 1270008000000 , 8.2870811422455] , [ 1272600000000 , 8.0210264360699] , [ 1275278400000 , 7.5375074474865] , [ 1277870400000 , 8.3419527338039] , [ 1280548800000 , 9.4197471818443] , [ 1283227200000 , 8.7321733185797] , [ 1285819200000 , 9.6627062648126] , [ 1288497600000 , 10.187962234548] , [ 1291093200000 , 9.8144201733476] , [ 1293771600000 , 10.275723361712] , [ 1296450000000 , 16.796066079353] , [ 1298869200000 , 17.543254984075] , [ 1301544000000 , 16.673660675083] , [ 1304136000000 , 17.963944353609] , [ 1306814400000 , 16.63774086721] , [ 1309406400000 , 15.84857094609] , [ 1312084800000 , 14.767303362181] , [ 1314763200000 , 24.778452182433] , [ 1317355200000 , 18.370353229999] , [ 1320033600000 , 15.253137429099] , [ 1322629200000 , 14.989600840649] , [ 1325307600000 , 16.052539160125] , [ 1327986000000 , 16.424390322793] , [ 1330491600000 , 17.884020741104] , [ 1333166400000 , 18.372698836036] , [ 1335758400000 , 18.315881576096]]
  },

  { 
    "key" : "Grade 9" , 
    "values" : [ [ 1025409600000 , 13.153938631352] , [ 1028088000000 , 12.456410521864] , [ 1030766400000 , 12.537048663919] , [ 1033358400000 , 13.947386398309] , [ 1036040400000 , 14.421680682568] , [ 1038632400000 , 14.143238262286] , [ 1041310800000 , 12.229635347478] , [ 1043989200000 , 12.508479916948] , [ 1046408400000 , 12.155368409526] , [ 1049086800000 , 13.335455563994] , [ 1051675200000 , 12.888210138167] , [ 1054353600000 , 12.842092790511] , [ 1056945600000 , 12.513816474199] , [ 1059624000000 , 12.21453674494] , [ 1062302400000 , 11.750848343935] , [ 1064894400000 , 10.526579636787] , [ 1067576400000 , 10.873596086087] , [ 1070168400000 , 11.019967131519] , [ 1072846800000 , 11.235789380602] , [ 1075525200000 , 11.859910850657] , [ 1078030800000 , 12.531031616536] , [ 1080709200000 , 11.360451067019] , [ 1083297600000 , 11.456244780202] , [ 1085976000000 , 11.436991407309] , [ 1088568000000 , 11.638595744327] , [ 1091246400000 , 11.190418301469] , [ 1093924800000 , 11.835608007589] , [ 1096516800000 , 11.540980244475] , [ 1099195200000 , 10.958762325687] , [ 1101790800000 , 10.885791159509] , [ 1104469200000 , 13.605810720109] , [ 1107147600000 , 13.128978067437] , [ 1109566800000 , 13.119012086882] , [ 1112245200000 , 13.003706129783] , [ 1114833600000 , 13.326996807689] , [ 1117512000000 , 13.547947991743] , [ 1120104000000 , 12.807959646616] , [ 1122782400000 , 12.931763821068] , [ 1125460800000 , 12.795359993008] , [ 1128052800000 , 9.6998935538319] , [ 1130734800000 , 9.3473740089131] , [ 1133326800000 , 9.36902067716] , [ 1136005200000 , 14.258619539875] , [ 1138683600000 , 14.21241095603] , [ 1141102800000 , 13.973193618249] , [ 1143781200000 , 15.218233920664] , [ 1146369600000 , 14.382109727451] , [ 1149048000000 , 13.894310878491] , [ 1151640000000 , 15.593086090031] , [ 1154318400000 , 16.244839695189] , [ 1156996800000 , 16.017088850647] , [ 1159588800000 , 14.183951830057] , [ 1162270800000 , 14.148523245696] , [ 1164862800000 , 13.424326059971] , [ 1167541200000 , 12.974450435754] , [ 1170219600000 , 13.232470418021] , [ 1172638800000 , 13.318762655574] , [ 1175313600000 , 15.961407746104] , [ 1177905600000 , 16.287714639805] , [ 1180584000000 , 16.24659058389] , [ 1183176000000 , 17.564505594808] , [ 1185854400000 , 17.872725373164] , [ 1188532800000 , 18.018998508756] , [ 1191124800000 , 15.584518016602] , [ 1193803200000 , 15.480850647182] , [ 1196398800000 , 15.699120036985] , [ 1199077200000 , 19.184281817226] , [ 1201755600000 , 19.691226605205] , [ 1204261200000 , 18.982314051293] , [ 1206936000000 , 18.707820309008] , [ 1209528000000 , 17.459630929759] , [ 1212206400000 , 16.500616076782] , [ 1214798400000 , 18.086324003978] , [ 1217476800000 , 18.929464156259] , [ 1220155200000 , 18.233728682084] , [ 1222747200000 , 16.315776297325] , [ 1225425600000 , 14.632892190251] , [ 1228021200000 , 14.667835024479] , [ 1230699600000 , 13.946993947309] , [ 1233378000000 , 14.394304684398] , [ 1235797200000 , 13.724462792967] , [ 1238472000000 , 10.930879035807] , [ 1241064000000 , 9.8339915513708] , [ 1243742400000 , 10.053858541872] , [ 1246334400000 , 11.786998438286] , [ 1249012800000 , 11.780994901769] , [ 1251691200000 , 11.305889670277] , [ 1254283200000 , 10.918452290083] , [ 1256961600000 , 9.6811395055706] , [ 1259557200000 , 10.971529744038] , [ 1262235600000 , 13.330210480209] , [ 1264914000000 , 14.592637568961] , [ 1267333200000 , 14.605329141157] , [ 1270008000000 , 13.936853794037] , [ 1272600000000 , 12.189480759072] , [ 1275278400000 , 11.676151385046] , [ 1277870400000 , 13.058852800018] , [ 1280548800000 , 13.62891543203] , [ 1283227200000 , 13.811107569918] , [ 1285819200000 , 13.786494560786] , [ 1288497600000 , 14.045162857531] , [ 1291093200000 , 13.697412447286] , [ 1293771600000 , 13.677681376221] , [ 1296450000000 , 19.96151186453] , [ 1298869200000 , 21.049198298156] , [ 1301544000000 , 22.687631094009] , [ 1304136000000 , 25.469010617433] , [ 1306814400000 , 24.88379943712] , [ 1309406400000 , 24.203843814249] , [ 1312084800000 , 22.138760964036] , [ 1314763200000 , 16.034636966228] , [ 1317355200000 , 15.394958944555] , [ 1320033600000 , 12.62564246197] , [ 1322629200000 , 12.973735699739] , [ 1325307600000 , 15.78601833615] , [ 1327986000000 , 15.227368020134] , [ 1330491600000 , 15.899752650733] , [ 1333166400000 , 15.661317319168] , [ 1335758400000 , 15.359891177281]]
  }
  ]
}



function generateGradeData(){
  var data = [
  {
    key: "Cumulative Return",
    values: [
    { 
      "label" : "90+" ,
      "value" : Math.abs(_.random(50)- _.random(40))
    } , 
    { 
      "label" : "80-90" , 
      "value" : Math.abs(_.random(50)- _.random(30))
    } , 
    { 
      "label" : "70-80" , 
      "value" : Math.abs(_.random(50)- _.random(10))
    } , 
    { 
      "label" : "60-70" , 
      "value" : Math.abs(_.random(50)- _.random(40))
    } , 
    { 
      "label" : "50-60" ,
      "value" : Math.abs(_.random(50)-_.random(45))
    } , 
    { 
      "label" : "40-50" , 
      "value" : Math.abs(_.random(10))
    } , 
    { 
      "label" : "30-40" , 
      "value" : _.random(5)
    } , 
    { 
      "label" : "0-30" , 
      "value" : _.random(10)
    }
    ]
  }
  ]
  return data
}



$(document).ready(function(){
  var schools = getSchoolNames()
  console.log(schools)
  var schoolsPositions = getSchoolPositions()
  for (var i = 0; i<schoolsPositions.length; i = i+2) {
    var xpos = schoolsPositions[i];
    var ypos = schoolsPositions[i+1];
    var radius = _.random(20);
    var colours = ["#ff0000", "#0080ff", "#008040"]
    var random_colour = colours[_.random(2)]
    var circle = sudan.circle(xpos, ypos, 4);
    var catch_area = sudan.circle(xpos, ypos, radius)
    var school_name = schools[i]
    if (i>98) {
      school_name = schools[_.random(80)]
    }
    circle.node.setAttribute("class","school");
    circle.node.setAttribute('name', school_name)
    circle.node.setAttribute('xpos', xpos)
    circle.node.setAttribute('ypos', xpos)
    circle.node.setAttribute('population', _.random(100))

    circle.attr("fill", random_colour).toFront();
    circle.hover(function(){
      this.transform('s3')
    }, function(){
      this.transform('s1')
    })
  }
  var juba = sudan.circle(500,500,10)
  juba.attr("fill", "black").toFront();
  var t = sudan.text(525, 500, "Juda");
  
  var wau = sudan.circle(300,330,10)
  wau.attr("fill", "black").toFront();
  var t = sudan.text(300, 350, "Wau");

  // addNewSchool("School of Hard Knocks")
  $('circle.school').on('mouseover', function (){
    var name = $(this).attr('name')
    var xpos = $(this).attr('xpos')
    var ypos = $(this).attr('ypos')
    var population = $(this).attr('population')

    $('.card h2').text(name);
    $('.card h3.location span').text(xpos + " " + ypos);
    $('.card h3.population span').text(population)

  })

  $('.school').on('click', function(){
    changeToChartView();
  })

  var panZoom = sudan.panzoom();
  panZoom.enable();

  $("svg").dblclick(function (e) {
    panZoom.zoomIn(1);
    panZoom.pan($(this).offset().left,$(this).offset().top);
    e.preventDefault();
  });

});




