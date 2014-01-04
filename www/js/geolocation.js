//alert("geolocation.js");

function getLocation() {
    var element = document.getElementById('geolocation');
    if(navigator.geolocation) {
        //alert("getLocation()");
        element.innerHTML = "retrieving location";

        var isMobile=navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i);

        // Wait for device API libraries to load
        if(isMobile==true) {
            document.addEventListener("deviceready", onDeviceReady, false);
        } else {
            navigator.geolocation.getCurrentPosition(onSuccess, onError);
        }

    } else {
        element.innerHTML = "Geolocation is not supported on this device";
    }
}

// device APIs are available
function onDeviceReady() {
    //alert("onDeviceReady");
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
}

// onSuccess Geolocation
function onSuccess(position) {
    var element = document.getElementById('geolocation');
    element.innerHTML = 'Latitude: '           + position.coords.latitude              + '<br />' +
                        'Longitude: '          + position.coords.longitude             + '<br />' +
                        'Altitude: '           + position.coords.altitude              + '<br />' +
                        'Accuracy: '           + position.coords.accuracy              + '<br />' +
                        'Altitude Accuracy: '  + position.coords.altitudeAccuracy      + '<br />' +
                        'Heading: '            + position.coords.heading               + '<br />' +
                        'Speed: '              + position.coords.speed                 + '<br />' +
                        'Timestamp: '          + position.timestamp                    + '<br />';
}

// onError Callback receives a PositionError object
function onError(error) {
    alert('code: '    + error.code    + '\n' +
        'message: ' + error.message + '\n');
}