import currencyFormatter from "currency-formatter";

const currency = (money, type = "USD") => {
  return currencyFormatter.format(money, { code: type });
};

export { currency };
