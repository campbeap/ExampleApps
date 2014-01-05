

function postFormData() {
    var xhr;

    var element = document.getElementById('response');

    var url = 'http://globalresponseinformation.com/proc/ExampleAppJSON.php';
    var params = 'comment='+document.getElementById('comment').value;

    url += "?" + params;

    //good reference for XMLHttpRequest https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest
    if (window.XDomainRequest) {
        xhr=new XDomainRequest();

    } else if(window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();

    } else {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            // Javascript function JSON.parse to parse JSON data
            var jsonObj = JSON.parse(xhr.responseText);

            // jsonObj variable now contains the data structure and can
            // be accessed as jsonObj.name and jsonObj.country.
            document.getElementById("response").innerHTML =  jsonObj.comment;
        }
    }
    xhr.open('GET', url, true);
    xhr.send();
}

