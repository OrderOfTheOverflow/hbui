import tw, { css, styled } from 'twin.macro'
import {
  green,
  red,
  blue,
  orange,
} from '../../constants/colors'

const sharedTransforms = props => [
  tw`text-primary`,
  tw`m-0 font-normal`,
  props.isSmall && tw`text-sm`,
  props.isUnderline && tw`underline`,
  props.isUppercase && tw`uppercase`,
  props.isItalic && tw`italic`,
  props.isLight && tw`font-light`,
  props.isMedium && tw`font-medium`,
  props.isBold && tw`font-bold`,
  props.isExtraBold && tw`font-extrabold`,
  props.isHeavy && tw`font-black`,
  props.isPulsing && tw`animate-pulse`,
  props.isCentered && tw`text-center`,
  props.noSelect && tw`select-none`,
  props.isWhite && tw`!text-white`,
  props.isGreen && tw`!text-green`,
  props.isRed && tw`!text-red`,
  props.isBlue && tw`!text-blue`,
  props.isOrange && tw`!text-orange`,
  props.isYellow && tw`!text-yellow`,
  props.leadingNone &&
    css`
      line-height: 100% !important;
    `,
  props.isLabel &&
    css`
      user-select: none;
      font-family: Inter !important;
      line-height: 100% !important;
    `,
  css`
    a {
      text-decoration: underline;
    }
  `,
]

export const PNano = styled.p(
  {},
  props => [tw`text-[11px]`],
  sharedTransforms,
)
export const PTiny = styled.p(
  {},
  props => [tw`text-xs`],
  sharedTransforms,
)

export const PSmall = styled.p(
  {},
  props => [tw`text-sm`],
  sharedTransforms,
)

export const P = styled.p(
  {},
  props => [tw`text-base lg:text-lg`],
  sharedTransforms,
)

export const Body = styled.p(
  {},
  props => [tw`pb-1 md:pb-8 text-lg md:text-xl`],
  sharedTransforms,
)

export const H6 = styled.h6(
  {},
  props => [tw`text-lg md:text-xl lg:text-2xl`],
  sharedTransforms,
)

export const H5 = styled.h5(
  {},
  props => [tw`text-xl md:text-2xl lg:text-3xl`, tw`tracking-normal`],
  sharedTransforms,
)

export const H4 = styled.h4(
  {},
  props => [tw`text-2xl md:text-3xl lg:text-4xl`, tw`tracking-normal`],
  sharedTransforms,
)

export const H3 = styled.h3(
  {},
  props => [tw`text-3xl md:text-4xl lg:text-5xl`, tw`tracking-tight`],
  sharedTransforms,
)

export const H2 = styled.h2(
  {},
  props => [tw`text-4xl md:text-5xl lg:text-6xl`, tw`tracking-tight`],
  sharedTransforms,
)

export const H1 = styled.h1(
  {},
  props => [tw`text-5xl md:text-6xl lg:text-7xl`, tw`tracking-tight`],
  sharedTransforms,
)

// helpers

export const PrimaryColor = styled.span({
  color: green,
})

export const Bold = styled.span({
  fontWeight: 'bold',
})

export const Medium = styled.span({
  fontWeight: '500',
})

export const Underline = styled.span({
  textDecoration: 'underline',
})

export const Red = styled.span({
  color: red,
})

export const Blue = styled.span({
  color: blue,
})

export const Green = styled.span({
  color: green,
})

export const Orange = styled.span({
  color: orange,
})

// forms / dashboards

const FieldLabelNano = styled(PNano)({
  fontFamily: 'Inter',
  lineHeight: '1 !important'
})

const FieldLabelTiny = styled(PTiny)({
  fontFamily: 'Inter',
  lineHeight: '1 !important'
})

const FieldLabelSmall = styled(PSmall)({
  fontFamily: 'Inter',
  lineHeight: '1 !important'
})

const FieldLabel = styled(P)({
  fontFamily: 'Inter',
  lineHeight: '1 !important'
})

const labelStyles = [
  tw`text-tertiary`,
  tw`font-medium`,
  tw`leading-none`,
]

export const LabelNano = styled(FieldLabelNano)({}, props => labelStyles)
export const LabelTiny = styled(FieldLabelTiny)({}, props => labelStyles)
export const LabelSmall = styled(FieldLabelSmall)({}, props => labelStyles)
export const Label = styled(FieldLabel)({}, props => labelStyles)
