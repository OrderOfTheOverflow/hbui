import React, { useState, useEffect } from 'react'
import tw, { css, styled } from 'twin.macro'
import { Link, NavLink, useLocation, useHistory } from 'gatsby'
import { P, Body, H6, Bold } from '../../elements/typography'
import { ItemsRow } from '../../elements/layout'
import { Button } from '../../elements/buttons'
import HomeIcon from '../../assets/svgs/icons/Home'
import TextLink from '../textlink'

function BreadcrumbsBar({links, buttons, history}) {
  return (
    <BreadcrumbsBarRoot>
      { links && <HomeIcon />}
      { links && <ChevronRight />}
      { links &&
        <LinksRow>
         {
          links.map((link, index) => {
            return(
              <span key={link.url + index} tw='flex items-center'>
                { index !== 0 && <P className='divider'>/</P> }
                <TextLink to={link.url} label={link.label} />
              </span>
            )
          })
         }
        </LinksRow>
      }
      { buttons &&
        <div style={{margin: '0 auto', width: '696px'}}>
          <ItemsRow>
            {
              buttons.map((button, index) => {
              return(
                <Link key={button.url + index} to={button.url}>
                  {button.url === history.pathname ?
                    <Button isSuccess isSmall>
                      {button.label}
                    </Button>
                    :
                    <Button isSmall>
                      {button.label}
                    </Button>
                  }
                </Link>
              )
            })
            }
          </ItemsRow>
        </div>
      }
    </BreadcrumbsBarRoot>
  )
}

export default BreadcrumbsBar

const BreadcrumbsBarRoot = styled.div(({ isUppercase, isDisabled }) => [
  tw`flex w-full relative`,
  tw`items-center`,
  tw`relative py-2.5 px-4`,
  tw`border-b border-body`,
  css`
    a.active {
      ${tw`text-green dark:text-terminal`}
    }
    .home-icon {
      ${tw`relative top-[-1px]`}
    }
    .divider {
      ${tw`text-sm text-tertiary`}
      display: inline;
      line-height: 100%;
    }
    .inner-chevron-right, .divider {
      ${tw`mx-[10px]`}
    }
  `,
])

const LinksRow = styled.div(({}) => [
  tw`flex items-center`,
])


function ChevronRight() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="5"
      height="9"
      fill="none"
      viewBox="0 0 5 9"
      className='inner-chevron-right'
    >
      <path
        fill="#788187"
        d="M1.086.562C.876.328.524.328.289.54c-.234.211-.234.563-.023.797l3 3.164-3 3.187c-.211.235-.211.586.023.797.235.211.586.211.797-.023l3.375-3.563a.665.665 0 00.164-.398c0-.117-.07-.258-.164-.375L1.086.562z"
      ></path>
    </svg>
  );
}
