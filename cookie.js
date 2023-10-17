$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 300) {
          $(".header").css("background" , "red");
        }
  
        else{
            $(".header").css("background" , "transparent");  	
        }
    })
  })
  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('.header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }


 /**
   * Back to top button
   */
 let backtotop = select('.back-to-top')
 if (backtotop) {
   const toggleBacktotop = () => {
     if (window.scrollY > 100) {
       backtotop.classList.add('active')
     } else {
       backtotop.classList.remove('active')
     }
   }
   window.addEventListener('load', toggleBacktotop)
   onscroll(document, toggleBacktotop)
 }

 /**
   * Mobile nav toggle
   */
 on('click', '.mobile-nav-toggle', function(e) {
  select('#navbar').classList.toggle('navbar-mobile')
  this.classList.toggle('bi-list')
  this.classList.toggle('bi-x')
})
