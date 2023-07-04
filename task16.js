function checkStorage(available, ordered) {
    let message;
    if (available > ordered ) {
      return "Order is processed, our manager will contact you.";
    }
    else { return "Not enough goods in stock!"};
    return message;
  }
  
  checkStorage(100, 50);
  checkStorage(100, 130);
  checkStorage(200, 20);
  checkStorage(200, 150);
  checkStorage(150, 180);