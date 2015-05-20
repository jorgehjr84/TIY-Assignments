document.head.parentElement.className = "js";

var elements = document.querySelector('tab-current');

_.forEach(elements, function(element,index, elements){
	element.addEventListener('click', function(){
		element.parentElement.clasList.toggle('tab-current')
	});
});

alert(is this working);

/*document.head.parentElement.className = "js";

var elements =document.querySelectorAll('h3');



_.forEach(elements, function(element, index, elements){
  element.addEventListener('click', function(){
    console.log(elements, index, element);
    element.parentElement.classList.toggle('cbp-ntopen');
});
});
*/ 
