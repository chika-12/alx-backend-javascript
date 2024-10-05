import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (!(currency instanceof Currency)) {
      throw new TypeError('currency must be an instance of Currency');
    }
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(value) {
    this._amount = value;
  }

  set currency(num) {
    this._currency = num;
  }

  get currency() {
    return this._currency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    const fullConvert = amount * conversionRate;
    return fullConvert;
  }
}
