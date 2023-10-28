/*console.log('Hello');
console.log("its raining outside")
window.alert("nice to meet you")

//comment ;ak

hik
djfij
*/ 
let FirstName= 'Jhon'; //string
let age= 20; //number
let student= true; //booleans

console.log('Hello',FirstName);
console.log('I am',age,'years old');
console.log('enrolled',student);

document.getElementById("p1").innerHTML= 'Hello '+ FirstName
document.getElementById("p2").innerHTML= 'I am '+ age + ' years old.'

var x= 10

console.log(x)

const y= 989

console.log(y)


//arithmetics operators

console.log(x+2);
console.log(x-2)
console.log(x*2)
console.log(x/2)



console.log(x%2)
console.log(x**2)

x++;
console.log(x)

x--;
console.log(x);

//if statement

const yz=11

if (yz==5){
    console.log("yz is 5")
} else if (yz==11){
    console.log("yz is greater than 5")
}


//write me a program to print the sum of two numbers
    function sum(a,b){
        return a+b
    }

//comparion oprators

var xy='8'

if (xy===8){
    console.log(true);
}else {
    console.log(false);
}

if (xy!=8) {
    console.log(true);
}else {
    console.log(false);
}

if (xy!==8) {
    console.log(true);
}else {
    console.log(false);
}

var hm = '4';

if (hm!==4){
    console.log("True");
}else {
    console.log("False");
}

const jj=3;

if (jj>=5){
    console.log("True");
}else {
    console.log("False");
}

///////

let result;
x=10;

/*if (x=11){
    result= "It is True";
}else{
    result= "It is False"
}*/



//ternery operator

result= x === 5 ? " It is True" : "It is False";

console.log(result);

//logical operators || &&  !

let rt;
const ij=45;

if (ij===45 || ij==="hi" ){
    rt= "It is True";
}else{
    rt= "It is False";
}
console.log(rt);

//switch

const z=110;

switch (z){
    case 10:
        console.log("X is 10");
    break;

    case 10:
        console.log("X is 10");
    break;        
    case 10:
        console.log("X is 10");
    break; 
    default:
        console.log(" X is Null");
    break;        
}

//data type

let a= '10';

console.log(typeof a);
console.log(a);

let b= true;

console.log(typeof b);
console.log(b);

let c= [46,"hello",true, ];

console.log(typeof c);
console.log(c);

 // Loop 1: while,for , for...of

 let j= 5;
 while (j<8){
    console.log(j);
    j++;
 }

 const colors= ['red','green','blue'];

 console.log(colors[1]);

 colors.push('brown');
 colors.unshift('yellow');
 colors.pop()

    //  for(let i=0; i<colors.length;i++){
    //     console.log(i);
    //  }

    //  let i= 0;
    //  while (i<colors.length){
    //     console.log(colors[i]);
    //     i++;
    //  }

for(let i=0;i<colors.length; i++){
    console.log(colors[i]); }


 for(const ui of colors){
    console.log(ui);
 }