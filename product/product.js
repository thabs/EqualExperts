let cart = [];
module.exports.addProduct = (name, quantity) => {
  let unit_price = 0,
    total = 0;

  switch (name) {
    case "dove_soap":
      unit_price = 39.99;
      const soap = cart.filter(function (e) {
        return (e.name = name);
      });

      const newTotal = calculateTotal(unit_price, quantity);
      console.log(newTotal);

      if (soap.length) {
        total = newTotal + soap[0].total;
        const newQuantity = soap[0].quantity + quantity;

        cart.forEach((item, index) => {
          if (item.name === name) {
            cart[index] = { unit_price, total, quantity: newQuantity };
          }
        });

        return newTotal;
      }

      cart.push({ unit_price, total: newTotal, quantity });
      return newTotal;
    default:
      break;
  }
};

function calculateTotal(unit_price, quantity) {
  const total = quantity * unit_price;
  const num = total.toFixed(2);
  return parseFloat(num);
}

module.exports.queryQuantity = (name) => {
  const product = cart.filter(function (e) {
    return (e.name = name);
  });

  return product[0].quantity;
};

module.exports.queryUnitPrice = (name) => {
  const product = cart.filter(function (e) {
    return (e.name = name);
  });

  return product[0].unit_price;
};

module.exports.queryTotal = (name) => {
  console.log(JSON.stringify(cart));
  const product = cart.filter(function (e) {
    return (e.name = name);
  });
  const total = product[0].total.toFixed(2);
  return parseFloat(total);
};

module.exports.clearCart = () => {
  cart = [];
  return cart;
};
