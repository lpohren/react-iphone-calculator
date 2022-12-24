import styled, { css } from "styled-components";

export interface StyledButtonProps {
  variant?: "primary" | "secondary" | "tertiary";
  span?: number;
}

export const Button = styled.button<StyledButtonProps>`
  width: 100%;
  aspect-ratio: 1;
  border-radius: 50%;
  border: none;
  transition: 0.3s background-color;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  background: #333333;
  color: #ffffff;
  transition-duration: 1s;
  transition-property: background-color;
  transition-timing-function: ease-out;
  :active {
    transition-duration: 0s;
    background: #5d5d5d;
  }

  ${(props) =>
    props.variant === "secondary" &&
    css`
      background: #a5a5a5;
      color: #000000;

      :active {
        background: #cdcdcd;
      }
    `}

  ${(props) =>
    props.variant === "tertiary" &&
    css`
      background: #ff9f06;
      color: #ffffff;

      :active {
        background: #ffd694;
      }
    `}

  ${(props) =>
    props.span &&
    css`
      grid-column: ${props.span} span;
      border-radius: 10rem;
      aspect-ratio: 0;
      justify-content: start;
      span {
        margin-left: 15%;
      }
    `}
`;
