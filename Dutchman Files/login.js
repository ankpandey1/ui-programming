function setCookie(cname, value, hours){
    var d = new Date();
    d.setTime(d.getTime() + (hours*60*60*1000));                
    document.cookie=cname+'='+value+';Expires='+d.toUTCString()+';';
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
            $('body').load('mainmenu.html',function(responseTxt,statusTxt,xhr){
                if(statusTxt=="success"){
                    $('#greeting').prepend('<h1>Hej, '+username+'</h1><h1>Credits: '+credits+' sek</h1>');
                    setCookie('username',username,2);
                    setCookie('session','mainmenu.html',2);
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

function viewControl(){
    if(getCookie('username')!=''){
        session=getCookie('session');
        if(session=='mainmenu.html'){
            username=getCookie('username');
            $('body').load(session,function(responseTxt,statusTxt,xhr){
                if(statusTxt=="success"){
                    if(username!='guest'){
                        user=userDetails(username);
                        credits=user[6];
                        $('#greeting').prepend('<h1>Hej, '+username+'</h1><h1>Credits: '+credits+' sek</h1>');
                    
                    } else{
                        $('#greeting').prepend('<h1>Hej, guest</h1>');
                    }
                    setCookie('username',username,2);     
                } if(statusTxt=="error")
                    alert("Error: "+xhr.status+": "+xhr.statusText);
            });
        } else if(session=='order.html'){
            $('body').load(session);
        }
        
              
            
    } else
    {
        $('body').load('loginForm.html');
    }
}

function proceedWithoutLogin(){
    setCookie('session','mainmenu.html',2);
    $('body').load('mainmenu.html',function(responseTxt,statusTxt,xhr){
        if(statusTxt=="success"){
            setCookie('username','guest',2);
            $('#greeting').prepend('<h1>Hej, guest</h1>');
        }
          
        if(statusTxt=="error")
          alert("Error: "+xhr.status+": "+xhr.statusText);
      });
}

function logout(){
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "session=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
    $('body').load('loginForm.html');
}