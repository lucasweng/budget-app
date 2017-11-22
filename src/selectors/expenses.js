// Get visible expenses
export default (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    // timestamps (milliseconds)
    // January 1st 1970 (unix epoch)
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;

    // figure out if expenses.description has the text variable string inside of it
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt > b.createdAt ? -1 : 1;
    } else if (sortBy === 'amount') {
      return a.amount > b.amount ? -1 : 1;
    }
  });
};
