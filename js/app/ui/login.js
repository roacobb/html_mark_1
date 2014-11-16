//

CYC.ui.Login = (function($){
	var thisObj = this;
    
    function init() {
        _bindEvents();
    }
    
    function login(email, password) {    
    	$.post(
    		CYC.config.baserUrl + "/account/login", 
    		JSON.stringify({email: email, password: passowrd}),
    		function() {
    			// redirect to listing page from here
    			
    		}
		"JSON")
		.error(function() {
			// handle failure. maybe display a message
			alert("An error occured");
		});  
    }
    
    // Do your jquery binding here
    function _bindEvents() {        
        $("#signin").click(function () {
        	var email = $("#email").val();
        	var pass = $("#password").val();
        	
        	login(email, pass);
        	
        	e.preventDefault();
        });
    }

    return {
        init: init,
        login: login
    };
})(jQuery);

$(document).ready(CYC.ui.Login.init);
