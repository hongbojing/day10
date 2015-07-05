

//40 set.clear()
//
//The set.clear() method removes all the elements from the set. The set() method only groups elements together, it doesn't duplicate any elements. Therefore, when a set is cleared, no elements are removed, they are just unbounded.
//syntax:set.clear()

var paper40=Raphael("code-left-40",400,400);

var cir_40_1=paper40.circle(100,100,80).attr({
  "fill":"#17A9C6",
  "stroke":"#2A6570",
  "stroke-width":2
});
var cir_40_2=paper40.circle(290,100,80).attr({
  "fill":"#17A9C6",
  "stroke":"#2A6570",
  "stroke-width":2
});
var rect_40_1=paper40.rect(100,190,200,100,10).attr({
  "fill":"#17A9C6",
  "stroke":"#2A6570",
  "stroke-width":8
});

var set_40_1=paper40.set();
//adding elements to the set using  the push() method
set_40_1.push(cir_40_1,cir_40_2,rect_40_1);

set_40_1.clear();
//the code will remove the set called set_40_1,not its elements.


//41 set.exclude() to be used to remove only a particular element from the set. This method takes only one required parameter, that is, the element to be removed.
var paper41=Raphael("code-left-41",400,400);
var cir_41_1=paper41.circle(100,100,80).attr({
  "fill":"#17A9C6",
  "stroke":"#2A6570",
  "stroke-width":2
});
var cir_41_2=paper41.circle(290,100,80).attr({
  "fill":"#17A9C6",
  "stroke":"#2A6570",
  "stroke-width":2
});
var rect_41_1=paper41.rect(100,190,200,100,10).attr({
  "fill":"#17A9C6",
  "stroke":"#2A6570",
  "stroke-width":8
});

var set_41_1=paper41.set();
//adding elements to the set using  the push() method
set_41_1.push(cir_41_1,cir_41_2,rect_41_1);

set_41_1.exclude(cir_41_1);

function changeColor_41_1(){
  set_41_1.attr('fill','red');
  //now the set_41_1 only includes the cir_41_2, and rect_41_1
}


//42 set.foreach() executes a function for every element of the set. The call back function takes only one parameter, which is a reference to the current element in the loop
//syntax: set.foreach(callback_function,thisArg);

var paper42=Raphael("code-left-42",400,400);
var cir_42_1=paper42.circle(100,100,80).attr({
  "fill":"#17A9C6",
  "stroke":"#2A6570",
  "stroke-width":2
});
var cir_42_2=paper42.circle(290,100,80).attr({
  "fill":"#17A9C6",
  "stroke":"#2A6570",
  "stroke-width":2
});
var rect_42_1=paper42.rect(100,190,200,100,10).attr({
  "fill":"#17A9C6",
  "stroke":"#2A6570",
  "stroke-width":8
});

var set_42_1=paper42.set();
//adding elements to the set using  the push() method
set_42_1.push(cir_42_1,cir_42_2,rect_42_1);
set_42_1.forEach(function(elm){
  elm.attr('fill','green');
});
//the code loops through all the elements in the set and change the bg color of each and every element to green.


//43 set.pop() method removes the last element from the set and  RETURNS it
//syntax: set.pop()
var paper43=Raphael("code-left-43",400,400);
var cir_43_1=paper43.circle(100,100,80).attr({
  "fill":"#17A9C6",
  "stroke":"#2A6570",
  "stroke-width":2
});
var cir_43_2=paper43.circle(290,100,80).attr({
  "fill":"#17A9C6",
  "stroke":"#2A6570",
  "stroke-width":2
});
var rect_43_1=paper43.rect(100,190,200,100,10).attr({
  "fill":"#17A9C6",
  "stroke":"#2A6570",
  "stroke-width":8
});

var set_43_1=paper43.set();
//adding elements to the set using  the push() method
set_43_1.push(cir_43_1,cir_43_2,rect_43_1);

var popElement=set_43_1.pop();
popElement.attr('fill','red');
//use the pop() method to get the last element, and change its color to red

//44 set.splice() method is used to delete and insert an element.This method takes three parameters: index(where the element should be deleted), count(number of elements to remove from the index position) and element to be inserted.
//syntax: set.splice(index,count,element);


var paper44=Raphael("code-left-44",400,400);

var cir_44_1=paper44.circle(100,100,80).attr({
  "fill":"#17A9C6",
  "stroke":"#2A6570",
  "stroke-width":2
});
var cir_44_2=paper44.circle(290,100,80).attr({
  "fill":"#17A9C6",
  "stroke":"#2A6570",
  "stroke-width":2
});
var rect_44_1=paper44.rect(100,190,200,100,10).attr({
  "fill":"#17A9C6",
  "stroke":"#2A6570",
  "stroke-width":8
});

var set_44_1=paper44.set();
//adding elements to the set using  the push() method
set_44_1.push(cir_44_1,cir_44_2,rect_44_1);
var rect_44_2=paper44.rect(5,5,30,20);
set_44_1.splice(1,2,rect_44_2).attr('fill','red');
set_44_1.attr('fill','green');
//the spliced elements are filled with red color, the left elements are filled with green color.
//splice() is kind of like pop, which they all return some objects.


//45 test the set() objects
var paper45=Raphael("code-left-45",400,400);
var cir_45_1=paper45.circle(100,100,80).attr({
  "fill":"#17A9C6",
  "stroke":"#2A6570",
  "stroke-width":2
});
var cir_45_2=paper45.circle(290,100,80).attr({
  "fill":"#17A9C6",
  "stroke":"#2A6570",
  "stroke-width":2
});
var rect_45_1=paper45.rect(100,190,200,100,10).attr({
  "fill":"#17A9C6",
  "stroke":"#2A6570",
  "stroke-width":8
});

var set_45_1=paper45.set();
//adding elements to the set using  the push() method
set_45_1.push(cir_45_1,cir_45_2,rect_45_1);

console.log(set_45_1);
console.log(set_45_1[0]);
console.log(set_45_1[1]);
console.log(set_45_1[2]);
set_45_1[0].attr('fill','red');
set_45_1[1].attr('fill','yellow');
set_45_1[2].attr('fill','green');



























