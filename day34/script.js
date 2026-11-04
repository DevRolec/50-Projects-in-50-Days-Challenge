//SMART SUPERMARKET POS SYSTEM
const products = [
    {id: 1, name: "Notebook", price: 1500, emoji: "📓"},
    {id: 1, name: "USB Cable", price: 2500, emoji: "🔌"},
    {id: 1, name: "Wireless Mouse", price: 6500, emoji: "🖱️"},
    {id: 1, name: "Headphones", price: 9500, emoji: "🎧"},
    {id: 1, name: "Water Bottle", price: 3000, emoji: "🥤"},
    {id: 1, name: "Backpack", price: 8000, emoji: "🎒"}
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

