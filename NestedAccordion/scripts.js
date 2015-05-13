//debugger;


document.head.parentElement.className = "js";

var elements =document.querySelectorAll('.cbp-nttrigger');



_.forEach(elements, function(element, index, elements){
  element.addEventListener('click', function(){
    console.log(elements, index, element);
    element.parentElement.classList.toggle('cbp-ntopen');
});
});


/*var elements2 =document.querySelectorAll('h4');


_.forEach(elements2, function(element, index, elements2){
  element.addEventListener('click', function(){
    console.log(elements2, index, element);
    element.parentElement.classList.toggle('cbp-ntopen');
});
});
*/
