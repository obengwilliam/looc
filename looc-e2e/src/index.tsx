import React from "react";
import add from "./add";
import Div from "./components/comp";
import styled from "styled-components";

const H1 = styled.h1`
  color: blue;
`;

interface CounterProps {
  firstNumber: number;
  secondNumber: number;
  someText: string;
  someBool: boolean;
}

const Counter: React.FC<CounterProps> = ({
  firstNumber = 0,
  secondNumber = 0,
  someText = "",
  someBool = false,
}) => {
  const sum = Number(firstNumber) + Number(secondNumber);

  console.log(add(1, 2));

  return (
    <div style={{ backgroundColor: someBool ? "red" : "none" }}>
      <H1>Hello!</H1>
      <Div />
      Here's some text: {someText}
      <div>
        {firstNumber} + {secondNumber} = {sum}
      </div>
    </div>
  );
};

export default Counter;
