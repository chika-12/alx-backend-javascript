export default class Currency {
  constructor(code, name) {
    this._name = name;
    this._code = code;
  }

  get name() {
    return this._name;
  }

  set name(val) {
    this._name = val;
  }

  get code() {
    return this._code;
  }

  set code(num) {
    this._code = num;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
