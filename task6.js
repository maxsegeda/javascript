let orderedQuantity = 6;
const pricePerDroid = 800;
let deliveryFee = 50;

let totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
const message = `You ordered droids worth ${totalPrice} credits. 
Delivery (${deliveryFee} credits) is included in total price.`;