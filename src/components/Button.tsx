import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { themes } from '../themes'

interface Props {
  title: string;
  mode: string;
  onClick: () => void;
}

function Button({ title, mode, onClick } : Props) {
  const [color, setColor] = useState<string[]>([])

  useEffect(() => {
    switch (mode) {
      case 'lineBlue':
        setColor([themes.colors.white, themes.colors.primary, themes.colors.primary])
        return
      case 'lineBlack':
        setColor([themes.colors.white, themes.colors.black900, themes.colors.black900])
        return
      case 'blue':
        setColor([themes.colors.primary, themes.colors.white, themes.colors.primary])
        return
      case 'black':
        setColor([themes.colors.black900, themes.colors.white, themes.colors.black900])
        return
      case 'disabled':
        setColor([themes.colors.black100, themes.colors.black300, themes.colors.black300])
        return
      default:
        setColor([themes.colors.white, themes.colors.primary, themes.colors.primary])
    }
  }, [mode])

  return (
    <StyledButton $color={color} onClick={onClick}>
      {title}
    </StyledButton>
  )
}

export default Button

interface IButton {
  $color: string[]
}
const StyledButton = styled.button<IButton>`
  background-color: ${({ $color }) => $color[0]};
  color: ${({ $color }) => $color[1]};
  border: 1px solid ${({ $color }) => $color[2]};

  &:hover {
    opacity: 0.8;
  }
  width: 358px;
  height: 48px;
  font-size: 0.875rem;
  font-weight: 600;
  border-radius: 8px;
  transition: all 0.3s ease-in-out;
  flex: 1;
  justify-content: center;
  align-items: center;
`
