/*let number = 100;
let i = 0;

while (i < 101) {
  if (number % 3 === 0 && number % 4 === 0) {
    console.log("LoopyLighthouse");
    number += 1;
    i++
  } else if (number % 4 === 0) {
    console.log("Lighthouse");
    number += 1;
    i++
  } else if (number % 3 === 0) {
    console.log("Loopy")
    number += 1;
    i++
  } else {
    console.log(number);
    number += 1;
    i++
  }
}*/


let number = 100;

for (let i = 0; i < 101; i++) {
  if (number % 12 === 0) {
    console.log("LoopyLighthouse");
    number += 1;
  } else if (number % 3 === 0) {
    console.log("Loopy");
    number += 1;
  } else if (number % 4 === 0) {
    console.log("Lighthouse");
    number += 1;
  } else {
    console.log(number);
    number += 1;
  }
}

