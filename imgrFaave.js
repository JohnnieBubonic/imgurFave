 $('div.image.post-image').on('contextmenu', 'img', function(e) {
if (e.ctrlKey)
        {	 //Get li under ul and invoke on contextmenu
e.preventDefault();
 event.stopImmediatePropagation();
       
var a=this.src;				

var b = a.slice(20); 					
var c = b.indexOf('.'); 				
var d = b.substring(0, c != -1 ? c : b.length);
window.open("https://imgur.com/"+d);		

    }
 }
 );
