function addAll(...numbers) {
    let total = 0;

    for (let number of numbers){
        total += number;
    }

    return total;
}
console.log(addAll(2, 3, 4, 5, 6));

// If and Else statements
function checkEvenOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    }  else {
        return "The number givern is Odd 😎"
    }
}

console.log(checkEvenOdd(33021));
//##########################################################
function getGrade(score) {
    if (score >= 70){
     return "A";
    } else if (score >= 60) {
    return "B"
    } else if (score >= 50){
        return "C"
    }else if (score >= 40) {
        return "D"
    }else{
     return "F"
    }
}

console.log(getGrade(49));
console.log(getGrade(69));
console.log(getGrade(89));

//###############################################
function mulltiplicationTable(number){
  for (let i = 1; i <= 12; i++){
    console.log(`${number} x ${i} = ${number * i}`)
  }
}

mulltiplicationTable(67);