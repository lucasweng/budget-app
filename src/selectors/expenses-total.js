export default (expenses) => {
  return expenses.reduce((sum, expense) => sum + expense.amount, 0);
};
