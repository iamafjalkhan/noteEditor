/*
var el=document.querySelector('ul li')
undefined
el
<li>​<p>​First note​</p>​<p>​…​</p>​<input class=​"edit-note" type=​"text">​</li>​
var el=document.querySelector('ul li:nth-child(2)')
undefined
el
<li>​<p>​Second note​</p>​<p>​<i class=​"fa fa-pencil-square-o">​…​</i>​<i class=​"fa fa-times">​…​</i>​::before​</i>​</p>​<input class=​"edit-note" type=​"text">​</li>​
el.querySelector('p .fa fa-times')
null
el.querySelector('p .fa-times')   
<i class=​"fa fa-times">​…​</i>​
var icons=document.getElementsByClassName("fa")
undefined
icons
HTMLCollection(6) [i.fa.fa-pencil-square-o, i.fa.fa-times, i.fa.fa-pencil-square-o, i.fa.fa-times, i.fa.fa-pencil-square-o, i.fa.fa-times]
icons[0]
<i class=​"fa fa-pencil-square-o">​…​</i>​
icons[1]
<i class=​"fa fa-times">​…​</i>​
var li=document.querySelectorAll('li')
undefined
li
NodeList(3) [li, li, li]
Array.from(li).foreach(function(li)){
VM3001:1 Uncaught SyntaxError: Unexpected token ')'
Array.from(li).forEach(function(li){console.log(li);});
*/








/*
var lis=document.querySelectorAll('li, h2, #hide-list');
console.log(lis);


Array.from(lis).forEach(
    function(li){
        li.textContent="hi";
    }
);
*/










/*
var h2=document.querySelector('header h2');
// h2.style.color='red';
// h2.style.backgroundColor='green';
h2.className='changeBg';
// h2.className+=' changeFt';

// h2.style.cssText='background-color:red'; 
// console.log(h2.className);
// console.log(typeof(h2.className));
// console.log(h2.classList);
h2.classList.add('changeFt');
h2.classList.remove('changeBg');
h2.classList.toggle('changeBg');
console.log(h2.className);
h2.classList.toggle('changeBg');
console.log(h2.className);
*/











/*
var h2=document.querySelector('header h2');
h2.onclick=function(){
    console.log("clicked");
}

h2.onmouseover=function(){
    console.log("hover event");
}

//  window.onmouseenter=function(){
//     console.log('out of the window');
// }

*/












/*
//event listner
function a() {
    console.log('clicked a');
}

function b(){
    console.log('clicked b');
}


var h2=document.querySelector('header h2');
h2.addEventListener('click',a);
h2.addEventListener('click',b);

function c(e){
    console.log(e);
}

function d(e){
    console.log(e.target);
}

function e(e){
    console.log(this);
}
h2.addEventListener('click',c);
h2.addEventListener('click',d);
h2.addEventListener('click',e);


//event listner doesn't allow to pass arguements in function, to tackle this 

function sum(a,b){
    console.log(a+b);
}

h2.addEventListener('click', function(){
    sum(2,5);
});

*/











/*
//attribute
var div=document.querySelector('div.wrapper');

console.log(div.getAttribute('class'));
console.log(div.getAttribute('id'));

div.setAttribute('style','background-color:coral');
div.removeAttribute('style');
console.log(div.hasAttribute('style'));


var btn=document.getElementById('add-btn');
var input=document.getElementById('add-input');

btn.addEventListener('click',function(e){
    //to prevent form submission
    e.preventDefault();
                    //(atribute, value)
    input.setAttribute('type','submit')
    input.setAttribute('value',input.value);

});
*/







/*

//create elements using js

var btn=document.createElement('button');
btn.setAttribute('style','background: coral; width:70px; padding: 5px; border:0px; margin:10px;')
var txt=document.createTextNode('click me');
//both are objects we need to append txt with button

btn.appendChild(txt);
console.log(btn);

//add this button to html

var form=document.getElementById('add');
form.appendChild(btn);

//to add element before an element
//                (element, position where we want it for e.g here 
//before the first element of form)
form.insertBefore(btn,form.children[0]);

//remove child e.g. removing newly created button

btn.parentNode.removeChild(btn);
*/

/*
//crete elements
    var txt=document.getElementById('add-input');
    var li=document.createElement('li');
    var para0=document.createElement('p');
    var para=document.createElement('p');
    var i1=document.createElement('i');
    var i2=document.createElement('i');
    var input=document.createElement('input');
    



function appendElements(){
    
    var ulList=document.getElementById('list');
    // para.appendChild(listText);
    para.appendChild(i1);
    para.appendChild(i2);
    li.appendChild(para0);
    li.appendChild(para);
    li.appendChild(input);
    ulList.appendChild(li);
}

function setListAttributes(){
    i1.setAttribute('class','fa fa-pencil-square-o');
    i2.setAttribute('class','fa fa-times');
    input.setAttribute('class','edit-note');
    input.setAttribute('type','text');
    // para0.setAttribute('text',txt.value);
}

*/

//Solution problem 3

 //create elements


var ulList=document.getElementById('list');

function getText(e){
    e.preventDefault();
    var txt=document.getElementById('add-input');

    if(txt.value!==''){  


        var li=document.createElement('li');
        var para0=document.createElement('p');
        var para=document.createElement('p');
        var i1=document.createElement('i');
        var i2=document.createElement('i');
        var input=document.createElement('input');

        //append elements   
        
        para.appendChild(i1);
        para.appendChild(i2);
        li.appendChild(para0);
        li.appendChild(para);
        li.appendChild(input);
        ulList.appendChild(li);
  

        //set attributes   
        i1.setAttribute('class','fa fa-pencil-square-o');
        //or i1.className='fa fa-pencil-square-o'        
        i2.setAttribute('class','fa fa-times');
        input.setAttribute('class','edit-note');
        input.setAttribute('type','text');
      
        para0.textContent=txt.value;
       /* 
        or using the long Way 
         var listText=document.createTextNode(txt.value);
         para0.appendChild(listText);
        */
        txt.value='';
    }
    
}


var btn=document.getElementById('add-btn');
btn.addEventListener('click',getText);

/// edit and delete notes
ulList.addEventListener('click',function(e){
    if(e.target.classList[1]==="fa-pencil-square-o"){
        var parentPara=e.target.parentNode;
        parentPara.style.display='none';

        var note=parentPara.previousElementSibling;
        var input=parentPara.nextElementSibling;

        input.style.display='block';
        input.value=note.textContent;

        input.addEventListener('keypress', function(e){
            if(e.keyCode===13){
                if(input.value !==''){
                    note.textContent=input.value;
                    parentPara.style.display='block';
                    input.style.display='none';
                }else{
                    var li=input.parentNode;
                    li.parentNode.removeChild(li);
                }
                
            }
        });

    }else if(e.target.classList[1]=="fa-times"){
        var list=e.target.parentNode.parentNode;
        list.parentNode.removeChild(list);
    }
});



//*****************hide notes************************

var hide=document.getElementById('hide');
hide.addEventListener('click', function(){
    if(hide.checked){
        ulList.style.display='none';
        hide.previousElementSibling.textContent='Show Notes';
    }else{
        ulList.style.display='block';
        hide.previousElementSibling.textContent='Hide Notes';
    }
});


//***************search filter */

var search=document.querySelector('#search-note input');
search.addEventListener('keyup',function(e){
    var searchValue=e.target.value.toUpperCase();

    var notes=document.getElementsByTagName('li');

    Array.from(notes).forEach(function(note){
        var partext=note.firstElementChild.textContent;
        
        if(partext.toUpperCase().indexOf(searchValue)!==-1){
            note.style.display='block';
        }else{
            note.style.display='none';
        }
    });
    
});





