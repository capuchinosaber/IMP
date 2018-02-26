var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
  
  
function search() {

  var searchterm = $('#tag').val();

  $("#images").empty();

 (function() {
  $.getJSON(flickerAPI, {

    tags: searchterm,
    tagmode: "any",
    format: "json",
  })

    .done(function( data ) {
      $.each( data.items, function( i, item ) {
        $( "<img>" ).attr( "src", item.media.m ).appendTo( "#images" );
        if ( i === 20 ) {
          return false;
        }
      });
    });
})();
}

