//Build a simple shopping cart that calculates 
// the total price of products and applies a discount.

const laptopPrice = 250000;
const mousePrice = 5000;
const keyboardPrice = 12000;

const quantity = 2;

const subTotal = 
(laptopPrice * quantity) + (mousePrice * quantity) + keyboardPrice;

const discountRate = 0.05;

const discount = subTotal * discountRate;
const finalAmount = subTotal - discount;

console.log("subTotal: ", subTotal);
console.log("Discount: ", discount);
console.log("Final Amount: ", finalAmount);

