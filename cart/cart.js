const unit_price = 39.99;

const cart = (quantity) => {
  const total = quantity * unit_price;
  const num = total.toFixed(2);
  return parseFloat(num);
};

module.exports = cart;
