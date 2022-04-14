import React from 'react'
import tw, { css, styled } from 'twin.macro'
import { P, Body, Bold } from '../../elements/typography'
import HummingbotLogo from '../../svgs/logos/HummingbotLogo'
import TriangleDown from '../../svgs/arrows/TriangleDown'
import Chip from '../chip'

const NavBar = ({ siteNameA, siteNameB, linksLeft, linksRight, userData, ...props }) => {
  return (
    <NavBarRoot>
      <LeftSide>
        <LogoContainer>
          <HummingbotLogo />
          <Body><Bold>{siteNameA}</Bold> {siteNameB}</Body>
        </LogoContainer>
        <LinksRow>
          {linksLeft.map(link =>
            <Chip key={link.url} to={link.url} label={link.label} />
          )}
        </LinksRow>
      </LeftSide>
      <RightSide>
        <LinksRow>
          {linksRight.map(link =>
            <Chip key={link.url} to={link.url} label={link.label} />
          )}
        </LinksRow>
        <img src={userData.profileImage} alt={userData.name} />
        <Menu>
          <P>{userData.name}</P>
          <TriangleDown />
        </Menu>
      </RightSide>
    </NavBarRoot>
  )
}

export default NavBar

const NavBarRoot = styled.div(({ isUppercase, isDisabled }) => [
  tw`flex w-full bg-primary`,
  tw`justify-between items-center`,
  tw`relative py-2 pl-12 pr-4`,
  tw`border-b-2 border-secondary`,
  css`
    .chip {
      ${tw`mr-1`};
    }
  `,
])

const LeftSide = styled.div(({}) => [
  tw`flex`,
  css`
    .logo {
      top: 7px;
      left: 10px;
      ${tw`absolute`};
    }
  `,
])

const LinksRow = styled.div(({}) => [
  tw`hidden lg:flex items-center`,
])

const RightSide = styled.div(({}) => [
  tw`flex items-center`,
  css`
    img {
      ${tw`rounded ml-4`};
    }
    svg {
      ${tw`ml-2`};
    }
    p {
      ${tw`ml-2 p-0 font-medium text-base`};
    }
  `,
])

const LogoContainer = styled.div(({}) => [
  tw`flex mr-8`,
  css`
    svg {
      ${tw`mr-2`};
    }
    p {
      ${tw`ml-2 p-0 select-none`};
    }
  `,
])

const Menu = styled.div(({}) => [
  tw`flex cursor-pointer h-[32px] flex items-center`,
])
