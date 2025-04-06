import MenuIcon from '@/assets/icons/icon_menu.svg?react'
import LogoIcon from '@/assets/icons/logo_black.svg?react'

import styled from 'styled-components'

export default function Header() {
  return (
    <header class='flex items-center'>
      <MenuIcon></MenuIcon>
      <LogoIcon class='w-[77px] h-[28px]'></LogoIcon>
    </header>
  )
}
