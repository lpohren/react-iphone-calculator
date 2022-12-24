import React, {
  useState,
  createContext,
  useCallback,
  useContext,
  useMemo,
} from "react";

export enum Operator {
  Addition = "+",
  Subtraction = "-",
  Multiplication = "x",
  Division = "÷",
  Equal = "=",
  Percent = "%",
  PlusMinus = "±",
  AllClear = "AC",
}

interface ICalculatorProvider {
  displayValue: string;
  handleDisplay: (input: string) => void;
  handleOperator: (operator: Operator) => void;
}

interface IMemory {
  operator: Operator | null;
  value: number;
}

const initialDisplayValue = "0";

const initialMemory = {
  value: 0,
  operator: null,
};

const initialContext = {
  displayValue: initialDisplayValue,
  handleDisplay: () => {},
  handleOperator: () => {},
};

const CalculatorContext = createContext<ICalculatorProvider>(initialContext);

const ListProvider = ({ children }: { children: React.ReactNode }) => {
  const [displayValue, setDisplayValue] = useState(initialDisplayValue);
  const [memory, setMemory] = useState<IMemory>(initialMemory);

  const handleDisplay = useCallback((input: string) => {
    setDisplayValue((prevState) => prevState.replace(/^0+/, "") + input);
  }, []);

  const calculateMemory = useCallback(() => {
    const displayNumber = parseFloat(displayValue);
    switch (memory.operator) {
      case Operator.Addition:
        return memory.value + displayNumber;
      case Operator.Subtraction:
        return memory.value - displayNumber;
      case Operator.Multiplication:
        return memory.value * displayNumber;
      case Operator.Division:
        return memory.value / displayNumber;
      default:
        return displayNumber;
    }
  }, [displayValue, memory]);

  const handleOperator = useCallback(
    (operator: Operator) => {
      const displayNumber = parseFloat(displayValue);

      switch (operator) {
        case Operator.Addition:
        case Operator.Subtraction:
        case Operator.Multiplication:
        case Operator.Division:
          setMemory({
            operator: operator,
            value: calculateMemory(),
          });
          setDisplayValue("0");
          break;
        case Operator.Percent:
          setDisplayValue((displayNumber / 100).toString());
          break;
        case Operator.PlusMinus:
          setDisplayValue((displayNumber * -1).toString());
          break;
        case Operator.Equal:
          const calculatedValue = calculateMemory();
          setDisplayValue(calculatedValue.toString());
          setMemory({
            operator: operator,
            value: calculatedValue,
          });
          break;
        case Operator.AllClear:
          setDisplayValue(initialDisplayValue);
          setMemory(initialMemory);
          break;
        default:
      }
    },
    [displayValue, calculateMemory]
  );

  const value = useMemo(
    () => ({ displayValue, handleDisplay, handleOperator }),
    [displayValue, handleDisplay, handleOperator]
  );

  return (
    <CalculatorContext.Provider {...{ value }}>
      {children}
    </CalculatorContext.Provider>
  );
};

export const useCalculator = () => {
  const context = useContext(CalculatorContext);
  return context;
};

export default ListProvider;
