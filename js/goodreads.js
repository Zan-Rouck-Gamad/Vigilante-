  function goodRead(isbn) {

		var key = "NhwWyRiSxpnUEXKVulXqw"; // replace with your key

		var apiUrl = "https://www.goodreads.com/book/isbn/" + isbn + "?key=" + key;

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
			        var isbn10          = 'isbn';
			        var isbn13          = 'isbn13';
			        var country_code    = 'country_code';
			        var image_url       = 'image_url';
			        var small_image_url = 'small_image_url';
			        var publisher       = 'publisher';
			        var description     = 'description';
		    function parseXml(xml) {

 		$(xml).find('book').each(function() {

         $("#Container").append("<p><a href='" + $(this).children(isbn).text() + "'><img src='" + $(this).children(country_code).text() + "'/></a></p><h2>" + $(this).children(title).text() + "</h2><br/><p>" + $(this).find(publisher).text() + "</p><br/><p>My Rating: " + $(this).parent('review').find(description).text() + "</p>");
       });
		    	};
	}