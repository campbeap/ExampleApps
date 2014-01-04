document.getElementById('appCodeName').innerHTML = navigator.appCodeName;
document.getElementById('appName').innerHTML = navigator.appName;
document.getElementById('appVersion').innerHTML = navigator.appVersion;
document.getElementById('cookieEnabled').innerHTML = navigator.cookieEnabled;
document.getElementById('language').innerHTML = navigator.language;
document.getElementById('onLine').innerHTML = navigator.onLine;
document.getElementById('platform').innerHTML = navigator.platform;
document.getElementById('product').innerHTML = navigator.product;
document.getElementById('userAgent').innerHTML = navigator.userAgent;
document.getElementById('javaEnabled').innerHTML = navigator.javaEnabled();

//returns true if user is using one of the following mobile browsers
var isMobile=detectmob();
if(isMobile) {
    document.getElementById('isMobile').innerHTML = "Mobile Device: True";
    
    //add additional device information here
    
} else {
    document.getElementById('isMobile').innerHTML = "Mobile Device: Not Detected";
}

function detectmob() { 
    if( navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)
    ){
        return true;
    } else {
        return false;
    }
}