// var b = element.scrollHeight - element.clientHeight;
// console.log(b);

window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    // console.log(scroll)
});

// if document.body.scrollTop <= 0 {
//     alert ("scrolling down")
// } else {
//     alert ("scrolling up")
// }


var lastScrollTop = 0;
window.addEventListener("scroll", function(){ 
   var scrolling = window.pageYOffset || document.documentElement.scrollTop; 
   if (scrolling > lastScrollTop) {
      console.log("scroll down");
   } else if (scrolling < lastScrollTop) {
      console.log("scroll up");
   }
   lastScrollTop = scrolling <= 0 ? 0 : scrolling; 
}, false);