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
var isMobile=navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i);
if(isMobile==true) {
    document.getElementById('isMobile').innerHTML = "Mobile Device: True";
    
    //add additional device information here
    
} else {
    document.getElementById('isMobile').innerHTML = "Mobile Device: Not Detected " + isMobile;
}