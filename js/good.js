function bookInfo(title) {
      var key = "NhwWyRiSxpnUEXKVulXqw"; // replace with your key
          var bookUrl = "https://www.goodreads.com/book/title.xml?&key=" + key + "&title=" + title;

     $.ajaxPrefilter(function(options) {
     if (options.crossDomain && $.support.cors) {
       options.url = 'https://cors-anywhere.herokuapp.com/' + bookUrl;
     }
   });
   
     $.ajax({
       url: bookUrl,
       type: 'GET',
       crossDomain: true,
       datatype: 'xml',
       success: parseXml1,
 });
          var title1 = 'title';
          var description = 'description';
          var name1        = 'name:first';
          var image_url1    = 'image_url:first';
          var average_rating = 'average_rating';
          var widget          = 'reviews_widget'

function parseXml1(xml) {

    $(xml).find('book:first').each(function() {
        
         $("#Container").append("<div class='container'><div class='center'><div class='col-md-6 col-md-offset-3'><h2>" 
          + $(this).children(title1).text() + "</h2><br><br><div id='Container'></div></div></div></div><div class='container'><div class='row'><div class='col-sm-6 wow fadeInRight'><img src='"
           + $(this).children(image_url1).text() + "' class='img-responsive imgGoodReads'/></div><div class='col-sm-6 wow fadeInDown'><div class='accordion'><div class='panel-group' id='accordion1'><h3 class='panel-title h3Goodreads'>Average Rating: "
           + $(this).children(average_rating).text() + "</h3><h3 class='panel-title h3Goodreads'>Author: "
           + $(this).find(name1).text() + "</h3><div class='panel panel-default'><div class='panel-heading'><p>Description:<br><br>"
           + $(this).children(description).text() + "</p></div></div></div></div></div></div>");

         $("#review").append($(this).find(widget).text());
       });
 
  };
}