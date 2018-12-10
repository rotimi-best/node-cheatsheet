/*----------------------------------------------*
*                                               *
*        ROTIMI-BEST CHEAT SHEET                *
*                                               *
*-----------------------------------------------*/
const { log, error } = console;
const len = x => x.length;
//=========================================================
/*Trying indexof 
const someArr = ["bas", "bras", "soil", "all"];
const someStr = 'soil';
log(someArr.includes(someStr))
log(someArr.indexOf(someStr))
*/


//=========================================================
/*Manipulating objects 
const customFields = ["Brad", "traversy", "Best", "Rotimi"];

const useCustomFields = {
  [customFields[0]]: "Teacher",
  [customFields[1]]: "Trainer",
  [customFields[2]]: "CEO",
  [customFields[3]]: "Tech Lead"
};

log(useCustomFields)*/




//=========================================================
/*Testing split with names
const a = 'Best Rotimi Ibitoye';
const names = a.split(' ');
const [firstname, ...othernames] = names;

const lastname = othernames.join(' ');

log(firstname, lastname);*/



//=========================================================
/*Longest string in an array
const all = ['dsf', 'hheeqq', '.mrmgfdmgdfgdfgdfgdfg', 'sdf', 'sdfsdf', '333'];
let s = {num: 0, str: ''};

all.forEach(val => {
  if (len(val) > s.num) {
    s = {num: len(val), str: val};
  }
});

log(s)*/


//=========================================================
/*Getting Length Dynamically
const l = x => x.length;

const v1 = '1';
const v2 = '2_u';

console.log(l(v1), l(v2));*/


//=========================================================
/*Testing Push
 const arr = [];

 for (let i=0; i<4; i++) {
   arr.push(i);
 }

const [on, tw, ...rest] = arr;
log(on)
log(tw)
log(rest)*/


//=========================================================
/*Testing Array destructuring
const arr = [[1,2], [3,4]];

const so = (args) => {
  for(const arg of args) {
    const [first, second] = arg;
    log(first, second);
  }
}*/


//=========================================================
/* USING SWITCH AND AWAIT INSIDE ANOTHER AWAIT
const aFunction = data => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (data) log(data);
      res('Hi');
    }, 1500);
  })
}
const aFunc = _ => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res('inside');
    }, 1000);
  })
}

const aSwitch = async x => {

  switch(x) {
    case 1:
      const data = await aFunction(await aFunc()); // Can you use await in a switch?
      log(data); // can you console.log inside a switch?
      break;

    default:
      log('Nothing chosen');
  }
}
aSwitch(1); */



//=========================================================
/* Convert Object to array
const obj = {num: 1, day: 'today', to: 19};

function doer(someobj) {
  let newObj = Object.values(someobj);
  log(newObj);
}
doer(obj) */

//=========================================================
/**Checking for variable 
const something = '';
if (something) log('there is somethin');
else log('There is nothing'); */

//=========================================================
/* More destructuring with same name
const someObjArr = [{a:'sd'}, {a: 'cd'}];
const anObj = {a: 'qa'};

for (let some of someObjArr) {
  const { a } = some;
  console.log(a);
  if (a === 'cd') {
    const { a } = anObj;
    console.log(a);
  }
  console.log(a);
}*/

//=========================================================
/**Destructuring array and using ...rest
const someArr = [{name: 'first'}, {name: 'second'}, {name: 'third'}];

const [ eachPerson, ...sdf ] = someArr;

console.log(sdf) */

//=========================================================
/**Destructuring log out of console
const { log } = console; 
log([{a: 1}, [{},{}]][1].length);*/


//=========================================================
/** Using Array.include in empty array
const someArr = [];

if (someArr.includes('d')) {
  console.log('It includes');
} else {
  console.log('does not');
}
*/


//=========================================================
/**Working with iterables  

let arr1 = [1,3,4,5,6,7];
const [a, b, c, d, e] = arr1;
function* fibs() {
  var a = 0;
  var b = 1;
  while (true) {
    yield a;
    // console.log([b, a + b]);
    [a, b] = [b, a + b];
    // console.log(a, b);
  }
}
var [first, second, third, fourth, fifth, sixth, sevent, tenth, fiften] = fibs();
// console.log(first);*/

//=========================================================
/**Trying desctructuring  
let ab; 
let ba;
let ca = 4;
[ab, ba, ca] = [5, 10];
ca = ab+ba;
console.log(ab, ba, ca)

var { foo: fooVal, bar=4 } = { foo: "lorem", bar: "ipsum" };
console.log(fooVal);
console.log(bar);*/

//=========================================================
/*Check if destructuring work when object is not passed into function
function run(obj) {
  // const obj = {name: "repl"};
  const { name } = obj || {name: 'no name'};
  console.log(name) // no name;
}
run({}); */

//=========================================================
/* Pass a function into another function
const { saySomething, runSomeFunction } =  require('./app.js');

runSomeFunction(saySomething);
*/

//=========================================================
/* Count elements in a string
let name1 = 'F Broklin Charles'
let name2 = '☁️ Greg Kelleher ☁️';

let firstWord1 = name1.split(' ')[0];
let firstWord2 = name2.split(' ')[0];

console.log(firstWord1.length);
console.log(firstWord2.length); */ 

//=========================================================
/* Call an object inside a function who both have the same name
const someObj = {
  getUrl: (val) => console.log(val, 'inside object')
};

function getUrl(val) {
  getUrl('hi');
  const { getUrl } = someObj;
  getUrl('hi');
  console.log(val, 'inside a function');
}
*/

//=========================================================
/* Pass key and value into an object as one param
let str = null;
if (str) {
   console.log('Not Empty', str.length)
} else {
  console.log('empty', str)
} 

let friend = {
  name: 'Francis',
  job: 'Doctor'
};
let setter = {}
let name = 'Febe';
let jober = 'Enterpreneur'
console.log('friend', friend)
setter = {name, jober}
console.log('setter', setter) */