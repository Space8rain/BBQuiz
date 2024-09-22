import styled from "styled-components";


export const Button = styled.button<{$width?: string; $bgColor?: string; $color?: string;}>`
  min-width: 250px;
  max-width: ${props => props.$width || '280px'};
  background-color: ${props => `var(${props.$bgColor || `--accent-color`})`};
  padding: 17px;
  border-radius: 8px;
  color: ${props => `var(${props.$color || `--second-color-text`})`};
  font-family: "Lato", sans-serif;
  font-weight: 600;
  font-size: 18px;
  font-style: normal;
  cursor: pointer;
  border: none;

  &:disabled {
    background-color: var(--disabled-color-button);
    color: #71717A;
  }
`;