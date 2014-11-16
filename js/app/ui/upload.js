CYC.ui.ImageUploader = (function($){
	var thisObj = this;
	
	function init() {
		_bindEvents();
	}
    
    function uploadImage(imageInfo) {        
        return true;
    }
    
    function _bindEvents() {
    	// Handle upload button click
    	$("").click(function () {
    		$.post(
	    		CYC.config.baserUrl + "services/listing/upload", 
	    		JSON.stringify({imageInfo: imageInfo}),
	    		function() {
	    			// redirect to listing page from here
	    			
	    		}
			"JSON")
			.error(function() {
				// handle failure. maybe display a message
				alert("An error occured");
			});  
		
    		e.preventDefault();
    	});
    }
    
    return {
    	init: init,
        uploadImage: uploadImage
    };
})(jQuery);

$(document).ready(CYC.ui.ImageUploader.init);