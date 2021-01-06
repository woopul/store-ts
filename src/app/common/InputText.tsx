import React from 'react'
import styled from 'styled-components';

export const InputText = styled.input`
  outline: none;
  line-height: 16px;
  border: 1px solid #E0E2EA;
  width: 100%;
  padding: 16px;
  border-radius: 8px;
  transition: all .4s;
 
  &:focus {
    border: 1px solid #aeafaf;
  }
`