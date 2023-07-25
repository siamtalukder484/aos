var lastScrollTop = 0;
window.addEventListener("scroll", function(){ 
   var scrolling = window.scrollY 

   if (scrolling > lastScrollTop) {
      console.log("scroll down");
   } else if (scrolling < lastScrollTop) {
      console.log("scroll up");
   }

   lastScrollTop = scrolling <= 0 ? 0 : scrolling; 

}, false);





$(function(){
   $('.nav_item').on('click',function(){
       $(this).addClass('active').siblings().removeClass('active')
   })
});