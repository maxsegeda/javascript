function checkStorage(available, ordered) {
    let message;
   
    if (ordered == 0) {
     return "There are no products in the order!"
     }
     else if (available < ordered ) {
       return "Your order is too large, there are not enough items in stock!"
     }
     else {return "The order is accepted, our manager will contact you"}
    
    return message;
  }
  
  checkStorage(100, 50);
  checkStorage(100, 130);
  checkStorage(70, 0);
  checkStorage(200, 20);
  checkStorage(200, 250);
  checkStorage(150, 0);