import MenuIcon from '@/assets/icons/icon_menu.svg?react'
import LogoIcon from '@/assets/icons/logo_black.svg?react'

import styled from 'styled-components'

export default function Header() {
  return (
    <StyledHeader>
      <StyledMenuIcon />
      <StyledLogoIcon />
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  height: 40px;
  padding: 16px 16px 16px 12px;
  display: flex;
  align-items: center;
`
const StyledMenuIcon = styled(MenuIcon)`
  width: 40px;
  height: 40px;
`

const StyledLogoIcon = styled(LogoIcon)`
  width: 77px;
  height: 28px;
`
