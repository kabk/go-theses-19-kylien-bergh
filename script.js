//
// function openNav() {
//     document.getElementById("mySidenav").style.height = "6%";
//     document.getElementById("main").style.marginTop = "2%";
// }
//
// function closeNav() {
//     document.getElementById("mySidenav").style.height = "0";
//     document.getElementById("main").style.marginTop= "0";
// }

$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top-45
        }, 1000);
    }
});


var printonly = $( '.print_only .row' );
var rows = $( '.row' ).not( printonly );

function scaleImageColumn( ) {
  rows.each( function( ) {
      var row = $( this );
      var lft = row.find( '.leftcolumn' );
      var rgt = row.find( '.rightcolumn' );

      var imgs = lft.find( 'img.web_only' );
      imgs.css( 'width', '' );


      console.log( lft.height( ) + ' / ' + rgt.height( ) );
      console.log( imgs );


      imgs.css( 'width', ( 100 * ( rgt.height( ) + 20 ) / lft.height( ) ) + '%' );
  } );
}

$( window ).resize( scaleImageColumn )
           .trigger( 'resize' );
