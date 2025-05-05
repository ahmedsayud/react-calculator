// export function calculatorReducer(state, action) {
//   const { firstNumberInput, secondNumberInput } = action.payload;

//   switch (action.type) {
//     case "SUM":
//       return Number(firstNumberInput) + Number(secondNumberInput);
//     case "SUBTRACT":
//       return Number(firstNumberInput) - Number(secondNumberInput);
//     case "MULTIPLY":
//       return Number(firstNumberInput) * Number(secondNumberInput);
//     case "DIVIDE":
//       return Number(firstNumberInput) / Number(secondNumberInput);
//     default:
//       return state;
//   }
// }

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
