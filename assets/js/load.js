function loadNav(){
    $(document).ready(function() {
       $('#nav').load('assets/html/nav.html', function(responseTxt, statusTxt, xhr){
            if(statusTxt == "success")
                console.log("External content loaded successfully!");
            if(statusTxt == "error")
                console.log("Error: " + xhr.status + ": " + xhr.statusText);
        });

    });
}
