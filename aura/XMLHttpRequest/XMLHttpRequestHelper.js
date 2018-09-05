({
    makeAjaxRequest : function(component, url) {
        var component = component.find('component');
        
        //Make Ajax request by calling method from component
        component.callAjax("POST", url, true,
            function(xmlhttp){
            console.log('xmlhttp:', xmlhttp);

            //Show response text if successful
            //Display error message otherwise
            console.log('### status == '+xmlhttp.status);
            console.log('### xmlhttp == '+xmlhttp.responseText);
            if (xmlhttp.status == 200) {
                console.log('### SUCCESS ');
                window.alert(xmlhttp.responseText)
            }
            else if (xmlhttp.status == 400) {
                window.alert('There was an error 400');
            }else {
                window.alert('Something else other than 200 was returned');
                }
            }
        );
    }
})