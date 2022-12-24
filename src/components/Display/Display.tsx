import { FC } from "react";
import { useCalculator } from "../../contexts/CalculatorProvider";
import { Container } from "./Display.styled";

const Display: FC = () => {
  const { displayValue } = useCalculator();
  return <Container>{displayValue}</Container>;
};

export default Display;
