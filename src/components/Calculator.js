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
