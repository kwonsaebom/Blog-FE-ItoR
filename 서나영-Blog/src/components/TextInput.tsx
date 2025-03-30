import React, { useState, InputHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

type InputState = 'default' | 'input' | 'click' | 'disabled';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  width?: string;
  disabled?: boolean;
}

const inputStyles = {
  default: css`
    color: #909090;
    border-radius: 4px;
    border: 1px solid var(--Gray90, #e6e6e6);
    background: #fff;
  `,
  input: css`
    color: #000;
    border-radius: 4px;
    border: 1px solid var(--Gray90, #e6e6e6);
    background: #fff;
  `,
  click: css`
    color: #000;
    border-radius: 4px;
    border: 1px solid var(--Gray-33, #555);
    background: #fff;
  `,
  disabled: css`
    color: #909090;
    border-radius: 4px;
    border: 1px solid var(--Gray90, #e6e6e6);
    background: var(--Gray90, #e6e6e6);
    color: #a0a0a0;
    cursor: not-allowed;
  `,
};

const StyledInputContainer = styled.div<{ width?: string; $state: InputState }>`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
  width: ${({ width }) => width || '100%'};
  ${({ $state }) => inputStyles[$state]};
`;

const StyledInput = styled.input`
  border: none;
  outline: none;
  width: 100%;
  font-size: 14px;
  background: transparent;
  color: inherit;
`;

const TextInput = ({ width, disabled, ...props }: TextInputProps) => {
  const [state, setState] = useState<InputState>('default');

  const handleFocus = () => setState('click');
  const handleBlur = () => setState('input');

  return (
    <StyledInputContainer width={width} $state={disabled ? 'disabled' : state}>
      <StyledInput {...props} disabled={disabled} onFocus={handleFocus} onBlur={handleBlur} />
    </StyledInputContainer>
  );
};

export default TextInput;
