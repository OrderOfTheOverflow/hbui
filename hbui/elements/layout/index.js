import React from 'react'
import tw, { css, styled } from 'twin.macro'
import { greyscale_light_300 } from '../../constants/colors'

export const Section = styled.div(() => [
  css`
    display: flex;
    flex-direction: column;
  `,
  tw`w-full`,
])

const containerVariants = {
  short: tw`w-[calc(100% - 40px)] md:w-11/12 max-w-[1022px]`,
  large: tw`w-[calc(100% - 40px)] md:w-11/12 xl:w-10/12 2xl:w-[1440px]`,
  full: tw`w-[calc(100% - 40px)] md:w-11/12 xl:w-10/12 2xl:w-[calc(100% - 60px)]`,
}

export const Container = styled.div(() => [
  css`
    align-self: center;
  `,
  ({ variant = 'large' }) => containerVariants[variant]
])

export const ContainerRow = styled(Container)`
  display: flex;
`

export const PaddingBox = styled.div(() => [tw`py-4 md:py-8 lg:py-12`])

export const PageRoot = styled(Section)(() => [
  css`
    min-height: 100vh;
  `,
])

// sidebar layout

export const SBLRoot = styled.div(() => [
  css`
    display: flex;
    align-items: center;
    height: 100vh;
    overflow: hidden;
  `,
])

export const SBLRootContent = styled.div(() => [
  css`
    height: 100vh;
    overflow-y: scroll;
  `,
  tw`bg-body w-full`,
])

export const SBLRootSidebar = styled.div(() => [
  tw`bg-window w-[0] md:w-[270px]`,
  css`
    height: 100vh;
  `,
])

export const ItemsRow = styled.div(() => [
  tw`flex flex-wrap`,
  css`
    > * {
      ${tw`mr-2`}
    }
    > *:last-child {
      ${tw`mr-0`}
    }
  `,
])

export const SeparatorBase = styled.div(props => [
  css`
    height: 1px;
    width: 100%;
    margin-top: 20px;
    border-bottom-width: 1px;
  `,
])

export const Separator = styled(SeparatorBase)(props => [
  tw`border-body`,
])

export const SeparatorWindow = styled(SeparatorBase)(props => [
  tw`border-window`,
])

export const Window = styled.div(({}) => [
  tw`bg-window py-sm px-md rounded border border-window`,
])
