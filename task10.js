function makeMessage (name, price) {
     const message = `You picked ${name}, price per item is ${price} credits`;
    
    return message;
  };
  
  makeMessage('Radar', 6150);
  makeMessage('Scanner', 3500);
  makeMessage('Reactor', 8000);
  makeMessage('Engine', 4070);