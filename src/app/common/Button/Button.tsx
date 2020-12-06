import styled from 'styled-components';
import theme from '../../../theme/theme';

const Button = styled.button<{ active?: boolean }>`
  height: 38px;
  color: #fff;
  border-radius: 4px;
  border: none;
  background: ${theme.palette.button.primary};
  cursor: pointer;

  &:hover {
    background: ${theme.palette.button.hover};
  }
  &:disabled {
    background: ${theme.palette.button.disabled};
    cursor: auto;
  }
  &:focus {
    outline: none;
  }
`

export default Button;