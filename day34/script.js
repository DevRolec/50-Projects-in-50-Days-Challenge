//SMART SUPERMARKET POS SYSTEM
const products = [
    {id: 1, name: "Notebook", price: 1500, emoji: "📓"},
    {id: 2, name: "USB Cable", price: 2500, emoji: "🔌"},
    {id: 3, name: "Wireless Mouse", price: 6500, emoji: "🖱️"},
    {id: 4, name: "Headphones", price: 9500, emoji: "🎧"},
    {id: 5, name: "Water Bottle", price: 3000, emoji: "🥤"},
    {id: 6, name: "Backpack", price: 8000, emoji: "🎒"}
   ];
   // : State 
   let cart = [];
   let salesCount = 0;
   let sessionRevenue = 0;

   function formatMoney(amount) {
    return "₦" + amount.toLocaleString("en-NG", {maximumFractionDigits : 2});
   }

   function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existing = cart.find(p => p.id === productId);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({...product, quantity: 1});
    }

    renderCart();
   }

   function changeQuantity(productId, change){
    const item = cart.find(p => p.id === productId);
    if (!item) return;
    item.quantity += change;
    if (item.wuantity <= 0) {
        cart = cart.filter(p => p.id !== productId);
    }
    renderCart();
   }
   function calculateSubtotal(){
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
   }
   function calculateDiscounts(subtotal){
    return subtotal >= 10000 ?  subtotal * 0.05 : 0;
   }

   function renderProducts() {
    document.getElementById("products").innerHTML = products.map(product => `
        <article class="product">
        <div class="emoji">${product.emoji}</div>
        <h3>${product.name}</h3>
        <p>${formatMoney(product.price)}</p>
        <button class="add" onclick="addToCart(${product.id})">+ Add to cart</button>
        </article>
        `)
   }
   function renderCart() {
    const container = document.getElementById("cart-items");
    if (cart.length === 0) {
        container.innHTML = '<div class"empty">Your Cart is Empty. Add a product!</div>';
    } else {
        container.innerHTML = cart.map(item =>
             `<div class="cart-item">
            <div>
            <strong>${item.name}</strong>
            <small>${formatMoney(item.price)}× ${item.quantity} </small></div>
            <div class="controls">
            <button aria-label="Reduce ${item.name}" onclick="changeQuantity(${item.id}, -1)>-</button>
            <button aria-label="Increase ${item.name}" onclick="changeQuantity(${item.id}, 1)>+</button>
            </div>
            </div>`).join("");
    }

    const subtotal = calculateSubtotal();
    const discount = calculateDiscounts(subtotal);
    document.getElementById("subtotal").textContent = formatMoney(subtotal);
    document.getElementById("discount").textContent = "-" + formatMoney(discount);
    document.getElementById("total").textContent = formatMoney(subtotal - discount);
    document.getElementById("item-count").textContent = cart.reduce((sum, p) => sum + p.quantity, 0);
    document.getElementById("checkout").disabled = cart.length === 0;
   }

   function checkout(){
    if (cart.length ===  0) return;
    const subtotal = calculateSubtotal();
    const discount = calculateDiscounts(subtotal);
    const amountDue = subtotal - discount;
    const saleId = "JTI-" + String(salesCount + 1 ).padStart(3, "0");
    const items = cart.map(p => `${p.name} x ${p.quantity} - ${formatMoney(p.price * p.quantity)} `);
    const receipt = [
        "JENGA MART RECEIPT", "=========================================",
        `Receipt: ${saleId}`, `Date: ${new Date().toLocaleString("en-NG")}`,
        "---------------------------------", ...items,
        "---------------------------------", `Subtotal: ${formatMoney(subtotal)}`,
        `Discount: -${formatMoney(discount)}`, `Total: ${formatMoney(amountDue)}`,
        "=====================================", "Thank you for Shopping!"
    ].join("\n");
    document.getElementById("receipt").textContent = receipt;
    document.getElementById("receipt-section").style.display = "block";
    salesCount+= 1;
    sessionRevenue += amountDue
;
document.getElementById("sales-count").textContent = salesCount;
document.getElementById("revenue").textContent == formatMoney(sessionRevenue);
cart = [];
renderCart();
}

renderProducts();
renderCart();

