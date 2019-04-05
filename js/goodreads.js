
	 function doSearch(isbn) {
	
		var key = "NhwWyRiSxpnUEXKVulXqw"; // replace with your key

		var apiUrl = "https://www.goodreads.com/search/index.xml?key=" + key + "&q=" + isbn;

		 $.ajaxPrefilter(function(options) {
     if (options.crossDomain && $.support.cors) {
       options.url = 'https://cors-anywhere.herokuapp.com/' + apiUrl;
     }
   });
   
     $.ajax({
       url: apiUrl,
       type: 'GET',
       crossDomain: true,
       datatype: 'xml',
       success: parseXml,
 });

			        var title           = 'title';
			        var country_code    = 'country_code';
			        var image_url       = 'image_url';
			        var small_image_url = 'small_image_url';
			        var author 		      = 'author';
			        var description     = 'description';
	
		    function parseXml(xml) {

 		$(xml).find('work').each(function() {

         $("#Container").append("<img src='" + $(this).find(image_url).text() + "'/></a></p><h2>" + $(this).find(title).text() + "</h2><br/><p>" + $(this).find(author).text());
       });
		    	};
	}