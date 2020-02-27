function setCookie(username,hours){
    var d = new Date();
    d.setTime(d.getTime() + (hours*60*60*1000));                
    document.cookie='username='+username+';Expires='+d.toUTCString()+';';
}


function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie(cname){
    var user = getCookie(cname);
    if (user != "") {
        return true;
    } else {
        return false;
    }
}

function login(){
    username=document.getElementById("username").value;
    password=document.getElementById("password").value;
    names=allUserNames();
    if(names.includes(username)){
        user=userDetails(username);
        userPassword=user[2];
        credits=user[6];
        if(userPassword==password){
            alert('User ' + username + ' logins successfully!!!');
            $('body').load('base.html',function(responseTxt,statusTxt,xhr){
                if(statusTxt=="success"){
                    $('#greeting').prepend('<h1>Hej, '+username+'</h1><h1>Credits: '+credits+' sek</h1>');
                    setCookie(username,2);
                }
                  
                if(statusTxt=="error")
                  alert("Error: "+xhr.status+": "+xhr.statusText);
              });

        }else{
            alert('Wrong password!');
        }
        
        return true;
    }else{
        alert('No user named ' + username + '!');
        return false;
    }
}

function loginCheck(){
    if(getCookie('username')!='' && getCookie('username')!='guest'){
        username=getCookie('username');
        user=userDetails(username);
        credits=user[6];
        $('body').load('base.html',function(responseTxt,statusTxt,xhr){
            if(statusTxt=="success"){
                $('#greeting').prepend('<h1>Hej, '+username+'</h1><h1>Credits: '+credits+' sek</h1>');
                setCookie(username,2);
            }
              
            if(statusTxt=="error")
              alert("Error: "+xhr.status+": "+xhr.statusText);
          });
    } else if(getCookie('username')=='guest'){
        $('body').load('base.html',function(responseTxt,statusTxt,xhr){
            if(statusTxt=="success"){
                setCookie(guest,2);
                $('#greeting').prepend('<h1>Hej, guest</h1>');
            }
              
            if(statusTxt=="error")
              alert("Error: "+xhr.status+": "+xhr.statusText);
          });
    } else
    {
        $('body').load('loginForm.html');
    }
}

function proceedWithoutLogin(){
    $('body').load('base.html',function(responseTxt,statusTxt,xhr){
        if(statusTxt=="success"){
            setCookie('guest',2);
            $('#greeting').prepend('<h1>Hej, guest</h1>');
        }
          
        if(statusTxt=="error")
          alert("Error: "+xhr.status+": "+xhr.statusText);
      });
}

function logout(){
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    $('body').load('loginForm.html');
}