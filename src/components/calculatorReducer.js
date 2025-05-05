export function calculatorReducer(state, { type, payload }) {
  const { firstNumberInput, secondNumberInput } = payload;

  switch (type) {
    case "sum":
      return Number(firstNumberInput) + Number(secondNumberInput);
    case "subtract":
      return Number(firstNumberInput) - Number(secondNumberInput);
    case "Multiply":
      return Number(firstNumberInput) * Number(secondNumberInput);
    case "division":
      return Number(firstNumberInput) / Number(secondNumberInput);

    default:
      return state;
  }
}
