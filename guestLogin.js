function proceedWithoutLogin(){
    setCookie('session','orderPage.html',2);
	window.location.assign("orderPage.html");
}

function validateLogin(){
	username=document.getElementById("username").value;
    password=document.getElementById("password").value;
	names=allUserNames();
    if(names.includes(username)){
        user=userDetails(username);
        userPassword=user[2];
        credits=user[6];
        if(userPassword==password){
            alert('User ' + username + ' logins successfully!!!');
			window.location.assign("orderPage.html");

        }else{
            alert('Wrong password!');
        }
        
        return true;
    }else{
        alert('No user named ' + username + '!');
        return false;
    }
}
function logout(){
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "session=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
    $('body').load('loginForm.html');
}

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
