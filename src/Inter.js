//1  Question

(function () {
  var a = (b = 3);
})();
console.log("a defined? " + (typeof a !== "undefined"));
console.log("b defined? " + (typeof b !== "undefined"));

// a defined? false
//b defined? true

//2 Question

var myObject = {
  foo: "bar",
  func: function () {
    var self = this;
    console.log("outer func: this.foo = " + this.foo);
    console.log("outer func: self.foo = " + self.foo);
    (function () {
      console.log("inner func: this.foo = " + this.foo);
      console.log("inner func: self.foo = " + self.foo);
    })();
  },
};
myObject.func();

// outer func: this.foo = bar
// outer func: self.foo = bar
// inner func: this.foo = undefined
// inner func: self.foo = bar

// 3 question

function removeDuplicateCharacters(string) {
  return string
    .split("")
    .filter(function (item, pos, self) {
      return self.indexOf(item) == pos;
    })
    .join("");
}
console.log(removeDuplicateCharacters("baraban"));

//4 question

for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log("My value: " + i);
  }, 0);
}

//   function abc(i) {
//     setTimeout(function () {
//       console.log("My value: " + i);
//     }, 0);
//   }

//   for (var i = 0; i < 3; i++) {
//     abc(i);
//   }

//5 question
function func(x) {
  console.log(typeof x, arguments.length);
}
func(); //undefined 0
func(7); // number 1
func("1", "2", "3"); // string 3

//6 question

//input
let data = [
  { car: "audi", data: "1" },
  { car: "ferrari", data: "2" },
  { car: "bmw", data: "3" },
  { car: "audi", data: "4" },
  { car: "ferrari", data: "5" },
  { car: "bmw", data: "6" },
  { car: "honda", data: "7" },
];

//output
let Finaldata = [
  [{ data: "1" }, { data: "4" }],
  [{ data: "2" }, { data: "5" }],
  [{ data: "3" }, { data: "6" }],
  [{ data: "7" }],
];

//Ans

//   let result = {};

//   for (let i = 0; i < data.length; i++) {
//     if (result[data[i].car] !== undefined) {
//       result[data[i].car] = [...result[data[i].car], { data: data[i].data }];
//     } else {
//       result[data[i].car] = [{ data: data[i].data }];
//     }
//   }

//   let finalResult = [];
//   for (let key in result) {
//     finalResult.push(result[key]);
//   }

//   console.log(finalResult);

//question 7

console.log("script start");
setTimeout(function () {
  console.log("setTimeout");
}, 0);
Promise.resolve()
  .then(function () {
    console.log("promise1");
  })
  .then(function () {
    console.log("promise2");
  });
console.log("script end");

// script start
// script end
// promise1
// promise2
// setTimeout

// Question 8     Easy

function func1() {
  console.log(x);
  console.log(y);
  var x = 2;
  let y = 12;
}

func1();

// Question 9   Medium

function func1() {
  setTimeout(() => {
    console.log(x);
    console.log(y);
  }, 3000);

  var x = 2;
  let y = 12;
}

func1();

//  Question 10

var obj = {
  x: 12,
  getX: function () {
    return this.x;
  },
};

const output = obj.getX;
console.log(output()); // undefind
