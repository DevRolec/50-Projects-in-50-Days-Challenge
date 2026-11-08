//Nested loop is a loop inside another loop

for (let row = 1; row <= 1; row++) {
    for (let col = 1; col <= 5; col++) {
        console.log(`Row ${row}, Column ${col}`);
    }
}
//Pattern Generator...
function printPattern(rows){
    for (let i = rows; i >= 1; i--) {
        let pattern = "";

        for (let j =1; j <= i; j++) {
            pattern += "★";
        }
        console.log(pattern);

    }
}
printPattern(8);