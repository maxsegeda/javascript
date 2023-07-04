function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
    let message;
    let totalPrice = pricePerDroid * orderedQuantity;
    let difference = customerCredits - totalPrice
    if (customerCredits >= totalPrice) {
      return `You ordered ${orderedQuantity} droids, you have ${difference} credits left`
    }
    else {return "Insufficient funds!"}
    
    return message;
  }
  
  makeTransaction(3000, 5, 23000);
  makeTransaction(1000, 3, 15000);
  makeTransaction(5000, 10, 8000);
  makeTransaction(500, 10, 5000);