import DisplayButton from "../../components/Buttons/DisplayButton";
import OperatorButton from "../../components/Buttons/OperatorButton";
import Display from "../../components/Display/Display";
import { Operator } from "../../contexts/CalculatorProvider";
import * as S from "./Calculator.styled";

const Calculator = () => {
  return (
    <S.Container>
      <Display />
      <S.ButtonsContainer>
        <OperatorButton value={Operator.AllClear} variant={"secondary"} />
        <OperatorButton value={Operator.PlusMinus} variant={"secondary"} />
        <OperatorButton value={Operator.Percent} variant={"secondary"} />
        <OperatorButton value={Operator.Division} />
        <DisplayButton value="7" />
        <DisplayButton value="8" />
        <DisplayButton value="9" />
        <OperatorButton value={Operator.Multiplication} />
        <DisplayButton value="4" />
        <DisplayButton value="5" />
        <DisplayButton value="6" />
        <OperatorButton value={Operator.Subtraction} />
        <DisplayButton value="1" />
        <DisplayButton value="2" />
        <DisplayButton value="3" />
        <OperatorButton value={Operator.Addition} />
        <DisplayButton value="0" span={2} />
        <DisplayButton value="." />
        <OperatorButton value={Operator.Equal} />
      </S.ButtonsContainer>
    </S.Container>
  );
};

export default Calculator;
