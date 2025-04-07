import { forwardRef, InputHTMLAttributes, useId } from "react";

import * as S from "./styles";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  helperText?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { type = "text", name = "", label = "", helperText = "", ...props },
    ref
  ) => {
    const inputId = useId();
    const hasError = helperText.length > 0;

    return (
      <S.Container>
        <S.Label htmlFor={inputId}>{label}</S.Label>
        <S.Input
          id={inputId}
          type={type}
          name={name}
          ref={ref}
          hasError={hasError}
          {...props}
        />
        {hasError && <S.HelperText>{helperText}</S.HelperText>}
      </S.Container>
    );
  }
);

Input.displayName = "Input";
