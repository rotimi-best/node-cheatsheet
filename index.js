/*----------------------------------------------*
*                                               *
*        ROTIMI-BEST CHEAT SHEET                *
*                                               *
*-----------------------------------------------*/
const { log, error } = console;
const len = x => x.length;

//=========================================================
/*  Get last 2 digits from the year
const today = new Date("July 20, 1998 00:20:18");
const year = today.getFullYear().toString().substr(2,2);
console.log(year, '\n\n')

//=========================================================
/* Implemented a caching system for modules

// All functions in the application
const modules = {
  smile: (nameA = 'Faith', nameB = 'Grace') => {
    const statement = `${nameA} and ${nameB} are smiling`;
    return statement;
  },
  favour: (name = 'Faith') => {
    const statement = `${name} is higly favoured`;
    return statement;
  },
  soar: (name = 'Faith') => {
    const statement = `${name} is soaring`;
    return statement;
  }
};

// Cache that holds all used functions
const cache = {};

// Function that gets or updates cache
const getFromCache = (funcName, args = []) => {
  console.log('\n');

  const choosenFunction = cache[funcName] || null;

  if (choosenFunction) {
    console.log('taking from cache');

    return choosenFunction(...args)
  } else {
    const functionFromModule = modules[funcName] || null;

    if (functionFromModule) {
      console.log('taking from modules');
      cache[funcName] = functionFromModule;

      return functionFromModule(...args)
    } else {
      return functionFromModule;
    }
  }
}

const smile = getFromCache('smile', ['Mark']);
console.log(smile); // from module // Mark and Grace are smiling

const aSmile = getFromCache('smile', ['Best', 'Vitaliy']);
console.log(aSmile); // from cache // Best and Vitaliy are smiling

const bSmile = getFromCache('smile');
console.log(bSmile); // from cache // Faith and Grace are smiling

const soar = getFromCache('soar', ['Bill Gates']);
console.log(soar); // from module // Bill Gates is soaring

const unknown = getFromCache('unknown');
console.log(unknown); // null

//=========================================================
/*  Getting all alphabets from numbers

const date = [...Array(26)].map((e,i)=>(i+10).toString(36))

// log(date)
// log((11).toString(36))
//=========================================================
/* Renaming a destructured object
const obj = {
  name: "Best",
  position: "CEO"
};

function displayer(obj) {
  const { name: a, position } = obj;

  console.log(a, position);
}

displayer(obj)

//=========================================================
/* Naming variables without const, let or var

convert = () => {
  const date1 = new Date("2019-01-27 09:34:28");
  const date = new Date();
  console.log(date.getSeconds());
}

state = {
  price: 10
}

convert();
log(state)
//=========================================================
/* Fizzbuz game
function fizzBazGame() {
  const three = "feez";
  const five = "baz";
  const seven = "cola";
  const eleven = "banana";

  for (let i=1; i<=100; i++) {
    let result = i;

    if (i % 3 === 0){
      result = three;
    }

    if (i % 5 === 0) {
      result = five;
    }

    if (i % 7 === 0) {
      result = seven;
    }

    if (i % 11 === 0) {
      result = eleven;
    }

    if (i % 3 === 0 && i % 5 === 0) {
      result = `${three}${five}`;
    }

    if (i % 3 === 0 && i % 7 === 0) {
      result = `${three}${seven}`;
    }

    if (i % 3 === 0 && i % 11 === 0) {
      result = `${three}${eleven}`;
    }

    if (i % 5 === 0 && i % 11 === 0) {
      result = `${five}${eleven}`;
    }

    if (i % 5 === 0 && i % 7 === 0) {
      result = `${five}${seven}`;
    }

    if (i % 7 === 0 && i % 11 === 0) {
      result = `${seven}${eleven}`;
    }

    if (i % 3 === 0 && i % 5 === 0 && i % 7 === 0) {
      result = `${three}${five}${seven}`;
    }

    if (i % 3 === 0 && i % 5 === 0 && i % 7 === 0 && i % 11 === 0) {
      result = `${three}${five}${seven}${eleven}`;
    }

    console.log(result);
  }
}


fizzBazGame();
//=========================================================
/*Using or inside a string literal
const val = 0;

log(`${len(val) || "nodfdsfsaf fsdf"}`)

//=========================================================
/* Passing variables into regex
const best = "Best";
const regex = new RegExp(best);
log(regex)

const args = {a: 1, b: 2, c: 3};
const args2 = {a: 2, b: 3, c: 4};

const { a, b, c} = args || args2;

log(a, b, c)
//=========================================================
/* Testing the || and && operators together
const arg1 = 1;
const arg2 = 2;
const b = "";
const v = "";

if (b || arg1 && v) log('got it')
else log('nope')
//=========================================================
/* Using more than one or (||) for null/undefined/empty variable
const someArr = ["a", "", "c", "", 1, null];
const nothing = null;

const copyArr = someArr.map(val => val || nothing || "nothing");

log(someArr)
log(copyArr)

//=========================================================
/* Playing with template strings
function sayHi(){
  return "hi";
}

function sayBye() {
  return "bye";
}

log(`${sayHi() sayBye()}`) // Error
log(`${sayHi()} ${sayBye()}`); // Correct

//=========================================================
/* Get value of object in a function using the passed arg as the key
const anobj = {
  abc: "abc123",
  def: "def456"
};

function getObj(val) {
  log('an object val',anobj[val])
}
getObj("def")
//=========================================================
/* Checking numbers
const anum = 0;
const bnum = 1;

if (anum) log('something', anum)
if (bnum) log('something', bnum);

// What does this mean?
// !!array.reduce(function(a, b){ return (a === b) ? a : NaN; });

const range = "Northern Europe!A100:Z100";
const range1 = "Ghana Europe!A100:Z0";
const range2 = "UK!A100:Z10067";

const num = range2.split("Z")[1];

// log(split)

const numbers = [];
const k = 9;

// TODO::
// Check if there are arguments
// Check if first arg is an array
// If array check if the array consists of number
// If d 2nd arg is a number 
// currentNumber that holds the no in d array we are adding to.
// Loop through other numbers in the array and add them up to currentNumber. If it equals k then return true
function checkIfAddUp(numbers, k) {
  if (!numbers || !k) {
    return false;
  } else if(!Array.isArray(numbers) || !len(numbers)) {
    return false;
  } else if(isNaN(k)) {
    return false;
  }
}



//=========================================================
/* Remove first val in array
const arr = [[1,2,3], [4,5,6], [7,8,9]];
arr.shift()
log(arr)
//=========================================================
/* Increment result of promise
function rand() {
  return new Promise((res, rej) => {
    setTimeout(_ => res(5));
  });
}

async function calc() {
  const no = await rand() + 1;

  log(no)
}

calc()

//=========================================================
/* Break loop
const arr = [1,2,3,4,5];
// const arr = [{
//   a: 1,b: 2, c: 3, d: 4, e: 5
// }];

for (const val of arr) {
  log(val)
  if (val === 3) break;
}

//=========================================================
/* use an obj to form some other objects
const data = {
  name: "Brad Traversy",
  age: 30
};

const newData = {...data, old: true, children: 15};
const new2Data = {...data, old: false, children: 5};
console.log(newData);
console.log(new2Data);

//=========================================================
/* Check if russian or english word.

const testIfNameHasDot = name => new RegExp("[а-я А-Я A-Z a-z]").test(name);

log(testIfNameHasDot("Best Братт"));

//=========================================================
/* Object to array/ Turn an object into array using the keys of another object
const emUser = {
  name: "",
  age: "",
  bar: "some"
};

const { bar = "bar"} = emUser;

log(bar)

const user = {
    name: "Best",
    age: "No your business"
};

const userArr = Object.keys(emUser).map(data => user[data])
log(userArr)

//=========================================================
/* DEstructring and using same parent variable name
function getMe() {
  const { name } = user;

  if (user) {
    const { name } = emUser;
    return {
      age: "Your business"
    }
  }
  return {
    name: "Best",
    age: "No your business"
  }
}

const namer = getMe().age;
log(namer)

//=========================================================
/* Check if zero can be counted
const zero = 0;

if (len(zero.toString())) log('THERE IS',len(zero))
else if (!len(zero.toString())) log('NOTHING',len(zero))

//=========================================================
/* Incrementing number
let errors = 0;

setInterval(() => {
  errors++;
  log('Error occured', errors);

  if (errors > 7) process.exit();
}, 100);

//=========================================================
/* Array destructuring
const mRoutes = ["/go", "/come"];

const routes = [
"/path",
"/growth",
"/users",
...mRoutes
];

console.log(routes)

const url = "https://www.google.com/gn/jeffbezos/";

const urlParts = url.split('/');

const newUrl = urlParts.join('/');

log(urlParts)
log(newUrl)


//=========================================================
/* Checking for undefined args in a func
function runner(a, b) {
  if (!b) {
    b = "runner"
  }

  log(a, b);
}

runner("I am a");

//=========================================================
/* Changing identifiers inside a function
const user = {
  name: "Best"
};

function getUser() {
  let { name } = user;
  console.log(name);

  name = "John";

  log(name)
}

getUser();

//=========================================================
/* Testing promises and then with console.log

//================  Example 1
new Promise((resolve, reject) => {
  setTimeout(() => resolve("Happy new year"), 2000);
})
.then(console.log);

//=================  Example 2
new Promise((resolve, reject) => {
  setTimeout(() => resolve("Happy new year"), 2000);
})
.then(x => console.log(x)); */

//=========================================================
/* Playing with date and time
const time1 = "08:37:43";
const time2 = "10:57:43";
const time3 = "12:37:43";
const time4 = "23:37:43";

log(time2 < time1)

const daysInTextArr = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const today = new Date("December 23, 2018");
const day = today.getDate();
const dayText = today.getDay() === 0 ? 7 : today.getDay();

log(daysInTextArr[dayText - 1])
log(dayText)


//=========================================================
/* Testing numbers and integers
const str = "1 year ago";
const fkstr = "ago";
const split1 = str.split(' ');
const split2 = fkstr.split(' ');
const firstFrmSplit = (split1[0]);
const secondFrmSplit = (split2[0]);

function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

if (isNumber(firstFrmSplit)) log('first',firstFrmSplit)
if (isNumber(secondFrmSplit)) log('second',secondFrmSplit);

const russia = RegExp('hour').test("24 hours");

log(isFinite(18.0000))

function tell(word) {
  log(word);
  word = "new word";
  log(word);
}

tell("old word");

const date = new Date();

function say(a, b, c){
  if (a) log(b);
  if(c) log(c);
}

say('','', 'c')
//=========================================================
/* Playing with objects and names #morehoisting
let tz = "variable tz";
const details = {tz: "object tz"}

function say(obj) {
  let { tz } = obj;
  console.log(tz);
  tz = tz;
}
say(details);

const country = "Biggest Federation Area";
const sCountry = country.split('Area');
const russia = RegExp('Russia', 'i').test(country);
log(sCountry);

const names = [];
if (names.length > 0) console.log(true);
else console.log(false);

if (names.length) console.log(true);
else console.log(false);

//=========================================================
/* Diff between function a(){} and const a = () => {};
//fa(1); This throws error
const fa = x => {
  log('fa', x);
};
fa(2);

fb(1) // This doesn't throw error
function fb(x) {
  log('fb', x);
}
fb(2);

//=========================================================
/* Check if Replace empty string throws error

const someArr = [[1,2,3], [4,5,6]];
const talk = someArr[0][4] || 'You said --said--';
const talkMore = talk.replace(/--said--/g, "My name");
log(talkMore)

const fname = 'Dr Johnson Brado Omole';
const ifDoctor = name => RegExp('dr.* [a-zA-Z]+', 'i').test(name);
log(ifDoctor("dr"))

//=========================================================
/* default arr value if not exists
const fname = 'Johnson';
const names = fname.split(' ');
const firstname = names[0];
const lastname = names[1] || ' ';

log(firstname, lastname);*/


//=========================================================
/* Using exec in regex
let a = [];
let s = len(a) || 'str';
// log(s)

const ar = '123, dfgdfg';
const af = /\,\s([a-zA-Z]+)/g.exec(ar)[1];
console.log(af)*/

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
