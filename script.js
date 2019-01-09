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
