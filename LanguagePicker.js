 var languageSelect = document.getElementById('select');
   var selectedLanguage = readCookie('language');
//   var fs=require('fs');
  //var data=fs.readFileSync('/language/en.json', 'utf8');
   var mapping_en = JSON.parse(en);
   
	var mapping_sv = JSON.parse(sv);

	
$(document).ready(function(){
	var a=document.getElementsByClassName("language");
	if(window.sessionStorage.getItem("lang")!=="null"){
	$(a).find("#select").val(window.sessionStorage.getItem("lang"));
	}
});

//Takes the key as parameter and returns mapped value from the respective js object	
function translate(key){
	console.log(mapping_sv);
	var a=document.getElementsByClassName("language");
	var lang=window.sessionStorage.getItem("lang")!=="null"?window.sessionStorage.getItem("lang"):$(a).find("#select").val();
	console.log(lang);
	if(lang==="english"){
		document.getElementById(key).innerText=mapping_en[0][key];
		return mapping_en[0][key];
	}
	else if(lang==="swedish"){
		document.getElementById(key).innerText=mapping_sv[0][key];
		return mapping_sv[0][key];
	}
	else{
		document.getElementById(key).innerText=mapping_en[0][key];
		return mapping_en[0][key];
	}		
	
};

	//Changes Language and reloads the page
	function changeLanguage(selectedLanguage){
		window.sessionStorage.setItem("lang",selectedLanguage);
		window.location.reload();		
//		if (selectedLanguage == 'english') {
  //         $(".english").css("display", "inline");
   //        $(".swedish").css("display", "none"); 
    //    }else if (selectedLanguage =='swedish') {
	//	   $.i18n().locale = 'sv';
     //      $(".english").css("display", "none");
      //     $(".swedish").css("display", "inline");
       // }
}
	$(".language select").bind('change', function() {
		//on change set cookie and...
		setCookie('language', this.value, 365);
		
		//change css depending on what is selected
        var sel = $(".language select").val();
        if (sel=='english') {
           $(".english").css("display", "inline");
           $(".swedish").css("display", "none");
        }else if (sel=='swedish') {
           $(".english").css("display", "none");
           $(".swedish").css("display", "inline");
        }
});

function saveLanguage(cookieValue)
{
    var sel = document.getElementById('LanguageSelect');
    setCookie('language', cookieValue, 365);
}

function setCookie(cookieName, cookieValue, nDays) {
    var today = new Date();
    var expire = new Date();

    if (nDays==null || nDays==0)
        nDays=1;

    expire.setTime(today.getTime() + 3600000*24*nDays);
    document.cookie = cookieName+"="+escape(cookieValue) + ";expires="+expire.toGMTString();
}

function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

   