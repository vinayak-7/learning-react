console.log('Namaste Duniya');

// object create

// let rectangle = {
//     length: 1,
//     breadth: 2,

//     draw: function(){
//         console.log('draw');
//     }
// };

// factory function

// function createRectangle(){
//     return rectangle = {
//         length: 1,
//         breadth: 2,

//         draw() {
//             console.log('draw');
//         }
//     };
// }

// let rectangle1 = createRectangle(5,4);
// let rectangle2 = createRectangle(3,6);

// camelcase notation
// constructor function = pascal notation -> first letter of every word is capital
// properties/method -> intialise/define 
// function Rectangle(len,bre){
//     this.length = len;
//     this.breadth = bre;
//     this.draw = function(){
//         console.log('draw');
//     }
// }

// // object creation using constructor function
// let rectanglebject = new Rectangle(4,6);

// rectanglebject.color = 'yellow';

// console.log(rectanglebject);

// delete rectanglebject.color;

// console.log(rectanglebject);

//primitive
// let a = 10;
// let b = a;
// a++;
// console.log(a);

//reference
// let a = {value:10};
// let b = a;
// a.value++;

// console.log(a.value);
// console.log(b.value);

// let rectangle = {
//     length: 2,
//     breadth: 4
// };

// for-in loop
// for(let key in rectangle)
// {
//     console.log(key , rectangle[key]);
// }

// for-of loop
// for(let key of Object.entries(rectangle)){
//     console.log(key);
// }

// if('color' in rectangle)
// {
//     console.log('yes');
// }

// else{
//     console.log('no');
// }

// let src = {
//     a:10,
//     b:20,
//     c:30
// };

// Iteration method
// let dest = {};
// for(let key in src){
//     dest[key] = src[key];
// }

//assign method
// let src2 = {value:25}
// let dest = Object.assign({},src,src2);

//spread method
// let dest = {...src};

// console.log(dest);

// console.log(Math.round(1.2));

// let lastName = 'babbar';

// let firstName = new String('love');

// console.log(typeof(lastName));

// console.log(typeof(firstName));

// function declaration
// function run(){
//     console.log('running');
// }

// run();


// function assignments
// let stand = function walk(){
//     console.log('walking');
// }

// let jump = stand;
// jump();
// stand();

// anonymous function
// let stand2 = function(){
//     console.log('walking');
// }

// stand2();
// console.log('Arrays');

// let arr = [2, 3, 4, 5, 't', 6.8, 9, 8];
// console.log(arr);
// add element at last
// arr.push(89);
// console.log(arr);
// add element at first
// arr.unshift(9);
// console.log(arr);
// add element at middle
// arr.splice(3, 0, 87, 88, 86);
// console.log(arr);

// Searching in array
// console.log(arr.indexOf(88));//present
// console.log(arr.indexOf(93));//absent
// console.log(arr.indexOf(5, 2));//search in a range
// check if elements exist or not in array
// console.log(arr.includes(88));
// console.log(arr.includes(34));