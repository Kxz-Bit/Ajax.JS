var Ajax = Ajax || { }
Ajax.ajax = function(method,uri,data,user,password) {
	var returndata
	if(window.XMLHttpRequest){
		var xhr = new XMLHttpRequest()
	}else{
		var xhr = new ActiveXObject("Microsoft.XMLHTTP")
	}
	xhr.open(method,uri,false)
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4 && xhr.status == 200){
			returndata = xhr.response
		}
	}
	xhr.send()
	return returndata
}