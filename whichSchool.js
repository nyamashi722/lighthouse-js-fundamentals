let bethanyAge = Math.round(Math.random() * 4) + 13
let danyAge = Math.round(Math.random() * 12)
let mariaAge = Math.round(Math.random() * 52) + 18

function school(age) {
  if (age < 13) {
    return "Elementary School";
  } else if (age >= 13 && age <= 18) {
    return "Secondary School";
  } else {
    return "Lighthouse Labs";
  }
}

// Replace the placeholders with your own if conditions for each person.

// Conditions for Bethany
if (school(bethanyAge) === "Elementary School") {
  console.log("Bethany should go to Elementary School");
} else if (school(bethanyAge) === "Secondary School") {
  console.log("Bethany should go to High School");
} else {
  console.log("Bethany should go to Lighthouse Labs");
}

// Conditions for Dany
if (school(danyAge) === "Lighthouse Labs") {
  console.log("Dany should go to Lighthouse Labs");
} else if (school(danyAge) === "Secondary School") {
  console.log("Dany should go to High School");
} else {
  console.log("Dany should go to Elementary School");
}

// Conditions for Maria
if (school(mariaAge) === "Secondary School") {
  console.log("Maria should go to High School");
} else if (school(mariaAge) === "Lighthouse Labs") {
  console.log("Maria should go to Lighthouse Labs");
} else {
  console.log("Maria should go to Elementary School");
}
