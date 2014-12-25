// var Slides = {
//    totalSlides : '',
//    container : $( "#slides" ),
 
//    init : function( totalSlides ) {
//       // If nothing was passed to this function, we can't continue. 
//       if ( !totalSlides ) throw new Error("Please pass the total number of slides to the init method");
//       Slides.totalSlides = totalSlides;
 
//       // Load the slides
//       Slides.loadContent();
//    },
 
//    loadContent : function() {
//      // Hide the container. 
//       <span class="skimlinks-unlinked">Slides.container.hide</span>();
    
//       for ( var i = 0; i < Slides.totalSlides; i++ ) {
//          $(''<div id="#slide-' + i + '">'</div>')
//             .load('slides/' + i + '.html')
//             .appendTo(Slides.container);
//          }
    
//       // Now display the slides container again - causing exactly one reflow.
//       <span class="skimlinks-unlinked">Slides.container.show</span>();
//    }
// }
 
// // All right; let's do this. We'll assume that we've created 6 slides, total.
// // <span class="skimlinks-unlinked">Slides.init</span>( 6 );
// Slides.init(5);