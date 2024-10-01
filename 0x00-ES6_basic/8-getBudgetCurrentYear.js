function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const budget = {};
  const money = 'income';
  const val = 'gdp';
  const number = 'capita';

  budget[`${money}-${getCurrentYear()}`] = income;
  budget[`${val}-${getCurrentYear()}`] = gdp;
  budget[`${number}-${getCurrentYear()}`] = capita;

  return budget;
}
