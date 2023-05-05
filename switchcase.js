let x=50,y=25
let ans =0

var operation="multiply"


switch(operation) {

    case "add" :
     ans=x+y;
     break;

    case "subtract" :
    ans=x-y;
    break;

    case "multiply" :
     ans=x*y;
     break;

     case "div" :
     ans=x/y;
     break;

     default :
     ans =0;
}
console.log( "answer is " + ans)