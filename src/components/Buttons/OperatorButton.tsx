import { FC } from "react";
import { Operator, useCalculator } from "../../contexts/CalculatorProvider";
import * as S from "./Button.styled";

interface OperatorButtonProps extends S.StyledButtonProps {
  value: Operator;
}

const OperatorButton: FC<OperatorButtonProps> = ({
  value,
  variant = "tertiary",
}) => {
  const { handleOperator } = useCalculator();
  return (
    <S.Button variant={variant} onClick={() => handleOperator(value)}>
      {value}
    </S.Button>
  );
};

export default OperatorButton;
