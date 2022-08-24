/*
========================== Simple Arrow Function ==================
 
function demo()
{
    console.log("welcome");
}
*/
/*
var demo = ()=>{
    console.log("welcome back");
}
*/

/*
var demo = ()=> console.log("wecome back hello");


demo();
*/




/*================================= Parameterized Arrow Function =================*/

/*
function demo(a, b)
{
    var c = a*b;
    console.log(c);
}*/
/*
var demo = a =>{
    var x = a*a;
    return x;
}*/

var demo = a => a*a;


var ans =demo(8);
console.log(ans);
