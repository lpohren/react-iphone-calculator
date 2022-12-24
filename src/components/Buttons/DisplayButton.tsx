import { FC } from "react";
import { useCalculator } from "../../contexts/CalculatorProvider";
import * as S from "./Button.styled";

interface DisplayButtonProps extends S.StyledButtonProps {
  value: string;
}

const DisplayButton: FC<DisplayButtonProps> = (props) => {
  const { handleDisplay } = useCalculator();
  const { value, ...rest } = props;

  return (
    <S.Button variant="primary" {...rest} onClick={() => handleDisplay(value)}>
      <span>{value}</span>
    </S.Button>
  );
};

export default DisplayButton;
