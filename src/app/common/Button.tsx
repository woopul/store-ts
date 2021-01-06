import styled, { css } from 'styled-components';
import theme from '../../theme/theme';

export const Button = styled.button<{ active?: boolean, secondary?: boolean }>`
  height: 38px;
  border-radius: 4px;
  font-size: inherit;
  font-family: inherit;
  font-weight: 600;
  color: #fff;
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
  
  //secondary
  ${props => props.secondary && css`
    color:  ${theme.palette.button.borderSecondary};
    border: ${`1px solid ${theme.palette.button.borderSecondary}`};
    background: #fff;
    
    &:hover {
      background: #fff;
      color:  ${theme.palette.button.hover};
      border:  ${`1px solid ${theme.palette.button.hover}`};
    }

    &:disabled {
      cursor: auto;
      color:  ${theme.palette.button.hover};
      border:  ${`1px solid ${theme.palette.button.disabled}`};
      color: ${theme.palette.button.disabled};
    }
  `}

  &: focus {
  outline: none;
}
`