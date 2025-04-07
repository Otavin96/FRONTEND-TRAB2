import { forwardRef, ButtonHTMLAttributes } from "react";
import * as S from "./styles"; // Supondo que você está usando styled-components

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ type = "submit", text, ...props }, ref) => {
    return (
      <S.Button ref={ref} type={type} {...props}>
        {text}
      </S.Button>
    );
  }
);

Button.displayName = "Button"; // Importante pro forwardRef
