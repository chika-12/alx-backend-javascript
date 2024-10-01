function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const money = 'income';
  const val = 'gdp';
  const number = 'capita';
  const budget = {

    [`${money}-${getCurrentYear()}`]: income,
    [`${val}-${getCurrentYear()}`]: gdp,
    [`${number}-${getCurrentYear()}`]: capita,
  };

  return budget;
}
