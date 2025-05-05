// import React from "react";
// import { useState, useReducer } from "react";
// import {
//   Button,
//   Container,
//   TextField,
//   Typography,
//   Stack,
//   Paper,
// } from "@mui/material";

// function reducer(state, { type, payload }) {
//   const { firstNumberInput, secondNumberInput } = payload;
//   switch (type) {
//     case "sum":
//       return Number(firstNumberInput) + Number(secondNumberInput);
//     case "Subtrac":
//       return Number(firstNumberInput) - Number(secondNumberInput);
//     case "Multiply":
//       return Number(firstNumberInput) * Number(secondNumberInput);
//     case "Divide":
//       return Number(firstNumberInput) / Number(secondNumberInput);
//     default:
//       return state;
//   }
//   // return state ;
// }
// function Calculator() {
//   const [firstNumberInput, setFirstNumberInput] = useState(null);
//   const [secondNumberInput, setSecondNumberInput] = useState(null);
//   const [Resuit, setResuit] = useState("");

//   function handleSumClick() {
//     const resalt = Number(firstNumberInput) + Number(secondNumberInput);
//     setResuit(resalt);
//   }
//   function handleSubtractClick() {
//     const resalt = Number(firstNumberInput) - Number(secondNumberInput);
//     setResuit(resalt);
//   }
//   function handleMultiplyClick() {
//     const resalt = Number(firstNumberInput) * Number(secondNumberInput);
//     setResuit(resalt);
//   }
//   function handleDivideClick() {
//     const resalt = Number(firstNumberInput) / Number(secondNumberInput);
//     setResuit(resalt);
//   }

//   return (
//     <Container maxWidth="sm">
//       <Paper elevation={3} sx={{ p: 4, mt: 5, textAlign: "center" }}>
//         <Typography variant="h4" gutterBottom>
//           React Calculator
//         </Typography>

//         <Stack spacing={2}>
//           <TextField
//             label="First Number"
//             type="number"
//             value={firstNumberInput}
//             onChange={(e) => {
//               setFirstNumberInput(e.target.value);
//             }}
//           />
//           <TextField
//             label="Second Number"
//             type="number"
//             value={secondNumberInput}
//             onChange={(e) => {
//               setSecondNumberInput(e.target.value);
//             }}
//           />

//           <Stack direction="row" spacing={2} justifyContent="center">
//             <Button variant="contained" onClick={handleSumClick}>
//               Sum
//             </Button>
//             <Button variant="contained" onClick={handleSubtractClick}>
//               Subtract
//             </Button>
//             <Button variant="contained" onClick={handleMultiplyClick}>
//               Multiply
//             </Button>
//             <Button variant="contained" onClick={handleDivideClick}>
//               Divide
//             </Button>
//           </Stack>

//           <Typography variant="h6" mt={2}>
//             state: {Resuit}
//           </Typography>
//         </Stack>
//       </Paper>
//     </Container>
//   );
// }

// export default Calculator;

// import React, { useState, useReducer } from "react";
// import {
//   Button,
//   Container,
//   TextField,
//   Typography,
//   Stack,
//   Paper,
// } from "@mui/material";
// import {
//   calculatorReducer,

// } from "./calculatorReducer"; // استيراد الريديوسر

// function Calculator() {
//   const [firstNumberInput, setFirstNumberInput] = useState("");
//   const [secondNumberInput, setSecondNumberInput] = useState("");

//   const [result, dispatch] = useReducer(calculatorReducer, "");

//   function handleOperation(type) {
//     dispatch({
//       type,
//       payload: {
//         firstNumberInput,
//         secondNumberInput,
//       },
//     });
//   }

//   return (
//     <Container maxWidth="sm">
//       <Paper elevation={3} sx={{ p: 4, mt: 5, textAlign: "center" }}>
//         <Typography variant="h4" gutterBottom>
//           React Calculator
//         </Typography>

//         <Stack spacing={2}>
//           <TextField
//             label="First Number"
//             type="number"
//             value={firstNumberInput}
//             onChange={(e) => setFirstNumberInput(e.target.value)}
//           />
//           <TextField
//             label="Second Number"
//             type="number"
//             value={secondNumberInput}
//             onChange={(e) => setSecondNumberInput(e.target.value)}
//           />

//           <Stack direction="row" spacing={2} justifyContent="center">
//             <Button variant="contained" onClick={() => handleOperation("SUM")}>
//               Sum
//             </Button>
//             <Button
//               variant="contained"
//               onClick={() => handleOperation("SUBTRACT")}
//             >
//               Subtract
//             </Button>
//             <Button
//               variant="contained"
//               onClick={() => handleOperation("MULTIPLY")}
//             >
//               Multiply
//             </Button>
//             <Button
//               variant="contained"
//               onClick={() => handleOperation("DIVIDE")}
//             >
//               Divide
//             </Button>
//           </Stack>

//           <Typography variant="h6" mt={2}>
//             state: {result}
//           </Typography>
//         </Stack>
//       </Paper>
//     </Container>
//   );
// }

// export default Calculator;

import React, { useState, useReducer, use } from "react";
import {
  Button,
  Container,
  TextField,
  Typography,
  Stack,
  Paper,
} from "@mui/material";
import { calculatorReducer } from "./calculatorReducer";
import { type } from "@testing-library/user-event/dist/type";

function Calculator() {
  const [firstNumberInput, setFirstNumberInput] = useState("");
  const [secondNumberInput, setSecondNnumberInput] = useState("");

  const [state, dispatch] = useReducer(calculatorReducer, "");

  function handleOperation(type) {
    dispatch({
      type,
      payload: {
        firstNumberInput: firstNumberInput,
        secondNumberInput: secondNumberInput,
      },
    });
  }
  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 4, mt: 5, textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          React Calculator
        </Typography>

        <Stack spacing={2}>
          <TextField
            label="First Number"
            type="number"
            value={firstNumberInput}
            onChange={(e) => {
              setFirstNumberInput(e.target.value);
            }}
          />
          <TextField
            label="Second Number"
            type="number"
            value={secondNumberInput}
            onChange={(e) => {
              setSecondNnumberInput(e.target.value);
            }}
          />

          <Stack direction="row" spacing={2} justifyContent="center">
            <Button
              variant="contained"
              onClick={() => {
                handleOperation("sum");
              }}
            >
              Sum
            </Button>
            <Button
              variant="contained"
              onClick={() => {
                handleOperation("subtract");
              }}
            >
              Subtract
            </Button>
            <Button
              variant="contained"
              onClick={() => {
                handleOperation("Multiply");
              }}
            >
              Multiply
            </Button>
            <Button
              variant="contained"
              onClick={() => {
                handleOperation("division");
              }}
            >
              Divide
            </Button>
          </Stack>

          <Typography variant="h6" mt={2}>
            {state}
          </Typography>
        </Stack>
      </Paper>
    </Container>
  );
}

export default Calculator;
